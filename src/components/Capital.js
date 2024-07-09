import React, { useEffect, useState } from "react";
import { url } from "../App";
import axios from "axios";

function Capital() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [summary, setSummary] = useState([]);

  const [totalCapital, setTotalCapital] = useState(0);
  const [totalInterestAmount, setTotalInterestAmount] = useState(0);

  let handleSubmit = async () => {
    try {
      const res = await axios.get(`${url}/capital`, {
        params: { fromDate, toDate },
      });
      console.log(res);
      setSummary(res.data.capital);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(summary);

  useEffect(() => {
    let { totalCapital, totalInterestAmount } = summary.reduce(
      (acc, s) => {
        acc.totalCapital += s.capital;
        acc.totalInterestAmount += s.interestAmount;
        return acc;
      },
      { totalCapital: 0, totalInterestAmount: 0 }
    );

    setTotalCapital(totalCapital);
    setTotalInterestAmount(totalInterestAmount);
  }, [summary]);
  console.log(totalCapital);
  console.log(totalInterestAmount);

  let totalCollection = totalCapital + totalInterestAmount;
  console.log(totalCollection);

  return (
    <>
      <div
        style={{
          backgroundColor: "#FFFDB5",
          color: "#01204E",
          height: "100vh",
        }}
      >
        <h1
          className="text-center"
          style={{ fontSize: 50, textDecoration: "underline" }}
        >
          Capital+Interest Amount
        </h1>
        <div
          style={{
            display: "flex",
            gap: 60,
            justifyContent: "center",
            marginTop: 100,
            fontSize: 30,
          }}
        >
          <div>
            <label style={{ marginRight: 20 }}>From Date:</label>
            <input
              type="date"
              name="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div>
            <label style={{ marginRight: 20 }}>To Date: </label>
            <input
              type="date"
              name="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button
            style={{
              backgroundColor: "#9BEC00",
              width: 300,
              height: 80,
              fontSize: 35,
              marginBottom: 20,
            }}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
        <hr />

        <div style={{ marginTop: 60, marginTop: 100, fontSize: 50 }}>
          Total Capital Amount:&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontWeight: 600 }}>{totalCapital}</span>
        </div>
        <div style={{ marginTop: 30, fontSize: 50 }}>
          Total Interest Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontWeight: 600 }}>{totalInterestAmount}</span>
        </div>
        <div style={{ marginTop: 30, fontSize: 50, marginLeft: 136 }}>
          Total Collection:&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontWeight: 600 }}>{totalCollection}</span>
        </div>
      </div>
    </>
  );
}

export default Capital;
