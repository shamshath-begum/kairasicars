import React, { useEffect, useState } from 'react'
import { emi } from '../../redux/emiSlice'
import { useDispatch } from 'react-redux'
import { url } from '../../App'
import axios from 'axios'
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function EMIMultiple() {
const[EMI,setEMI]=useState([])
console.log(EMI)

let dispatch=useDispatch()

let navigate=useNavigate()
  let getData=async()=>{
    try {
      let res=await axios.get(`${url}/emi-multiple`)
      console.log(res.data.emiDetails)
      if(res.status===201){
        setEMI(res.data.emiDetails)
        dispatch(emi(res.data))
      }
    } catch (error) {
      console.log(error)
    }
                }

                useEffect(()=>{
                  getData()
                },[])

let deleteEMI=()=>{}

  return <>
 <div className=" mt-5 ">
  <h1 style={{textAlign:"center"}}>MULTI CUSTOMERS EMI DETAILS</h1>
  <div style={{display:"flex",justifyContent:"end"}}>
  <input type="search"/><button>Search</button></div>
        <Table striped bordered hover style={{width:1670,textAlign:"center"}} >
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Loan Amount</th>
              <th>Actual Due Date</th>
              <th>Paid Date</th>
              <th >Actual EMI Amount</th>
              <th>Paid Amount</th>
              <th >Mode Of Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {EMI.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer" }}>
                  <td>{e.customerID}</td>
                  <td>{e.name}</td>
                  <td><Image src={`http://localhost:8080/${e.imgpath}`} style={{width:80,height:80,marginLeft:60}}roundedCircle /></td>
                  <td>{e.loanAmount}</td>
                  <td>{e.actualDueDate}</td>
                  <td>{e.paidDate}</td>
                  <td>{e.actualEMIAmount}</td>
                  <td>{e.paidAmount}</td>
                  <td>{e.modeOfPayment}</td>
                  <td>{e.status}</td>
                  <td>
                  <Button style={{backgroundColor:"#121481"}}
                    onClick={()=>navigate(`/emi-edit/${e._id}`)}
                  >
                
                     Edit</Button>
                  &nbsp;
                  &nbsp;
                  <Button style={{backgroundColor:"#FF7F3E"}}
                  onClick={()=>deleteEMI(e._id)}
                  > 
                 
                  Delete</Button>
                  &nbsp;
                  &nbsp;
                  <Button onClick={()=>navigate(`/emi-view/${e._id}`)} style={{backgroundColor:"#0A6847"}}>View</Button>
                </td>
                </tr>
              );
            })}
          </tbody>
        </Table>  
      </div>
  </>
}

export default EMIMultiple