import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { url } from '../../App';
import { useParams } from 'react-router-dom';

function SingleCustomerDetails() {
  const{customerID}=useParams()
console.log(customerID)
let customers=useSelector((state)=>state.customer.customer.customers)
console.log(customers)
let singleCustomer=customers.filter((c)=>customerID===c.customerID)
   console.log(singleCustomer)

const{name,officeAddress,mobileNumber}=singleCustomer


    const[emisingle,setEMISingle]=useState([])

console.log(emisingle)
    let getData=async()=>{
        try {
          let res=await axios.get(`${url}/emi-single-customer-view/${customerID}`)
          console.log(res.data.SingleCustomerEMIDetails)
          if(res.status===201){

            setEMISingle(res.data.SingleCustomerEMIDetails)
            
          }
        } catch (error) {
          console.log(error)
        }
                    }
    
                    useEffect(()=>{
                      getData()
                    },[])
               

  return <>
  <div style={{textAlign:"center"}}>
  <h1>SREE KAIRAASI MOTORS FINANCE (P) LTD.</h1>
  <h3>23&24 MRC COMPLEX 9/B, PUDUKKOTTAI MAIN ROAD</h3>
  <h3>TOLGATE,TRICHY - 620020, MOBILE NUMBER : 2310738 , 2312631</h3>
  </div>
  <div>
    <h5>HIRE INSTALMENT - DUE LIST as on startingDate</h5>
    <Card style={{border:"1px dotted black"}}>
    <div className="row">
  <div className="col-sm-6" style={{}}>
    
    <h5>Name:{name}</h5>
    <h5>Address:{officeAddress}</h5>
    <h5>MobileNumber:{mobileNumber}</h5>

   
  </div>
  <div className="col-sm-6">
    <h5>CustomerID:{customerID}</h5>
    <h5>VehicleNumber:</h5>
    <h5>Make:</h5>
    <h5>Model:</h5>
   
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

    
    </tr>
  </thead>
  <tbody>
    {
      emisingle.map((e,i)=>{
        return(
          <tr key={i} style={{ cursor: "pointer" }}>
          <td>{i + 1}</td>
          <td>{e.actualEMIAmount}</td>
          <td>{e.actualDueDate}</td>
          <td>{e.paidAmount}</td>
          <td>{e.paidDate}</td>
          
          </tr>
        )
      })
    }
    
  </tbody>
</table>
<span>Due     TotalAmount  Received: Balance:</span>
</Card>

  </div>
  
  </>
}

export default SingleCustomerDetails