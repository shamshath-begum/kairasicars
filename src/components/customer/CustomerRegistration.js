import React , { useState,useEffect }from 'react'
import { toast } from "react-toastify";
import { url } from "../../App";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function CustomerRegistration() {
const [inputdata, setInputData] = useState({
        name: "",
        email:"",
        adharNumber:"",
        mobileNumber: "",
        alternativeNumber:"",
      landMark: "",
      position:"",
      customerID:"",
        // residentialAddress:"",
        officeAddress:"",
        reference:"",
        profession:"",
    monthlyIncome:"",
        
      });
      console.log(inputdata)
      const[image,setImage]=useState(null)
      // const[documents,setDocuments]=useState([])
      console.log("image",image)
    const[preview,setPreview]=useState("")
    
    console.log(preview)
      let navigate=useNavigate()
    
      
      
     
      const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData((inputdata)=>{
          return {
           ...inputdata, [name]: value 
          }
          })
      }
    
      
    
      const handleImageFile=(e)=>{
          console.log(e.target.files[0])
          const imageVariable=e.target.files[0]
          setImage(imageVariable)
        }
    
        // const handleDocumentFile=(e)=>{
        //   console.log(e.target.files[0])
        //   const imageVariable=e.target.files[0]
        //   setDocuments(imageVariable)
        // }
   

    
   
        const submitUserData = async(e) => {
            e.preventDefault();
      
        
      
        const { name,profession,position,customerID, email,adharNumber, mobileNumber,alternativeNumber,monthlyIncome,landMark,officeAddress,reference } = inputdata;
        
            if (name === "") {
              toast.error("name is Required !")
            }
             else if (mobileNumber === "") {
              toast.error("Mobile Number is Required !")
            }
            else if (email === "") {
              toast.error("Email is Required !")
            } else if (!email.includes("@")) {
              toast.error("Enter Valid Email !")
            } 
            else if (alternativeNumber === "") {
              toast.error("AlternativeMobileNumber is Required !")
            } else if (mobileNumber.length > 10) {
              toast.error("Enter Valid Mobile!f")
            } else if (landMark === "") {
              toast.error("LandMark is Required !")
            } else if (adharNumber === "") {
              toast.error("AdharNumber is Required !")
            }
            // else if(residentialAddress==="") {
            //     toast.error("Residential_address is Required !")
            // }
            else if(officeAddress===""){
                toast.error("OfficeAddress is Required !")
            }
            else if(reference===""){
                toast.error("Reference is Required !")
            }else{
              console.log(image);
            console.log("Customer Registered Successfully")
            
              const data = new FormData();
              data.append("name",name)
              data.append("adharNumber",adharNumber)
              data.append("email",email)
              data.append("mobileNumber",mobileNumber)
              data.append("landMark",landMark)
              data.append("position",position)
              data.append("customerID",customerID)
              data.append("alternativeNumber",alternativeNumber)
              await data.append("image",image)
              // data.append("documents",documents)
              // data.append("residentialAddres",residentialAddress)
              data.append("officeAddress",officeAddress)
              data.append("reference",reference)
              data.append("profession",profession)
              data.append("monthlyIncome",monthlyIncome)
              
      

// const data = new FormData();
// console.log(documents)
//     if (documents) {
//       for (let i = 0; i < documents.length; i++) {
//         data.append('documents', documents[i]);
//       }
//     }
//     data.append('image', image);
    
    console.log(data)
              console.log(data.get("image"));
// console.log(data.get("documents"))

              try {

                let res= await axios.post(`${url}/customer-registration`,data,{
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
                
                
                
              )
                console.log(res)
                if(res.status===201){
                    toast.success(res.data.message)
                    setInputData({...inputdata,
                        name: "",
                        email:"",
                        adharNumber:"",
                        mobileNumber: "",
                        alternativeNumber:"",
                        landMark:"",
                        position:"",
                        customerID:"",
                        monthlyIncome:"",
                        // residentialAddress:"",
                       profession:"",
                        officeAddress:"",
                        reference:""
                      })

                        setImage("")
                        // setDocuments("")
                        setPreview("")
                        navigate("/admin-dashboard")
                    }else {
                    toast.error(res.data.error)
                }
            
            } catch (error) {
                // console.log(error)
                toast.error(error.response?.data?.message||"An error Occured")
            }
            }
          }
        
    
            useEffect(()=>{
                if(image){
                  setPreview(URL.createObjectURL(image))
                }
              },[image])


            

  return <>
  <div style={{backgroundColor:"#BBE9FF",color:'#01204E',height:"85vh",paddingTop:50}}>
    <h1 className='text-center mb-5 '>Customer Masters</h1>

    <Form style={{marginLeft:150,marginRight:150}}>
              <Row>
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label> Name</Form.Label>
                  <Form.Control type="text" name='name' value={inputdata.name} onChange={setInputValue} />
                </Form.Group>
{/* 
                 <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profession</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`employee`}
                    name="profession"
                    value={"employee"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Self_Employee`}
                    name="profession"
                    value={"Self_Employee"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`partnership`}
                    name="profession"
                    value={"partnership"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`governmentEmployee`}
                    name="profession"
                    value={"governmentEmployee"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`privateEmployee`}
                    name="profession"
                    value={"privateEmployee"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`others`}
                    name="profession"
                    value={"others"}
                    onChange={setInputValue}
                  />
                </Form.Group>  */}





                <Form.Group className="mb-3 col-lg-4" >
                <Form.Label> Professinal Details</Form.Label>
                <Form.Select  value={inputdata.profession }name="profession" onChange={setInputValue}>
               
                <option value="others" disabled>Profession</option>
      <option value="employee">Employee</option>
      <option value="selfEmployee">Self Employee</option>
      <option value="partnership">Partnership</option>
      <option value="governmentEmployee">GovernmentEmployee</option>
      <option value="privateEmployee">Private Employee</option>
      <option value="others">Others</option>
      
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3 col-lg-4" >
                <Form.Label>Monthly Income</Form.Label>
                <Form.Select  value={inputdata.monthlyIncome }name="monthlyIncome" onChange={setInputValue}>
               
                <option value="1 - 25,000" disabled>Monthly Income</option>
      <option value="1 - 25,000">1 - 25,000</option>
      <option value="25,001 - 50,000">25,001 - 50,000</option>
      <option value="50,001 - 75,000">50,001 - 75,000</option>
      <option value="75,001 - 1,00,000">75,001 - 1,00,000</option>
      <option value="more than 1,00,000">more than 1,00,000</option>
      <option value="others">Others</option>
      
    </Form.Select>
    </Form.Group>
                
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>AdharNumber</Form.Label>
                  <Form.Control type="number" name='adharNumber' value={inputdata.adharNumber} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label> EMail</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} />
                </Form.Group>
                
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="number" name='mobileNumber' value={inputdata.mobileNumber} onChange={setInputValue} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>Alternative Number</Form.Label>
                  <Form.Control type="number" name='alternativeNumber' value={inputdata.alternativeNumber} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label> Residential_address</Form.Label>
                  <Form.Control type="text" name='residentialAddress' value={inputdata.residentialAddress} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label> OfficeAddress</Form.Label>
                  <Form.Control type="text" name='officeAddress' value={inputdata. officeAddress} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>Land Mark</Form.Label>
                  <Form.Control type="text" name='landMark' value={inputdata.landMark} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>Reference</Form.Label>
                  <Form.Control type="text" name='reference' value={inputdata. reference} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" >
                <Form.Label>Position</Form.Label>
                <Form.Select  value={inputdata.position }name="position" onChange={setInputValue}>
               
                <option value="IN" disabled>IN</option>
      <option value="Others">Others</option>
      <option value="OUT">OUT</option>
      <option value="PENDING">PENDING</option>
      <option value="IN">IN</option>
      
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>CustomerID</Form.Label>
                  <Form.Control type="number" name='customerID' value={inputdata.customerID} onChange={setInputValue} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" >
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" name='image' id="image" onChange={handleImageFile}  />
                </Form.Group> 

                <Button  type="submit" onClick={submitUserData} style={{backgroundColor:"#5C2FC2",width:200,borderRadius:10}}>
        SUBMIT
      </Button>

                

                </Row>
                </Form>
   

</div>
  </>
    
  
}

export default CustomerRegistration