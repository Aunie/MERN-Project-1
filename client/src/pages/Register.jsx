import React, { useState } from 'react';
import '../assets/css/style.css';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../store/auth';

const URL = "http://localhost:5000/api/auth/register";

const Register = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API)
    console.log('Form submitted', user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();

        // Store JWT token in local storage
        storetokenInLS(responseData.token);

        alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate('/login'); // Redirect to login page after successful registration
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
    <div className="registration-container">
      <div className="registration-image">
        <img src="https://images.pexels.com/photos/30496930/pexels-photo-30496930/free-photo-of-modern-workspace-with-laptop-and-accessories.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Placeholder"/>
      </div>
      <div className="registration-form">
        <h1 className='text-white'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn custom-button">Register</button>
        </form>
      </div>
    </div>
    </>
  );
}

    export default Register
