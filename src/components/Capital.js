import React, { useState } from 'react'

function Capital() {
  const[fromDate,setFromDate]=useState(null)
  const[toDate,setToDate]=useState(null)
  return <>
  <div style={{backgroundColor:"#FFFDB5",color:'#01204E',height:"100vh"}}>
    <h1 className='text-center'style={{fontSize:50,textDecoration:"underline"}}>Capital+Interest Amount</h1>
    <div style={{display:"flex",gap:60,justifyContent:"center",marginTop:100,fontSize:30}}>
      <div>
        <label style={{marginRight:20}}>From Date:</label>
        <input type='date'/>
      </div>
      <div>
        <label style={{marginRight:20}}>To Date: </label>
        <input type='date'/>
      </div>
     
    </div>
    <div style={{textAlign:"center",marginTop:50}}>
        <button style={{backgroundColor:"#9BEC00",width:300,height:80,fontSize:35,marginBottom:20}}>SUBMIT</button>
      </div>
   <hr/>
  
  <div style={{marginTop:60,marginTop:100,fontSize:50}}>Total Capital Amount:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:600}}>17,50,788</span></div>
  <div style={{marginTop:30,fontSize:50}}>Total Interest Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:600}}>7,15,876</span></div>
  <div style={{marginTop:30,fontSize:50,marginLeft:136}}>Total Collection:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:600}}>24,66,664</span></div>
  </div>
    </>
}

export default Capital