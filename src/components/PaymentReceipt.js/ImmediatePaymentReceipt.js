import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../App'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ImmediatePaymentReceipt() {
    let {customerID,paidDate}=useParams()
    console.log(customerID,paidDate)

const[loan,setLoan]=useState({})
const[emi,setEMI]=useState([])

console.log(loan)
console.log(emi)

let singlepaymentReceipt=emi.filter((e)=>{
    const paidDate=new Date(e.paidDate)
    return(
paidDate.getMonth()===new Date().getMonth()

    )
})
console.log(singlepaymentReceipt)
let defaultAmount=singlepaymentReceipt[0].defaultAmount
console.log(defaultAmount)
let getData=async()=>{
    try {
      let res= await axios.get(`${url}/loan-details/${customerID}`) 
console.log(res.data.singleLoanDetails)
setLoan(res.data.singleLoanDetails)
    } catch (error) {
     console.log(error)   
    }
    let response=await axios.get(`${url}/emi-single-customer-view/${customerID}`)
    console.log(response.data.SingleCustomerEMIDetails)
    setEMI(response.data.SingleCustomerEMIDetails)

}



    useEffect(()=>{
getData()
    },[])
  return<>
  <div style={{border:"6px solid black ",marginTop:20}}>
  <div style={{display:'flex'}}>
  <div style={{textAlign:"center",marginLeft:450,marginTop:10}}>
  <h1>SREE KAIRAASI MOTORS FINANCE (P) LTD.</h1>
  <h3>23&24 MRC COMPLEX 9/B, PUDUKKOTTAI MAIN ROAD</h3>
  <h3>TOLGATE,TRICHY - 620020, MOBILE NUMBER : 2310738 , 2312631</h3>
  <h1 style={{marginTop:20}}>CASH RECEIPT</h1>
  </div>
  <div style={{marginLeft:300,marginTop:70,border:"1px solid black",height:50,paddingTop:10}}>Bar Code</div>
  </div>
  <div style={{display:"flex",justifyContent:'space-between',marginTop:60,marginRight:40,marginLeft:40,marginBottom:40}}>
    <div>
    <h4>CustomerID &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{loan.customerID}</h4>
    <h4>Nmae&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{loan.name}</h4>
    <h4>EMI Amount&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{loan.emiAmount}</h4>
    <h4>Interest Amount:{loan.InterestAmount}</h4>
    <h4>Default Amount:{defaultAmount}</h4>
    </div>
<div>
    <h4>date&nbsp;&nbsp;:&nbsp;&nbsp;{paidDate}</h4>
    <h3>Mode Of Payment:</h3>
    
    <input type='checkbox'name='cash'/>
    <label for="cash"id="cash" style={{fontSize:20,marginRight:10}}>Cash</label>

    <input type='checkbox'name="cheque"/>
    <label for="cheque"id="cheque"   style={{fontSize:20,marginRight:10}}>Cheque</label>

    <input type='checkbox'name="net_banking"/>
    <label for="net_banking"id="net_banking" style={{fontSize:20,marginRight:10}}>Net Banking</label>

    <input type='checkbox'name="Paytm"/>
    <label for="Paytm"id="Paytm" style={{fontSize:20,marginRight:10}}>Paytm</label>
    
    <input type='checkbox'name="G-Pay"/>
    <label for="G-Pay"id="G-Pay" style={{fontSize:20,marginRight:10}}>G-Pay</label>

    <input type='checkbox'name='phone pay'/>
    <label for="phone pay"id="Phone Pay" style={{fontSize:20,marginRight:10}}>Phone Pay</label>

    <input type='checkbox'name="others"/>
    <label for="others"id="others" style={{fontSize:20}}>Others</label>
</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around",marginTop:80,marginBottom:80}}>
<h4>
    <hr/>
Cash Receipt Signature
</h4>
<h4>
<hr/>
    Signed By
</h4>
</div>
  </div>
  </>
}

export default ImmediatePaymentReceipt