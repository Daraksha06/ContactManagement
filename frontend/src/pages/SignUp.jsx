import React, { useState } from 'react';
import '../assets/css/form.css';
import Button from '../component/Button';
import { Link, useNavigate } from 'react-router-dom';
import API from '../Api';

const SignUp = () => {
  const [data, setData] = useState({ name: '', email: '', password: '', confirm: '' });
  const nav = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirm) return alert('Passwords do not match');
    try {
      await API.post('/signup', data); // 
      alert('Account created!');
      nav('/signin'); 
    } catch (err) {
      alert(err.response?.data?.message || 'Failed');
    }
  };

  return (
    <form className="form-control" onSubmit={handleRegister}>
      <div style={{ textAlign: 'center' }}>Sign up to continue</div>
      <div className="maindiv">
        <div>
          <label className="form-label">Name:</label><br />
          <input
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Email:</label><br />
          <input
            placeholder="Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Password:</label><br />
          <input
            placeholder="Password"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Confirm Password:</label><br />
          <input
            placeholder="Confirm Password"
            type="password"
            value={data.confirm}
            onChange={(e) => setData({ ...data, confirm: e.target.value })}
          />
        </div>
        <div>
          <Button name="Sign Up" className="btn btn-primary" type="submit" />
        </div>
        <span><Link to="/signin"> Login</Link></span>
      </div>
    </form>
  );
};

export default SignUp; 


