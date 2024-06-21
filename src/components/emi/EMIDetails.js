import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { url } from '../../App';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


function EMIDetails({paidDate,status,name,image,modeOfPayment, paidAmount,actualDueDate,actualEMIAmount,customerID,loanAmount}) {
  let navigate=useNavigate()

  let handleSave=async()=>{
    try {
      let res=await axios.post(`${url}/emi-details`,{paidDate,loanAmount,name,modeOfPayment,status,paidAmount,actualDueDate,actualEMIAmount,customerID})
      console.log(res)
      if(res.status===201){
        toast.success(res.data.message)
navigate("/admin-dashboard")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return <>
  <h1>EMIDetails</h1>
  <div className=" container mt-3 ">
        <Table striped bordered hover style={{width:1370}} >
          <thead>
            <tr>
            <th>Name</th>
              <th>Photo</th>
              <th>CustomerID</th>
              <th>ActualDueDate</th>
              <th>ActualEMIAmount</th>
              <th>PaidDate</th>
              <th >paidAmount</th>
              <th >Status</th>
              <th >Mode Of Payment</th>
              <th >Actions</th>
              
            </tr>
          </thead>
          <tbody>
              <tr style={{ cursor: "pointer" }}>
              <td>{name}</td>
                  <td><Image src={`http://localhost:8080/${image}`} style={{width:50,marginLeft:60}}roundedCircle /></td>
                  <td>{customerID}</td>
                  <td>{actualDueDate}</td>
                  <td>{actualEMIAmount}</td>
                  <td>{paidDate}</td>
                  <td>{paidAmount}</td>
                  <td>{status}</td>
                  <td>{modeOfPayment}</td>
                   <td>
                  <Button style={{backgroundColor:"#121481"}}
                    onClick={handleSave}
                  >
                    
                     Save</Button>
                  {/* &nbsp;
                  &nbsp;
                  <Button onClick={()=>navigate(`/emi-single-view/${customerID}`)} style={{backgroundColor:"#0A6847"}}>View</Button> */}
                </td> 
                </tr>
            
    
          </tbody>
        </Table>
      </div>
  </>
}

export default EMIDetails