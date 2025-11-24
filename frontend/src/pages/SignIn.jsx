import React, { useState } from "react";
import "../assets/css/form.css";
import Button from "../component/Button";
import { Link, useNavigate } from "react-router-dom";
import API from "../Api";

const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/signin", data); 
      localStorage.setItem("token", res.data.token);
      nav("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <form className="form-control" onSubmit={handleLogin}>
        <div style={{ textAlign: "center" }}>Sign in to your account to continue </div>
        <div className="maindiv">
          <div>
            <label className="form-label">Email:</label>
            <br />
            <input
              placeholder="Email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div>
            <label className="form-label"> Password : </label>
            <br />
            <input
              placeholder="Password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <div>
            <Button name="Sign in" className="btn btn-primary" type="submit" />
          </div>


          <span>
            Not a member? <Link to="/signup">Create account</Link>
          </span>

        </div>
      </form>
    </>
  );
};

export default SignIn;
