
import React , { useState,useEffect }from 'react'
import { toast } from "react-toastify";
import { url } from "../../App";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


function CustomerEdit() {
    const [inputdata, setInputData] = useState({
        name: "",
        email:"",
        adharNumber:"",
        mobileNumber: "",
        alternativeNumber:"",
        gender: "",
        residentialAddress:"",
        officeAddress:"",
        reference:"",
        //  documents:"",
    
        
      });
      console.log(inputdata)
      // const[image,setImage]=useState("")
      // console.log(image)
    const[preview,setPreview]=useState("")
    
    
      let navigate=useNavigate()
    
      
      
     
      const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData((inputdata)=>{
          return {
           ...inputdata, [name]: value 
          }
          })
      }
    
      
    
      // let setImageFile=(e)=>{
      //     console.log(e.target.files[0])
      //     setImage(e.target.files[0])
      //   }
    
   
//     const{name,email,adharNumber,mobileNumber}=inputdata
// console.log(inputdata)
    
   
        const submitUserData = async(e) => {
            e.preventDefault();
        console.log("shama")
        
      
        const { name, email,adharNumber, mobileNumber,alternativeNumber,gender,officeAddress,reference ,residentialAddress} = inputdata;
        
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
            } else if (gender === "") {
              toast.error("Gender is Required !")
            } else if (adharNumber === "") {
              toast.error("AdharNumber is Required !")
            }else if(residentialAddress==="") {
                toast.error("Residential_address is Required !")
            }
            else if(officeAddress===""){
                toast.error("OfficeAddress is Required !")
            }
            else if(reference===""){
                toast.error("Reference is Required !")
            }else{
              // console.log(image);
            console.log("Customer Registered Successfully")

              const data = new FormData();
              data.append("name",name)
              data.append("adharNumber",adharNumber)
              data.append("email",email)
              data.append("mobileNumber",mobileNumber)
              data.append("gender",gender)
              data.append("alternativeNumber",alternativeNumber)
              // data.append("image",image)
              data.append("residentialAddres",residentialAddress)
              data.append("officeAddress",officeAddress)
              data.append("reference",reference)
              
              console.log(data)
console.log("data")
              
              try {

                let res=await axios.post(`${url}/customer-registration`,{ name,email,adharNumber,mobileNumber,officeAddress,reference,alternativeNumber,gender,residentialAddress},
                
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
                        gender: "",
                        residentialAddress:"",
                       
                        officeAddress:"",
                        reference:""
                      })

                        // setImage("")
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
      
    
            // useEffect(()=>{
            //     if(image){
            //       setPreview(URL.createObjectURL(image))
            //     }
            //   },[image])
  return <>
  <h1>shama</h1>
  <div style={{backgroundColor:"#FEFAF6",color:'#01204E',height:"85vh",paddingTop:50}}>
    <h1 className='text-center mb-5 '>CustomerMasters</h1>

    <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicName">
                  <Form.Label> Name</Form.Label>
                  <Form.Control type="text" name='name' value={inputdata.name} onChange={setInputValue} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" controlId="formBasicName">
                <Form.Label> Professinal Details</Form.Label>
                <Form.Select className="mb-3 col-lg-4">
               
      
      <option value="employee">Employee</option>
      <option value="self Employee">Self Employee</option>
      <option value="partnership">Partnership</option>
      <option value="governmentEmployee">GovernmentEmployee</option>
      <option value="private Employee">Private Employee</option>
      <option value="others">Others</option>
      
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label> Monthly Income</Form.Label>
                  <Form.Control type="Number" name='monthlyIncome' value={inputdata.monthlyIncome} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label>Upload Documents</Form.Label>
                  <Form.Control type="file" name='uploaddocuments' value={inputdata.uploaddocuments} onChange={setInputValue} />
                </Form.Group>

                


                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label> EMail</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicadharNumber">
                  <Form.Label>adharNumber</Form.Label>
                  <Form.Control type="number" name='adharNumber' value={inputdata.adharNumber} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicmobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="number" name='mobileNumber' value={inputdata.mobileNumber} onChange={setInputValue} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" controlId="formBasicalternativemobileNumber">
                  <Form.Label>Alternative Number</Form.Label>
                  <Form.Control type="number" name='alternativeNumber' value={inputdata.alternativeNumber} onChange={setInputValue} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" controlId="formBasicgender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" name='gender' value={inputdata.gender} onChange={setInputValue} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" controlId="formBasicResidentialAddress">
                  <Form.Label> Residential_address</Form.Label>
                  <Form.Control type="text" name='residentialAddress' value={inputdata.residentialAddress} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicofficeAddress">
                  <Form.Label> officeAddress</Form.Label>
                  <Form.Control type="text" name='officeAddress' value={inputdata. officeAddress} onChange={setInputValue}  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicofficeAddress">
                  <Form.Label>Reference</Form.Label>
                  <Form.Control type="text" name='reference' value={inputdata. reference} onChange={setInputValue}  />
                </Form.Group>

                

                <Button  type="submit" onClick={submitUserData} style={{backgroundColor:"#5C2FC2",width:200,borderRadius:10}}>
        SUBMIT
      </Button>

                

                </Row>
                </Form>
   

</div>
  </>
    
}

export default CustomerEdit