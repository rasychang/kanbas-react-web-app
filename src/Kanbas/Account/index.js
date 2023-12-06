import * as client from "../Users/client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Signin");
  };

  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div>
      <h1>Account</h1>
      {account && (
        <div>
          <div className="login-container2">
            <div className="input-container2">
              <h4>User: {account.username}</h4>
              Password:
              <input type="text" value={account.password}
                onChange={(e) => setAccount({
                  ...account,
                  password: e.target.value
                })} />
              First Name:
              <input type="text" value={account.firstName}
                onChange={(e) => setAccount({
                  ...account,
                  firstName: e.target.value
                })} />
              Last Name:
              <input type="text" value={account.lastName}
                onChange={(e) => setAccount({
                  ...account,
                  lastName: e.target.value
                })} />
              Date of Birth:
              <DatePicker
                placeholderText="Date of Birth"
                selected={new Date(account.dob)}
                onChange={(e) => setAccount({
                  ...account,
                  dob: e
                })}
                dateFormat="yyyy-MM-dd" // Customize the date format
              />
              
              Email:
              <input type="text" value={account.email}
                onChange={(e) => setAccount({
                  ...account,
                  email: e.target.value
                })} />
              Role:
              <select onChange={(e) => setAccount({
                ...account,
                role: e.target.value
              })}
                value={account.role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="btn btn-primary login" onClick={save}>Save</button>
            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
              Users
            </Link>

            <button type="button" className="btn btn-primary login" onClick={signout}>Signout</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Account;