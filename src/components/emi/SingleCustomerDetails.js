import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { url } from "../../App";
import { useParams } from "react-router-dom";

function SingleCustomerDetails() {
  const { HypothicationNo } = useParams();
  console.log(HypothicationNo);
  console.log(typeof HypothicationNo);
  let customers = useSelector((state) => state.customer.customer.customers);
  console.log(customers);

  const [single, setSingle] = useState("");
  const [emisingle, setEMISingle] = useState([]);
  useEffect(() => {
    let singleCustomer = customers.filter(
      (c) => c.HypothicationNo === parseInt(HypothicationNo, 10)
    );
    console.log(singleCustomer);
    if (singleCustomer.length > 0) {
      setSingle(singleCustomer[0]);
    } else {
      setSingle(null);
    }
  }, [HypothicationNo, customers]);

  console.log(single);

  console.log(emisingle);
  const { name, mobileNumber, officeAddress } = single;
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

  useEffect(() => {
    getData();
  }, [HypothicationNo]);

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
          DUE LIST as on
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingDate
        </h5>
        <Card style={{ border: "1px dotted black" }}>
          <div className="row shadow">
            <div className="col-sm-6" style={{}}>
              <h5>Name:{name}</h5>
              <h5>Address:{officeAddress}</h5>
              <h5>MobileNumber:{mobileNumber}</h5>
              <h5>Cheque No:</h5>
            </div>
            <div className="col-sm-6">
              <h5>HypothicationNo:{HypothicationNo}</h5>
              <h5>VehicleNumber:</h5>
              <h5>Make:</h5>
              <h5>Model:</h5>
              <h5>Insurance Expiry:</h5>
              <h5>Agreement Date:</h5>
              <h5>Due Date On:</h5>
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
              <h5>Total Amount:</h5>
              <h5>Agent:Direct</h5>
            </div>
          </div>
        </Card>
        <Card>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Instalment Amount</th>
                <th scope="col">Remittance On</th>
                <th scope="col">Received Amount</th>
                <th scope="col">Remitted On</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {emisingle.map((e, i) => {
                return (
                  <tr key={i} style={{ cursor: "pointer" }}>
                    <td>{i + 1}</td>
                    <td>{e.actualEMIAmount}</td>
                    <td>{e.actualDueDate}</td>
                    <td>{e.paidAmount}</td>
                    <td>{e.paidDate}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <span>Due TotalAmount Received: Balance:</span>
        </Card>
      </div>
    </>
  );
}

export default SingleCustomerDetails;
