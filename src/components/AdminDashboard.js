import React, { useEffect ,useState} from 'react'
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom'


import Image from 'react-bootstrap/Image';
import { details } from "../redux/customerSlice"
import { MdLogout } from "react-icons/md";
import "./admindashboard.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { url } from '../App';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

function AdminDashboard() {
  const[input,setInput]=useState("")
  const[Results,setResults]=useState([])
  const user = useSelector((state) => state.admin);
  console.log(user);
  const dispatch=useDispatch()
  let navigate=useNavigate()

let[customers,setCustomers]=useState([])

console.log(customers)



  // let getData=async()=>{
  //   try {
  //     let res=await axios.get(`${url}/customer-details`)
  //     if(res.status===201){
  //       setCustomers(res.data.customers)
  //       dispatch(details(res.data))
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  //               }

  //               useEffect(()=>{
  //                 getData()
  //               },[])

let deleteCustomer=async(id)=>{
try {
  let res=await axios.delete(`${url}/delete/${id}`)
  if(res.status===200){
    console.log(res)
    // getData()
    toast.success(res.data.message)
  }
} catch (error) {
  toast.error(error.rresponse.data.message)
}
}

const fetchData=async(value)=>{
let res=await axios.get(`${url}/customer-details`)
console.log(res.data)
let customers=res.data.customers

const results=customers.filter((c)=>{
  return c && c.name && c.name.toLowerCase().includes(value)
})
console.log(results)
setResults(results)
}

let handleChange=async(value)=>{
  setCustomers(value)
  fetchData(value)

}

  return<>
 
    
    <div className='admin'> 
       <div style={{width:280,backgroundColor:"#5C2FC2",color:"white"}}>
          <h1 style={{color:"white",textAlign:"center",marginTop:20,}}>{user.name}</h1>
          <Image src={`http://localhost:8080/uploads/${user.imgpath}`} style={{width:60,marginLeft:60}}roundedCircle />
      <ul className='mt-5'>
        <div style={{textDecoration:"none"}}><li>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"style={{backgroundColor:"#5C2FC2",border:"none",fontSize:24}}>
      Customer Masters
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:"#5C2FC2",border:"none"}}>
      <Dropdown.Item> <Link to="/customer-registration" style={{textDecoration:"none",marginLeft:40,color:"white"}}>ADD</Link></Dropdown.Item>
      {/* <Dropdown.Item> <Link to="/customer-details"style={{textDecoration:"none",marginLeft:40,color:"white"}}>VIEW</Link></Dropdown.Item> */}
    
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

          <div style={{textDecoration:"none"}}><li>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"style={{backgroundColor:"#5C2FC2",border:"none",fontSize:24}}>
      EMI Payment Details
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:"#5C2FC2",border:"none"}}>
      <Dropdown.Item> <Link to="/emi-single" style={{textDecoration:"none",marginLeft:40,color:"white"}}>EMI Payment</Link></Dropdown.Item>
      <Dropdown.Item> <Link to="/emi-single-view/:customerID"style={{textDecoration:"none",marginLeft:40,color:"white"}}>Single Customer EMI Details</Link></Dropdown.Item>
      <Dropdown.Item> <Link to="/emi-multiple" style={{textDecoration:"none",marginLeft:40,color:"white"}}>Multiple Customers EMI  Details</Link></Dropdown.Item>
      
      {/* <Dropdown.Item> <Link to="/emi-details" style={{textDecoration:"none",marginLeft:40,color:"white"}}>VIEW</Link></Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
          
          </li></div>
          <Link style={{textDecoration:"none"}} to="/emi-single-view/:customerID"> <li>Payment Receipt</li></Link>
        
        <Link style={{textDecoration:"none"}} to="/defaulters"> <li>Defaulters List</li></Link>
        <Link style={{textDecoration:"none"}} to="/capital"> <li>Capital + Profit</li></Link>
        <div style={{textDecoration:"none"}}><li>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"style={{backgroundColor:"#5C2FC2",border:"none",fontSize:24}}>
      Reports
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:"#5C2FC2",border:"none"}}>
      <Dropdown.Item> <Link to="/loan-registration" style={{textDecoration:"none",marginLeft:40,color:"white"}}>Broker's List</Link></Dropdown.Item>
      <Dropdown.Item> <Link to="/loan-details"style={{textDecoration:"none",marginLeft:40,color:"white"}}>Upscanding List</Link></Dropdown.Item>
      <Dropdown.Item> <Link to="/loan-details"style={{textDecoration:"none",marginLeft:40,color:"white"}}>Terms & Conditions</Link></Dropdown.Item>
 
      </Dropdown.Menu>
    </Dropdown>
          
          </li></div>


        
        
        <Link style={{textDecoration:"none"}}> <li><MdLogout />&nbsp;&nbsp;&nbsp;LogOut</li></Link>
      </ul> 
    </div>
    <div>
      <div className='search'>
      <h1 style={{color:"Black",marginRight:300}}>Customers Details</h1>
      <div style={{marginTop:20}} >
        <label style={{color:"Black",fontSize:25,fontWeight:"bold"}}>Search&nbsp;&nbsp;:&nbsp;&nbsp;</label>
        <input value={customers} placeholder="Type to Search"onChange={(e)=>handleChange(e.target.value)} style={{marginBottom:5,marginLeft:5,height:37,width:300}}/>

        </div>
      </div>

      {

      }
      
      <div className=" container mt-3 ">
        <Table striped bordered hover style={{width:1370}} >
          <thead>
            <tr style={{textAlign:"center"}}>
              <th>#</th>
              <th>Name</th>
              <th>CustomerID</th>
              <th >Images</th>
              <th>MobileNumber</th>
              <th>Email</th>
              <th>LandMark</th>
              <th>Status</th>
              <th >Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {Results.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer",textAlign:"center" }}>
                  <td>{i + 1}</td>
                  <td style={{textAlign:"left"}}>{e.name}</td>
                  <td>{e.customerID}</td>
                  <td><Image src={`http://localhost:8080/${e.imgpath}`} style={{width:80,height:80,marginLeft:60}}roundedCircle /></td>
                  <td>{e.mobileNumber}</td>
                  <td>{e.email}</td>
                  <td>{e.landMark}</td>
                  <td>{e.position}</td>
                  <td>
                  <Button style={{backgroundColor:"#121481"}}
                    onClick={()=>navigate(`/customer-edit/${e._id}`)}
                  >
                     {/* <i className="fas fa-pen-to-square"></i> */}
                     Edit</Button>
                  &nbsp;
                  &nbsp;
                  <Button style={{backgroundColor:"#FF7F3E"}}
                  onClick={()=>deleteCustomer(e._id)}
                  > 
                  {/* <i className="fas fa-trash"></i> */}
                  Delete</Button>
                  &nbsp;
                  &nbsp;
                  <Button onClick={()=>navigate(`/customer-view/${e._id}`)} style={{backgroundColor:"#0A6847"}}>View</Button>
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