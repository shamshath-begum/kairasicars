import React, { useEffect, useState } from "react";
import { emi } from "../../redux/emiSlice";
import { useDispatch } from "react-redux";
import { url } from "../../App";
import axios from "axios";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";

function EMIMultiple() {
  const [EMI, setEMI] = useState([]);
  console.log(EMI);
  console.log(EMI.paidDate);

  let dispatch = useDispatch();

  let navigate = useNavigate();
  let getData = async () => {
    try {
      let res = await axios.get(`${url}/emi-multiple`);
      console.log(res.data.emiDetails);
      if (res.status === 201) {
        setEMI(res.data.emiDetails);
        dispatch(emi(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatPaidDate = (paidDate) => {
    let date = new Date(paidDate);
    let day = String(date.getUTCDate()).padStart(2, "0");
    let month = String(date.getUTCMonth() + 1).padStart(2, "0");
    let year = date.getUTCFullYear();
    return `${day}.${month}.${year}`;
  };

  let deleteEMI = () => {};

  return (
    <>
      <div className=" mt-5 ">
        <h1 style={{ textAlign: "center" }}>MULTI CUSTOMERS EMI DETAILS</h1>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <input type="search" />
          <button>Search</button>
        </div>
        <Table
          striped
          bordered
          hover
          style={{ width: 1690, textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>HypothicationNo</th>
              <th>Name</th>
              {/* <th>Image</th> */}
              <th>Loan Amount</th>
              <th>Actual Due Date</th>
              <th>Paid Date</th>
              <th>Actual EMI Amount</th>
              <th>Paid Amount</th>
              <th>Capital</th>
              <th>Interest Amount</th>
              <th>Mode Of Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {EMI.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer" }}>
                  <td>{e.HypothicationNo}</td>
                  <td style={{ textAlign: "left" }}>{e.name}</td>
                  {/* <td><Image src={`http://localhost:8080/${e.imgpath}`} style={{width:80,height:80,marginLeft:60}}roundedCircle /></td> */}
                  <td style={{ textAlign: "right" }}>{e.loanAmount}</td>
                  <td>{formatPaidDate(e.actualDueDate)}</td>
                  <td>{formatPaidDate(e.paidDate)}</td>
                  <td style={{ textAlign: "right" }}>{e.actualEMIAmount}</td>
                  <td style={{ textAlign: "right" }}>{e.paidAmount}</td>
                  <td style={{ textAlign: "right" }}>{e.capital}</td>
                  <td style={{ textAlign: "right" }}>{e.interestAmount}</td>
                  <td>{e.modeOfPayment}</td>
                  <td>{e.status}</td>
                  <td>
                    <Button
                      style={{ backgroundColor: "#121481" }}
                      onClick={() => navigate(`/emi-edit/${e._id}`)}
                    >
                      Edit
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      style={{ backgroundColor: "#FF7F3E" }}
                      onClick={() => deleteEMI(e._id)}
                    >
                      Delete
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      onClick={() => navigate(`/emi-view/${e._id}`)}
                      style={{ backgroundColor: "#0A6847" }}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default EMIMultiple;
