import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { url } from "../../App";
import { useParams } from "react-router-dom";
import moment from "moment";

function SingleCustomerDetails() {
  const { HypothicationNo } = useParams();
  console.log(HypothicationNo);
  console.log(typeof HypothicationNo);
  let customers = useSelector((state) => state.customer.customer.customers);
  console.log(customers);

  // const [single, setSingle] = useState("");
  const [emisingle, setEMISingle] = useState([]);
  const [loanSingle, setLoanSingle] = useState({});
  const [customerSingle, setCustomerSingle] = useState({});

  console.log(customerSingle);
  // useEffect(() => {
  //   let singleCustomer = customers.filter(
  //     (c) => parseInt(c.HypothicationNo) === parseInt(HypothicationNo, 10)
  //   );
  //   console.log(singleCustomer);
  //   if (singleCustomer.length > 0) {
  //     setSingle(singleCustomer[0]);
  //   } else {
  //     setSingle(null);
  //   }
  // }, [HypothicationNo, customers]);

  console.log(customerSingle.reference);

  console.log(emisingle);
  const { name, mobileNumber, officeAddress, reference } = customerSingle;
  console.log(name);
  let getData = async () => {
    try {
      let res = await axios.get(
        `${url}/emi-single-customer-view/${HypothicationNo}`
      );
      console.log(res.data.SingleCustomerEMIDetails);
      if (res.status === 201) {
        setEMISingle(res.data.SingleCustomerEMIDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let getLoanData = async () => {
    try {
      let res = await axios.get(`${url}/loan-details/${HypothicationNo}  `);
      console.log(res.data.singleLoanDetails);
      if (res.status === 201) {
        setLoanSingle(res.data.singleLoanDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let getCustomerData = async () => {
    try {
      let res = await axios.get(`${url}/customer-details/${HypothicationNo}`);
      console.log(res.data.singleCustomerDetails);
      if (res.status === 201) {
        setCustomerSingle(res.data.singleCustomerDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(loanSingle);
  console.log(loanSingle.startingDate);
  let TotalAmount = loanSingle.TotalAmount;
  let emiAmount = loanSingle.emiAmount;
  let Totalmonths = loanSingle.months;
  console.log(Totalmonths);

  function getConsecutiveMonths(startDate) {
    let dates = [];
    let date = new Date(startDate);

    for (let i = 0; i < Totalmonths; i++) {
      // Get the day, month, and year
      let day = String(date.getDate()).padStart(2, "0");
      let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      let year = date.getFullYear();

      // Format the date as 'DD.MM.YYYY'
      dates.push(`${day}.${month}.${year}`);

      // Move to the next month
      date.setMonth(date.getMonth() + 1);
    }

    return dates;
  }

  const months = getConsecutiveMonths(loanSingle.startingDate);
  console.log(months);

  const getBalance = (TotalAmount, emiAmount) => {
    let amount = [];
    let balance = TotalAmount;

    for (let i = 0; balance > 0; i++) {
      balance -= emiAmount;
      amount.push(balance > 0 ? balance : 0); // Ensure the balance doesn't go below 0
    }

    return amount;
  };
  const balances = getBalance(TotalAmount, emiAmount);
  console.log(balances);

  useEffect(() => {
    getData();
    getLoanData();
    getCustomerData();
  }, [HypothicationNo]);

  const formatPaidDate = (paidDate) => {
    let date = new Date(paidDate);
    let day = String(date.getUTCDate()).padStart(2, "0");
    let month = String(date.getUTCMonth() + 1).padStart(2, "0");
    let year = date.getUTCFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>SREE KAIRAASI MOTORS FINANCE (P) LTD.</h1>
        <h3>23&24 MRC COMPLEX 9/B, PUDUKKOTTAI MAIN ROAD</h3>
        <h3>TOLGATE,TRICHY - 620020, MOBILE NUMBER : 2310738 , 2312631</h3>
      </div>
      <div>
        <h5 style={{ textAlign: "center" }}>
          HIRE
          INSTALMENT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          DUE LIST
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          as on&nbsp;&nbsp;&nbsp;
          {moment(loanSingle.startingDate).format("DD.MM.YYYY")}
        </h5>
        <Card style={{ border: "1px dotted black" }}>
          <div className="row shadow">
            <div className="col-sm-6" style={{}}>
              <h5>
                Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                {name}
              </h5>
              <h5>
                Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                {officeAddress}
              </h5>
              <h5>MobileNumber:{mobileNumber}</h5>
              <h5>
                Cheque No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                {loanSingle.chequeNo}
              </h5>
            </div>
            <div className="col-sm-6">
              <h5>
                HypothicationNo&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                {HypothicationNo}
              </h5>
              <h5>
                VehicleNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                {loanSingle.vehicleNo}
              </h5>
              <h5>
                Make&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {loanSingle.make}
              </h5>
              <h5>
                Model&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {loanSingle.model}
              </h5>
              <h5>
                Insurance
                Expiry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {moment(loanSingle.insuranceExpiry).format("DD.MM.YYYY")}
              </h5>
              <h5>
                Agreement Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                {loanSingle.agreementCate}
              </h5>
              <h5>
                Due Date
                On&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                {moment(loanSingle.dueDateOn).format("DD.MM.YYYY")}
              </h5>
            </div>
            {/* <hr /> */}
          </div>
        </Card>
        <Card>
          <div className="row shadow">
            <div className="col-sm-6" style={{}}>
              <h5>G-1 :APR</h5>
              <h5>G-2 :DO</h5>
            </div>
            <div className="col-sm-6">
              <h5>Total Amount:{loanSingle.TotalAmount}</h5>
              <h5>Agent:{reference}</h5>
            </div>
          </div>
        </Card>
        <Card>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Inst.No.</th>
                <th scope="col">Instalment Amount</th>
                <th scope="col">Remittance Date</th>
                <th scope="col">Received Amount</th>
                <th scope="col">Remitted Date</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {emisingle.map((e, i) => {
                return (
                  <tr key={i} style={{ cursor: "pointer" }}>
                    <td>{i + 1}</td>
                    <td>{e.actualEMIAmount}</td>
                    <td>{months[i]}</td>
                    <td>{e.paidAmount}</td>
                    <td>{formatPaidDate(e.paidDate)}</td>
                    <td>{balances[i]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <span>
            Due{" "}
            <span>
              TotalAmount {loanSingle.TotalAmount}
              <span style={{ marginLeft: 480 }}>Received</span>:
            </span>{" "}
            <span style={{ marginLeft: 520 }}>Balance</span>:
          </span>
        </Card>
        <Card>
          <div className="row shadow">
            <div className="col" style={{}}>
              <h4 style={{ marginLeft: 800 }}>
                For SREE KAIRAASI MOTAR FINANCE ( P ) LTD.
              </h4>
              <h5 style={{ marginLeft: 1350 }}>
                Ins.Certif : Advance Amount : 100000
              </h5>
              <h5 style={{ marginLeft: 1389 }}>
                R.C.Book : Hire Charges : 10000
              </h5>
              <h5 style={{ marginLeft: 1340 }}>
                Green Form : Caution Deposit:
              </h5>
              <h5 style={{ marginLeft: 1370 }}>Stamp Paper : Isu.Deposits :</h5>
              <h5 style={{ marginLeft: 1485 }}>Other Charges : </h5>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default SingleCustomerDetails;
