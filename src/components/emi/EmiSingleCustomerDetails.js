import React, { useState, useEffect } from "react";

import ListGroup from "react-bootstrap/ListGroup";

import Row from "react-bootstrap/esm/Row";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "../../App";
import axios from "axios";
// import "./customer.css"
import { useDispatch, useSelector } from "react-redux";
import SingleCustomerDetails from "./SingleCustomerDetails";

function EmiSingleCustomerDetails() {
  let navigate = useNavigate();
  const customer = useSelector((state) => state.customer);
  let reduxCustomer = customer.customer.customers;
  console.log(reduxCustomer);

  const [HypothicationNo, setHypothicationNo] = useState("");
  console.log(HypothicationNo);

  let handleSubmit = () => {
    if (HypothicationNo) {
      navigate(`/emi-single-customer-details/${HypothicationNo}`);
    } else {
      alert("Please Enter a Valid HypothicationNo");
    }

    // let res=await axios.get(`${url}/emi-single-customer-details/${HypothicationNo}`)
    //         console.log(res)
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-3">Single Customer EMI Detail</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label>Enter Your HypothicationNo</label>
        <input
          type="number"
          value={HypothicationNo}
          onChange={(e) => setHypothicationNo(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
      {/* <SingleCustomerDetails /> */}
      {/* <Card className='shadow col-lg-6 mx-auto mt-4 fs-5 mb-3' style={{ width: '35rem'}}>
    
  </Card> */}
    </>
  );
}

export default EmiSingleCustomerDetails;
