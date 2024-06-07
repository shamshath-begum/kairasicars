import React, { useEffect ,useState} from 'react'
import {useNavigate } from "react-router-dom";

import axios from "axios";

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import Image from 'react-bootstrap/Image';

import { MdLogout } from "react-icons/md";
import "./admindashboard.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { url } from '../App';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

function AdminDashboard() {
  const user = useSelector((state) => state.admin);
  console.log(user);

  let navigate=useNavigate()

let[customers,setCustomers]=useState([])

console.log(customers)


  let getData=async()=>{
    try {
      let res=await axios.get(`${url}/customer-details`)
      if(res.status===201){
        setCustomers(res.data.customers)
      }
    } catch (error) {
      console.log(error)
    }
                }

                useEffect(()=>{
                  getData()
                },[])
  return<>
 
    
    <div className='admin'> 
       <div style={{width:280,backgroundColor:"#5C2FC2",color:"white"}}>
          <h1 style={{color:"white",textAlign:"center",marginTop:20,}}>{user.name}</h1>
          <Image src={`http://localhost:8000/uploads/${user.imgpath}`} style={{width:50,marginLeft:60}}roundedCircle />
      <ul className='mt-5'>
        <div style={{textDecoration:"none"}}><li>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"style={{backgroundColor:"#5C2FC2",border:"none",fontSize:24}}>
      Customer Masters
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:"#5C2FC2",border:"none"}}>
      <Dropdown.Item> <Link to="/customer-registration" style={{textDecoration:"none",marginLeft:40,color:"white"}}>ADD</Link></Dropdown.Item>
      <Dropdown.Item> <Link to="/customer-details"style={{textDecoration:"none",marginLeft:40,color:"white"}}>VIEW</Link></Dropdown.Item>
    
      </Dropdown.Menu>
    </Dropdown>
          
          </li></div>

          <div style={{textDecoration:"none"}}><li>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"style={{backgroundColor:"#5C2FC2",border:"none",fontSize:24}}>
      Loan Masters
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:"#5C2FC2",border:"none"}}>
      <Dropdown.Item> <Link to="/loan-registration" style={{textDecoration:"none",marginLeft:40,color:"white"}}>ADD</Link></Dropdown.Item>
      <Dropdown.Item> <Link to="/loan-details"style={{textDecoration:"none",marginLeft:40,color:"white"}}>VIEW</Link></Dropdown.Item>
    
      </Dropdown.Menu>
    </Dropdown>
          
          </li></div>

        
        <Link style={{textDecoration:"none"}} to="/emi"><li>EMI Payment Details</li></Link>
        <Link style={{textDecoration:"none"}} to="/defaulters"> <li>Defaulters List</li></Link>
        <Link style={{textDecoration:"none"}} to="/profit"> <li>Capital + Profit</li></Link>
        <Link style={{textDecoration:"none"}} to="/repose"> <li>Repose</li></Link>
        
        <Link style={{textDecoration:"none"}}> <li><MdLogout />&nbsp;&nbsp;&nbsp;LogOut</li></Link>
      </ul> 
    </div>
    <div>
      <h1 style={{marginLeft:500,color:"white"}}>Customers Details</h1>
      <div className=" container mt-3 ">
        <Table striped bordered hover style={{width:1370}} >
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>MobileNumber</th>
              <th>Email</th>
              <th>Gender</th>
              <th >Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {customers.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer" }}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.mobileNumber}</td>
                  <td>{e.email}</td>
                  <td>{e.gender}</td>
                  
                  <td>
                  <Button style={{backgroundColor:"#121481"}}
                    onClick={()=>navigate(`/customer-edit/${i}`)}
                  >
                     {/* <i className="fas fa-pen-to-square"></i> */}
                     Edit</Button>
                  &nbsp;
                  &nbsp;
                  <Button style={{backgroundColor:"#FF7F3E"}}
                  // onClick={()=>handleDelete(i)}
                  > 
                  {/* <i className="fas fa-trash"></i> */}
                  Delete</Button>
                  &nbsp;
                  &nbsp;
                  <Button style={{backgroundColor:"#0A6847"}}>View</Button>
                </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  
  </>
}

export default AdminDashboard