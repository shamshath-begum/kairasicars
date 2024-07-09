import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { url } from "../../App";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

function EMIDetails({
  paidDate,
  status,
  name,
  image,
  modeOfPayment,
  capital,
  interestAmount,
  paidAmount,
  actualDueDate,
  actualEMIAmount,

  HypothicationNo,
  loanAmount,
}) {
  let navigate = useNavigate();
  // paidDate = moment(paidDate).format("DD-MM-YYYY");
  // console.log(paidDate);
  let handleSave = async () => {
    try {
      let res = await axios.post(`${url}/emi-details`, {
        paidDate,
        capital,
        interestAmount,
        loanAmount,
        name,
        modeOfPayment,
        status,
        paidAmount,
        actualDueDate,
        actualEMIAmount,

        HypothicationNo,
      });
      console.log(res);
      if (res.status === 201) {
        toast.success(res.data.message);

        navigate(`/immediate-payment-receipt/${HypothicationNo}/${paidDate}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>EMIDetails</h1>
      <div className=" container mt-3 ">
        <Table striped bordered hover style={{ width: 1370 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
              <th>HypothicationNo</th>
              <th>ActualDueDate</th>
              <th>ActualEMIAmount</th>
              <th>PaidDate</th>
              <th>defaultAmount</th>
              <th>paidAmount</th>
              <th>Status</th>
              <th>Mode Of Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ cursor: "pointer" }}>
              <td>{name}</td>
              <td>
                <Image
                  src={`http://localhost:8080/${image}`}
                  style={{ width: 50, marginLeft: 60 }}
                  roundedCircle
                />
              </td>
              <td>{HypothicationNo}</td>
              <td>{actualDueDate}</td>
              <td>{actualEMIAmount}</td>
              <td>{paidDate}</td>
              <td>{paidAmount}</td>
              <td>{status}</td>
              <td>{modeOfPayment}</td>
              <td>
                <Button
                  style={{ backgroundColor: "#121481" }}
                  onClick={handleSave}
                >
                  Confirm
                </Button>
                {/* &nbsp;
                  &nbsp;
                  <Button onClick={()=>navigate(`/emi-single-view/${
HypothicationNo}`)} style={{backgroundColor:"#0A6847"}}>View</Button> */}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default EMIDetails;
