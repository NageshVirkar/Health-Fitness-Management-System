import React, { useState } from 'react';
import * as S from './style';
import './style.css';
import PasswordInput from '../../components/PassordInputLogin';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../UserContext';

export default function Index() {
  document.title = 'Muscle Factory - Sign-up';
  const navigate = useNavigate();
  const { saveUserData } = useUserContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [healthRecords, setHealthRecords] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [generatedOtp, setGeneratedOtp] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
    address: '',
    healthRecords: '',
    termsAccepted: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactNumber: '',
      address: '',
      healthRecords: '',
      termsAccepted: '',
    };

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (!contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required';
      isValid = false;
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (!healthRecords.trim()) {
      newErrors.healthRecords = 'Health Records are required';
      isValid = false;
    }

    // if (!termsAccepted) {
    //   newErrors.termsAccepted = 'You must accept the terms';
    //   isValid = false;
    // }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        contactNumber,
        address,
        healthRecords,
        termsAccepted,
      };

      saveUserData(userData);

      // Register user API call
      axios.post("http://localhost:8083/mail/send/" + email)
        .then((response) => {
          console.log('Registration successful. Response:', response.data);

          // Log the generated OTP
          console.log('Generated OTP:', response.data.generatedOtp);

          // Set the generated OTP to state
          setGeneratedOtp(response.data.generatedOtp);

          // Registration successful
          // Redirect to OTP verification page
          navigate('/otpverify', {
            state: { generatedOtp: response.data.generatedOtp },
          });
        })
        .catch((error) => {
          console.error("Error registering user:", error);

          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Error response status:', error.response.status);
            console.log('Error response data:', error.response.data);
            alert(`Error registering user: ${error.response.data.message}`);
          } else if (error.request) {
            // The request was made but no response was received
            console.log('No response received');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error message:', error.message);
            alert(`Error registering user: ${error.message}`);
          }
        });
    }
  };

  return (
    <S.All>
      <NavBar />
      <S.Container>
        <S.Signup>
          <h1>
            <center>REGISTER YOURSELF</center>
          </h1>
          <TextField
            margin="dense"
            id="standard-basic-1"
            classes={{ root: 'inputSignup' }}
            required
            fullWidth
            label="First Name"
            color="error"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            helperText={errors.firstName}
            error={Boolean(errors.firstName)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <TextField
            classes={{ root: 'inputSignup' }}
            id="standard-basic-2"
            required
            margin="dense"
            fullWidth
            label="Last Name"
            color="error"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            helperText={errors.lastName}
            error={Boolean(errors.lastName)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle className="Svg" />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <TextField
            classes={{ root: 'inputSignup' }}
            id="outlined-basic-3"
            required
            type="email"
            margin="dense"
            fullWidth
            label="Email"
            color="error"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={errors.email}
            error={Boolean(errors.email)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
            autoComplete="email" // or autoComplete="off" based on your requirement
          />
          <TextField
            margin="dense"
            classes={{ root: 'inputSignup' }}
            id="outlined-adornment-password"
            required
            fullWidth
            label="Password"
            color="error"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={errors.password}
            error={Boolean(errors.password)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* You can add an icon for the password if needed */}
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
            autoComplete="current-password" // Add this line
          />
          <TextField
            margin="dense"
            classes={{ root: 'inputSignup' }}
            id="outlined-basic-4"
            required
            fullWidth
            label="Contact Number"
            color="error"
            variant="outlined"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            helperText={errors.contactNumber}
            error={Boolean(errors.contactNumber)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{/* You can add an icon for the contact number if needed */}</InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <TextField
            margin="dense"
            classes={{ root: 'inputSignup' }}
            id="outlined-basic-5"
            required
            fullWidth
            label="Address"
            color="error"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            helperText={errors.address}
            error={Boolean(errors.address)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{/* You can add an icon for the address if needed */}</InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <TextField
            margin="dense"
            classes={{ root: 'inputSignup' }}
            id="outlined-basic-6"
            required
            fullWidth
            label="Health Records"
            color="error"
            variant="outlined"
            value={healthRecords}
            onChange={(e) => setHealthRecords(e.target.value)}
            helperText={errors.healthRecords}
            error={Boolean(errors.healthRecords)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalHospitalIcon />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <FormControlLabel
            classes={{ root: 'inputSignup' }}
            color="error"
            required
            id="check"
            control={<Checkbox checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />}
            label={`I have read and accept the terms of use`}
            error={Boolean(errors.termsAccepted).toString()} // Convert boolean to string
          />
          <S.ButtonEntrar onClick={handleRegister}>Register</S.ButtonEntrar>
        </S.Signup>
        <S.ButtonSignin>
          <Link to="/login">Login</Link>
        </S.ButtonSignin>
      </S.Container>
      <Footer />
    </S.All>
  );
}
