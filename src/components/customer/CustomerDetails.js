import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../App";
import { useDispatch } from "react-redux";
import { details } from "../../redux/customerSlice";

function CustomerDetails() {
  let navigate = useNavigate();

  let [customers, setCustomers] = useState([]);

  const dispatch = useDispatch();

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/customer-details`);
      console.log(res);
      if (res.status === 201) {
        setCustomers(res.data.customers);
        dispatch(details(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let deleteCustomer = async (id) => {
    try {
      let res = await axios.delete(`${url}/delete/${id}`);
      if (res.status === 200) {
        console.log(res);
        getData();
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.rresponse.data.message);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        CustomerDetails
      </h1>
      {/* className=" container mt-3 " */}
      <div>
        <Table striped bordered hover>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>#</th>
              <th>Name</th>
              <th>CustomerID</th>
              <th>Images</th>
              <th>MobileNumber</th>
              <th>Email</th>
              <th>Reference</th>
              <th>LandMark</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((e, i) => {
              return (
                <tr key={i} style={{ cursor: "pointer", textAlign: "center" }}>
                  <td>{i + 1}</td>
                  <td style={{ textAlign: "left" }}>{e.name}</td>
                  <td>{e.customerID}</td>
                  <td>
                    <Image
                      src={`http://localhost:8080/${e.imgpath}`}
                      style={{ width: 80, height: 80, marginLeft: 60 }}
                      roundedCircle
                    />
                  </td>
                  <td>{e.mobileNumber}</td>
                  <td>{e.email}</td>
                  <td>{e.reference}</td>
                  <td>{e.landMark}</td>
                  <td>{e.position}</td>
                  <td>
                    <Button
                      style={{ backgroundColor: "#121481" }}
                      onClick={() => navigate(`/customer-edit/${e._id}`)}
                    >
                      {/* <i className="fas fa-pen-to-square"></i> */}
                      Edit
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      style={{ backgroundColor: "#FF7F3E" }}
                      onClick={() => deleteCustomer(e._id)}
                    >
                      {/* <i className="fas fa-trash"></i> */}
                      Delete
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      onClick={() => navigate(`/customer-view/${e._id}`)}
                      style={{ backgroundColor: "#0A6847" }}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CustomerDetails;
