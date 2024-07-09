import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { url } from "../../App";
import EMIDetails from "./EMIDetails";

function EMISingle() {
  const [HypothicationNo, setHypothicationNo] = useState(null);
  console.log(HypothicationNo);

  const [status, setStatus] = useState("");

  const [paidDate, setPaidDate] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");

  console.log(paidDate);
  console.log(paidAmount);

  const [loan, setLoan] = useState([]);
  console.log(loan);
  const customer = useSelector((state) => state.customer);
  let reduxCustomer = customer.customer.customers;
  console.log(reduxCustomer);
  // let customerEMI=reduxCustomer.filter((c)=>HypothicationNo===c.HypothicationNo)
  // console.log(customerEMI)

  let handleSubmit = async () => {
    try {
      let res = await axios.get(`${url}/loan-details/${HypothicationNo}`);
      console.log(res.data.singleLoanDetails);
      setLoan(res.data.singleLoanDetails);

      // let loanEMIDetails= loan.filter((l)=>accountNumber==l.HypothicationNo)
      // console.log(loanEMIDetails)
      // let details=loanEMIDetails[0].startingDate
      // console.log(details)
      //  navigate("/emi-single-customer-details")
    } catch (error) {
      console.log(error);
    }
  };

  const { startingDate, emiAmount, loanAmount, name, Capital, InterestAmount } =
    loan;

  // const today = new Date();
  //     const day = String(today.getDate()).padStart(2, '0');
  //     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  //     const year = today.getFullYear();
  //     const formattedDate = `${day}-${month}-${year}`; // DD-MM-YYYY format
  //     console.log(formattedDate);
  // console.log(paidDate)
  // const today = new Date();
  // const formattedDate = today.toISOString().split('T')[0]; // Outputs: "2024-06-17"
  // console.log(formattedDate)

  const handleDateChange = (event) => {
    const dateValue = event.target.value; // YYYY-MM-DD format
    if (dateValue) {
      const [year, month, day] = dateValue.split("-");
      const formattedDate = `${day}-${month}-${year}`; // Convert to DD-MM-YYYY
      setPaidDate(formattedDate);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="card shadow ms-5" style={{ width: "100rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center mt-1 mb-4">
              Customer EMI Details
            </h3>
            <label style={{ marginLeft: 560 }}>
              Enter Your HypothicationNo :
            </label>
            <input
              type="text"
              onChange={(e) => setHypothicationNo(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              <Link>SUBMIT</Link>
            </button>
          </div>
          <h5 className="card-title text-center mt-2">
            Customer Name:
            {name}
          </h5>
          <h5 className="card-title text-center mt-2">
            Loan Amount:{loanAmount}
          </h5>
          <h5 className="card-title text-center mt-2">
            Actual Due Date:{startingDate}{" "}
          </h5>
          <h5 className="card-title text-center mt-2">
            Actual EMI Amount:{emiAmount}
          </h5>
        </div>
      </div>
      <div>
        <div
          className="card mt-5 "
          style={{
            width: "100rem",
            marginLeft: 50,
            backgroundColor: "red",
            color: "white",
          }}
        >
          <div className="card-body">
            <label style={{ fontSize: 25, marginLeft: 50 }}>Paid Date:</label>
            <input type="date" onChange={(e) => setPaidDate(e.target.value)} />

            <label style={{ fontSize: 25, marginLeft: 50 }}>Paid Amount:</label>
            <input
              type="number"
              onChange={(e) => setPaidAmount(e.target.value)}
            />

            <label style={{ fontSize: 25, marginLeft: 50 }}>Status:</label>

            <input type="text" onChange={(e) => setStatus(e.target.value)} />

            <div
              style={{
                display: "flex",
                position: "relative",
                left: 1100,
                bottom: 30,
              }}
            >
              <label style={{ fontSize: 25, marginLeft: 50 }}>
                ModeOfPayment:
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                style={{ width: 150, height: 34 }}
                onChange={(e) => setModeOfPayment(e.target.value)}
              >
                <option selected>ModeOfPayment:</option>
                <option value="cash">cash</option>
                <option value="cheque">cheque</option>
                <option value="pay-tm">pay-tm</option>
                <option value="google-pay">google-pay</option>
                <option value="net-banking">net-banking</option>
                <option value="phone pay">phone pay</option>
                <option value="others">others</option>
              </select>
            </div>
            {/* <input
              type="text"
              onChange={(e) => setModeOfPayment(e.target.value)}
            /> */}

            {paidDate && paidAmount ? (
              <EMIDetails
                name={name}
                capital={Capital}
                interestAmount={InterestAmount}
                modeOfPayment={modeOfPayment}
                HypothicationNo={HypothicationNo}
                paidDate={paidDate}
                paidAmount={paidAmount}
                status={status}
                actualDueDate={startingDate}
                actualEMIAmount={emiAmount}
                loanAmount={loanAmount}
              />
            ) : (
              <p>No PaidDate and NoPaid Amount Is Available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EMISingle;

//
