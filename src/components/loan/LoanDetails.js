import React ,{ useEffect ,useState}from 'react'
import axios from "axios";

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { url } from '../../App';




function LoanDetails() {
    let[loan,setLoan]=useState([])

console.log(loan)

    let getData=async()=>{
        try {
          let res=await axios.get(`${url}/loan-details`)
          if(res.status===201){
            setCustomers(res.data.loan)
          }
        } catch (error) {
          console.log(error)
        }
                    }
    
                    useEffect(()=>{
                      getData()
                    },[])
  return <>
   <div style={{width:650,color:"white"}}>
      <h1>Customers Details</h1>
      <div className=" container-fluid mt-3 ">
        <Table striped bordered hover style={{width:880}} >
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>MobileNumber</th>
              <th>LoanAmount</th>
              <th>RateOfInterest</th>
              <th>months</th>
              <th>StartingDate</th>
              <th>EndingDate</th>
              <th>EMI Amount</th>
              <th >Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {loan.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer" }}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.mobileNumber}</td>
                  <td>{e.loanAmount}</td>
                  <td>{e.rateOfInterest}</td>
                  <td>{e.months}</td>
                  <td>{e.emiAmount}</td>
                  
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
      </div>
    </div>
   
  </>
}

export default LoanDetails