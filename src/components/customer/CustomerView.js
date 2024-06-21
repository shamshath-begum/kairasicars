import React, { useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import { url } from "../../App";
import axios from "axios";
import "./customer.css"

function CustomerView() {


    
    const[customer,setCustomer]=useState([])
    console.log(customer)
    const{id}=useParams()

    let getData=async()=>{
        console.log("first")
        try {
          let res=await axios.get(`${url}/customer-view/${id}`)
          console.log(res.data.customer)
          if(res.status===200){
            setCustomer(res.data.customer)
          }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        getData();
      },[id])
      
     
  return <>
<h1 className='text-center mt-3'>Customer Detail</h1>
<Card className='shadow col-lg-6 mx-auto mt-4 fs-5 mb-3' style={{ width: '35rem'}}>
      <ListGroup variant="flush">
        <ListGroup.Item>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{customer.name}</ListGroup.Item>
        <ListGroup.Item>AdharNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{customer.adharNumber}</ListGroup.Item>
        <ListGroup.Item>mobileNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{customer.mobileNumber}</ListGroup.Item>
        <ListGroup.Item>alternativeNumber&nbsp;&nbsp;:{customer.alternativeNumber}</ListGroup.Item>
        <ListGroup.Item>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{customer.email}</ListGroup.Item>
        <ListGroup.Item>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{customer.gender}</ListGroup.Item>
        <ListGroup.Item>OfficeAddress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{customer.officeAddress}</ListGroup.Item>
        <ListGroup.Item>Loan Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</ListGroup.Item>
        <ListGroup.Item>EMI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</ListGroup.Item>
        <ListGroup.Item>Months&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</ListGroup.Item>
        <ListGroup.Item>Starting Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</ListGroup.Item>
        <ListGroup.Item>Ending Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</ListGroup.Item>
      </ListGroup>
    </Card>



  {/* <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
            <Card.Body>
                <h1>View Customer</h1> */}
              {/* <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" />
                  </div>
                </div>
              </Row> */}
              {/* <div className='text-center'>
                <h3>{customer.name}</h3>
                <h3>{customer.name}</h3>
                <h3>{customer.name}</h3>
                <h3>{customer.name}</h3> */}
                {/* <h4><i class="fa-solid fa-envelope email"></i>&nbsp;:- <span>{userprofile.email}</span> </h4>
                <h5><i class="fa-solid fa-mobile"></i>&nbsp;:- <span>{userprofile.mobile}</span> </h5>
                <h4><i class="fa-solid fa-person"></i>&nbsp;:- <span>{userprofile.gender}</span> </h4>
                <h4><i class="fa-solid fa-location-pin location"></i>&nbsp;:- <span>{userprofile.location}</span> </h4>
                <h4>Status&nbsp;:- <span>{userprofile.status}</span> </h4>
                <h5><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Created&nbsp;:- <span>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span> </h5>
                <h5> <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Updated&nbsp;:- <span>{userprofile.dateUpdated}</span> </h5> */}
              {/* </div> */}
            {/* </Card.Body>
          </Card> */}
  </>
}

export default CustomerView