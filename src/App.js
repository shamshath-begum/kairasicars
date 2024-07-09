import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import "./App";
import Defaulters from "./components/Defaulters";
import Capital from "./components/Capital";
import Repose from "./components/Repose";
import CustomerRegistration from "./components/customer/CustomerRegistration";
import LoanRegistration from "./components/loan/LoanRegistration";
import Footer from "./components/Footer";
import CustomerEdit from "./components/customer/CustomerEdit";
import CustomerView from "./components/customer/CustomerView";
import LoanDetails from "./components/loan/LoanDetails";
import EMISingle from "./components/emi/EMISingle";
import EMIMultiple from "./components/emi/EMIMultiple";
import EmiSingleCustomerDetails from "./components/emi/EmiSingleCustomerDetails";
import SingleCustomerDetails from "./components/emi/SingleCustomerDetails";
import CustomerSingle from "./components/customer/CustomerSingle";
import ImmediatePaymentReceipt from "./components/PaymentReceipt.js/ImmediatePaymentReceipt";
import CustomerDetails from "./components/customer/CustomerDetails";
// import EmiSingleCustomerDetails from "./components/emi/EmiSingleCustomerDetails";

export const url = "http://localhost:8080";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/customer-registration"
            element={<CustomerRegistration />}
          />
          <Route path="/customer-edit/:id" element={<CustomerEdit />} />
          <Route path="/customer-single" element={<CustomerSingle />} />
          <Route path="/customer-view/:id" element={<CustomerView />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/loan-registration" element={<LoanRegistration />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route
            path="/loan-details/:HypothicationNo"
            element={<LoanDetails />}
          />

          <Route path="/emi-single" element={<EMISingle />} />
          <Route path="/emi-multiple" element={<EMIMultiple />} />
          <Route
            path="/emi-single-view/:HypothicationNo"
            element={<EmiSingleCustomerDetails />}
          />
          <Route
            path="/emi-single-customer-details/:HypothicationNo"
            element={<SingleCustomerDetails />}
          />
          <Route
            path="/immediate-payment-receipt/:HypothicationNo/:paidDate"
            element={<ImmediatePaymentReceipt />}
          />
          <Route path="/defaulters" element={<Defaulters />} />
          <Route path="/capital" element={<Capital />} />
          <Route path="/repose" element={<Repose />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
