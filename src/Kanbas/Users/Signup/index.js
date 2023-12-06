import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../client";
import "./index.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Signup() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Signup</h2>
        {error && <div>{error}</div>}
        <div className="input-container2">
          <input type="text" placeholder="Username" onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })} />
          <input type="password" placeholder="Password" onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })} />
        </div>
        <div>
          <div className="input-container2">
            <input type="text" id="first-name" placeholder="First Name" onChange={(e) => setCredentials({
              ...credentials,
              firstName: e.target.value
            })} />
            <input type="text" id="last-name" placeholder="Last Name" onChange={(e) => setCredentials({
              ...credentials,
              lastName: e.target.value
            })} />
            <input type="text" id="email" placeholder="Email" onChange={(e) => setCredentials({
              ...credentials,
              email: e.target.value
            })} />
            <input type="text" id="zip-code" placeholder="Zip Code" onChange={(e) => setCredentials({
              ...credentials,
              zipCode: e.target.value
            })} />
            <input type="text" id="phone" placeholder="Phone" onChange={(e) => setCredentials({
              ...credentials,
              phone: e.target.value
            })} />
            <DatePicker
              placeholderText="Date of Birth"
              selected={credentials.dob}
              onChange={(e) => setCredentials({
                ...credentials,
                dob: e
              })}
              dateFormat="yyyy-MM-dd" // Customize the date format
            />
          </div>
        </div>
        <div className="button-container">
          <button type="button" className="btn btn-success login" onClick={signup}>Sign up</button>
        </div>
      </form>
    </div>
  );
}
export default Signup;