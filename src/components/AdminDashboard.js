import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";
import { details } from "../redux/customerSlice";
import { MdLogout } from "react-icons/md";
import "./admindashboard.css";
import Dropdown from "react-bootstrap/Dropdown";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function AdminDashboard() {
  const user = useSelector((state) => state.admin);
  console.log(user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let [customers, setCustomers] = useState([]);

  console.log(customers);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, [searchQuery]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        `${url}/customer-details?q=${searchQuery}`
      );
      console.log(response);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="admin">
        <div style={{ width: 280, backgroundColor: "#5C2FC2", color: "white" }}>
          <h1 style={{ color: "white", textAlign: "center", marginTop: 20 }}>
            {user.name}
          </h1>
          <Image
            src={`http://localhost:8080/uploads/${user.imgpath}`}
            style={{ width: 60, marginLeft: 60 }}
            roundedCircle
          />
          <ul className="mt-5">
            <div style={{ textDecoration: "none" }}>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#5C2FC2",
                      border: "none",
                      fontSize: 24,
                    }}
                  >
                    Customer Masters
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ backgroundColor: "#5C2FC2", border: "none" }}
                  >
                    <Dropdown.Item>
                      {" "}
                      <Link
                        className="link"
                        to="/customer-registration"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                          backgroundColor: "#5C2FC2",
                        }}
                      >
                        ADD
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/customer-details"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        VIEW
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>

            <div style={{ textDecoration: "none" }}>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#5C2FC2",
                      border: "none",
                      fontSize: 24,
                    }}
                  >
                    Loan Masters
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ backgroundColor: "#5C2FC2", border: "none" }}
                  >
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/loan-registration"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        ADD
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/loan-details"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        VIEW
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>

            <div style={{ textDecoration: "none" }}>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#5C2FC2",
                      border: "none",
                      fontSize: 24,
                    }}
                  >
                    EMI Payment Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ backgroundColor: "#5C2FC2", border: "none" }}
                  >
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/emi-single"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        EMI Payment
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/emi-single-view/:
HypothicationNo"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        Single Customer EMI Details
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/emi-multiple"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        Multiple Customers EMI Details
                      </Link>
                    </Dropdown.Item>

                    {/* <Dropdown.Item> <Link to="/emi-details" style={{textDecoration:"none",marginLeft:40,color:"white"}}>VIEW</Link></Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              to="/emi-single-view/:
HypothicationNo"
            >
              {" "}
              <li>Payment Receipt</li>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/defaulters">
              {" "}
              <li>Defaulters List</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/capital">
              {" "}
              <li>Capital + Profit</li>
            </Link>
            <div style={{ textDecoration: "none" }}>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "#5C2FC2",
                      border: "none",
                      fontSize: 24,
                    }}
                  >
                    Reports
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ backgroundColor: "#5C2FC2", border: "none" }}
                  >
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/loan-registration"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        Broker's List
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/loan-details"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        Upscanding List
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link
                        to="/loan-details"
                        style={{
                          textDecoration: "none",
                          marginLeft: 40,
                          color: "white",
                        }}
                      >
                        Terms & Conditions
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>

            <Link style={{ textDecoration: "none" }}>
              {" "}
              <li>
                <MdLogout />
                &nbsp;&nbsp;&nbsp;LogOut
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h2>Customer List</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div />
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={handleSearch}
              style={{ marginBottom: "20px", padding: "5px", width: "200px" }}
            />
          </div>

          <div className=" container mt-3 ">
            <Table striped bordered hover style={{ width: 1370 }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>#</th>
                  <th>Name</th>
                  <th>HypothicationNo</th>
                  <th>Images</th>
                  <th>MobileNumber</th>
                  <th>Email</th>
                  <th>LandMark</th>
                  <th>Reference</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((e, i) => {
                  return (
                    <tr
                      key={i}
                      style={{ cursor: "pointer", textAlign: "center" }}
                    >
                      <td>{i + 1}</td>
                      <td style={{ textAlign: "left" }}>{e.name}</td>
                      <td>{e.HypothicationNo}</td>
                      <td>
                        <Image
                          src={`http://localhost:8080/${e.imgpath}`}
                          style={{ width: 80, height: 80, marginLeft: 60 }}
                          roundedCircle
                        />
                      </td>
                      <td>{e.mobileNumber}</td>
                      <td>{e.email}</td>
                      <td>{e.landMark}</td>
                      <td>{e.reference}</td>
                      <td>{e.position}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
