// OtpVerificationForm.js
import React, { useState, useEffect } from 'react';
import * as S from './style';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../UserContext';
import InputAdornment from '@mui/material/InputAdornment';

export default function OtpVerificationForm() {
  const { getUserData } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Use state to manage the OTP and initialize it with an empty string
  const [otp, setOtp] = useState('');

  // Use state to manage the generated OTP, initialize it with null
  const [generatedOtp, setGeneratedOtp] = useState(null);

  // Use useEffect to set the generated OTP when the component mounts
  useEffect(() => {
    // Check if location.state exists and has a generatedOtp property
    if (location.state && location.state.generatedOtp) {
      setGeneratedOtp(location.state.generatedOtp);
    }
  }, [location.state]);

  const handleVerifyOTP = () => {
    if (otp === generatedOtp) {
      alert('OTP verified successfully!');

      const userData = getUserData();

      // Save user data to database API call
      axios.post("http://localhost:8083/customer/reg_user", userData)
        .then((response) => {
          // Data saved successfully
          alert("User Registered successfully");
          // Redirect to login page or perform other actions
          //window.location.href='/login';
          navigate('/login');
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
          alert("Error saving user data. Please try again.");
        });
    } else {
      alert('Invalid OTP. Please try again.');
      window.location.href='/signup';
    }
  };

  return (
    <S.Card>
      <h1>VERIFY EMAIL</h1>
      <TextField
        margin="dense"
        id="outlined-basic"
        required
        fullWidth
        label="Enter OTP"
        color="error"
        variant="outlined"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span role="img" aria-label="otp-icon">
                🔒
              </span>
            </InputAdornment>
          ),
          style: { color: 'white' },
        }}
      />
      <S.ButtonEntrar onClick={handleVerifyOTP}>Verify OTP</S.ButtonEntrar>
    </S.Card>
  );
}
