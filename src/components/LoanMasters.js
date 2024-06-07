
import React , { useState,useEffect }from 'react'
import { toast } from "react-toastify";

import axios from "axios";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { url } from '../App';

function LoanMasters() {
  const [inputdata, setInputData] = useState({
    name: "",
   mobileNumber:"",
    loanAmount:"",
    rateOfInterest: "",
    months:"",
    });
  console.log(inputdata)

  let navigate=useNavigate()

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData((inputdata)=>{
      return {
       ...inputdata, [name]: value 
      }
      })
  }

  const submitUserData = async(e) => {
    e.preventDefault();
console.log("shama")


const { name, mobileNumber,loanAmount,rateOfInterest,months} = inputdata;

    if (name === "") {
      toast.error("name is Required !")
    }
     else if (mobileNumber === "") {
      toast.error("Mobile Number is Required !")
    }
    
     else if (mobileNumber.length > 10) {
      toast.error("Enter Valid Mobile!f")
    } else if (loanAmount === "") {
      toast.error("loanAmount is Required !")
    } else if (rateOfInterest === "") {
      toast.error("rateOfInterest is Required !")
    }else if(months==="") {
        toast.error("Months is Required !")
    }
    
    else{
      // console.log(image);
    console.log("Customer Registered Successfully")

      

      
      try {

        let res=await axios.post(`${url}/loan-masters`,{ name,mobileNumber,loanAmount,rateOfInterest,months},
        
      )
        console.log(res)
        if(res.status===201){
            toast.success(res.data.message)
            setInputData({...inputdata,
                name: "",
                
                mobileNumber: "",
                loanAmount :"",
               
                rateOfInterest:"",
               
                months:"",
                
              })

               
                
                // navigate("/admin-dashboard")
            }else {
            toast.error(res.data.error)
        }
    
    } catch (error) {
        // console.log(error)
        toast.error(error.response?.data?.message||"An error Occured")
    }
    }
  }
    
  return <>
  <div className="container-fluid pt-5 pb-5" style={{backgroundColor:"#FFFDB5",color:'#01204E',height:"85vh"}}>
    <h1 className='text-center '>LoanMasters</h1>
    <Form style={{marginLeft:500}}>
              <Row> 
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicalternativemobileNumber">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='name' value={inputdata.name} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicalternativemobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="number" name='mobileNumber' value={inputdata.mobileNumber} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
                  <Form.Label>Loan Amount</Form.Label>
                  <Form.Control type="number" name='loanAmount' value={inputdata.loanAmount} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                  <Form.Label>Rate Of Interest</Form.Label>
                  <Form.Control type="number" name='rateOfInterest' value={inputdata.rateOfInterest} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicadharNumber">
                  <Form.Label>Months</Form.Label>
                  <Form.Control type="number" name='months' value={inputdata.months} onChange={setInputValue}  />
                </Form.Group>
                
                

                <Button  type="submit" onClick={submitUserData} style={{backgroundColor:"#5C2FC2",marginTop:60,width:1000}} size="lg">
        SUBMIT
      </Button>

                

                </Row>
                </Form>
                </div>
    </>
}

export default LoanMasters