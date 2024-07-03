import React ,{ useEffect ,useState}from 'react'
import axios from "axios";

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { url } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {loanRedux } from '../../redux/loanSlice';



function LoanDetails() {
    let[loan,setLoan]=useState([])
    console.log(loan)

    
let navigate=useNavigate()

let dispatch=useDispatch()


    let getData=async()=>{
        try {
          let res=await axios.get(`${url}/loan-details`)
          console.log(res.data.loanDetails)
          if(res.status===201){
            setLoan(res.data.loanDetails)
            dispatch(loanRedux(res.data))
          }
        } catch (error) {
          console.log(error)
        }
                    }
    
                    useEffect(()=>{
                      getData()
                    },[])
  return <>
   <div style={{width:"100%",color:"white",backgroundColor:"#6FDCE3"}}>
      <h1 style={{textAlign:"center"}}>Loan Details</h1>
      <div className=" container-fluid mt-3 ">
        <Table striped bordered hover style={{width:1800}} >
          <thead>
            <tr style={{textAlign:"center"}}>
              <th>#</th>
              <th>Name</th>

              <th>CustomerID</th>
              <th>LoanAmount</th>
              <th>RateOfInterest</th>
              <th>months</th>
              <th>Interest(p.m)</th>
              <th>TotalAmount</th>
              <th>Capital</th>
              <th>EMI Amount</th>
              <th>EMI StartingDate</th>
              <th>EMI EndingDate</th>
            
              <th >Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {loan.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer",textAlign:"center" }}>
                  <td>{i + 1}</td>
                  <td style={{textAlign:"left"}}>{e.name}</td>
                  <td>{e.customerID}</td>
                  <td style={{textAlign:"right"}}>{e.loanAmount}</td>
                  <td>{e.rateOfInterest}</td>
                  <td>{e.months}</td>
                  <td style={{textAlign:"right"}}>{e.InterestAmount}</td>
                  <td style={{textAlign:"right"}}>{e.TotalAmount}</td>
                  <td style={{textAlign:"right"}}>{e.Capital}</td>
                  <td style={{textAlign:"right"}}>{e.emiAmount}</td>
                  <td>{e.startingDate}</td>
                  <td>{e.endingDate}</td>
                 
                  <td>
                  <Button style={{backgroundColor:"#121481"}}
                  //  onClick={()=>navigate(`/edit-user/${i}`)}
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
        <Button  type="button" onClick={()=>navigate("/admin-dashboard")} style={{backgroundColor:"#5C2FC2",width:300,borderRadius:10}}>
        Back to AdminDashboard
      </Button>
       
      </div>
    </div>
   
  </>
}

export default LoanDetails