import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { url } from "../../App";

function LoanRegistration() {
  const [inputdata, setInputData] = useState({
    name: "",
    chequeNo: "",
    vehicleNo: "",
    make: "",
    model: "",
    insuranceExpiry: "",
    agreementDate: "",
    dueDateOn: "",
    HypothicationNo: "",
    loanAmount: "",
    rateOfInterest: "",
    months: "",
    startingDate: "",
    endingDate: "",
  });
  console.log(inputdata);

  let navigate = useNavigate();

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData((inputdata) => {
      return {
        ...inputdata,
        [name]: value,
      };
    });
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    console.log("shama");

    const {
      name,
      chequeNo,
      vehicleNo,
      make,
      model,
      insuranceExpiry,
      agreementDate,
      dueDateOn,
      HypothicationNo,
      loanAmount,
      rateOfInterest,
      months,
      startingDate,
      endingDate,
    } = inputdata;

    if (name === "") {
      toast.error("name is Required !");
    } else if (HypothicationNo === "") {
      toast.error("HypothicationNo is Required !");
    } else if (loanAmount === "") {
      toast.error("loanAmount is Required !");
    } else if (rateOfInterest === "") {
      toast.error("rateOfInterest is Required !");
    } else if (months === "") {
      toast.error("Months is Required !");
    } else {
      // console.log(image);
      console.log("Loan Registered Successfully");

      try {
        let res = await axios.post(`${url}/loan-registration`, {
          name,
          chequeNo,
          vehicleNo,
          make,
          model,
          insuranceExpiry,
          agreementDate,
          dueDateOn,
          HypothicationNo,
          loanAmount,
          rateOfInterest,
          months,
          startingDate,
          endingDate,
        });
        console.log(res);
        if (res.status === 201) {
          toast.success(res.data.message);
          setInputData({
            ...inputdata,
            name: "",
            endingDate: "",
            chequeNo: "",
            vehicleNo: "",
            make: "",
            model: "",
            insuranceExpiry: "",
            agreementDate: "",
            dueDateOn: "",
            HypothicationNo: "",
            loanAmount: "",
            startingDate: "",
            rateOfInterest: "",

            months: "",
          });

          navigate("/admin-dashboard");
        } else {
          toast.error(res.data.error);
        }
      } catch (error) {
        // console.log(error)
        toast.error(error.response?.data?.message || "An error Occured");
      }
    }
  };

  return (
    <>
      <div
        className="container-fluid pt-5 pb-5"
        style={{ backgroundColor: "#BBE9FF", color: "#01204E", height: "100%" }}
      >
        <h1 className="text-center ">Loan Masters Registration </h1>
        <Form style={{ marginLeft: 500 }}>
          <Row>
            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={inputdata.name}
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Hypothication No</Form.Label>
              <Form.Control
                type="string"
                name="HypothicationNo"
                value={inputdata.HypothicationNo}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Cheque No</Form.Label>
              <Form.Control
                type="number"
                name="chequeNo"
                value={inputdata.chequeNo}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Vehicle No</Form.Label>
              <Form.Control
                type="text"
                name="vehicleNo"
                value={inputdata.vehicleNo}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Make</Form.Label>
              <Form.Control
                type="text"
                name="make"
                value={inputdata.make}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={inputdata.model}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>InsuranceExpiry</Form.Label>
              <Form.Control
                type="Date"
                name="insuranceExpiry"
                value={inputdata.insuranceExpiry}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Agreement Date</Form.Label>
              <Form.Control
                type="date"
                name="agreementDate"
                value={inputdata.agreementDate}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Due Date On</Form.Label>
              <Form.Control
                type="date"
                name="dueDateOn"
                value={inputdata.dueDateOn}
                onChange={setInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control
                type="number"
                name="loanAmount"
                value={inputdata.loanAmount}
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Rate Of Interest</Form.Label>
              <Form.Control
                type="number"
                name="rateOfInterest"
                value={inputdata.rateOfInterest}
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Months</Form.Label>
              <Form.Control
                type="number"
                name="months"
                value={inputdata.months}
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                name="startingDate"
                value={inputdata.startingDate}
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8">
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                name="endingDate"
                value={inputdata.endingDate}
                onChange={setInputValue}
              />
            </Form.Group>

            <Button
              type="submit"
              onClick={submitUserData}
              style={{ backgroundColor: "#5C2FC2", marginTop: 60, width: 1000 }}
              size="lg"
            >
              SUBMIT
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default LoanRegistration;
