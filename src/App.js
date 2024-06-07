import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/pages/SignUp";
import Login  from "./components/pages/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminDashboard from "./components/AdminDashboard";
import "./App";
import LoanMasters from "./components/LoanMasters";
import EMI from "./components/EMI";
import Defaulters from "./components/Defaulters";
import Capital from "./components/Capital";
import Repose from "./components/Repose";
import CustomerRegistration from "./components/customer/CustomerRegistration";
import CustomerDetails from "./components/customer/CustomerDetails";
import LoanRegistration from "./components/loan/LoanRegistration";
import Footer from "./components/Footer";
import CustomerEdit from "./components/customer/CustomerEdit";
export const url="http://localhost:8000"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/signup"element={<SignUp/>}/>
        <Route path="/admin-dashboard"element={<AdminDashboard/>}/>
        <Route path="/customer-registration"element={<CustomerRegistration/>}/>
        <Route path="/customer-edit"element={<CustomerEdit/>}/>
        <Route path="/customer-details"element={<CustomerDetails/>}/>
        <Route path="/loan-registration"element={<LoanRegistration/>}/>
        
        <Route path="/loan-masters"element={<LoanMasters/>}/>
        <Route path="/emi"element={<EMI/>}/>
        <Route path="/defaulters"element={<Defaulters/>}/>
        <Route path="/profit"element={<Capital/>}/>
        <Route path="/repose"element={<Repose/>}/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
