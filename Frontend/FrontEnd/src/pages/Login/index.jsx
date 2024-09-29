// Import necessary components and libraries
import React, { useState } from 'react';
import * as S from './style';
import './style.css';
import Image from '../../assets/Mobile login.svg';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';

export default function Index() {
  // Set the document title
  document.title = 'Muscle Factory - Sign in';

  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ password: '' });

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Starting login process...');
     
      // Make a POST request to the login endpoint
      const response = await axios.post('http://localhost:8083/login', {
        username: email,
        password: password,
      });
    

      // Log the response to the console
      console.log('Login response:', response);
      // Assuming your backend sends a JWT token in the response
      const token = response.data.jwtToken;

      // Log the token to the console
      console.log('JWT Token:', token);

      // Store the token in localStorage or wherever you manage your state
      localStorage.setItem('token', token);

      // Get the user type from the response
      const name= response.data.name;
      const userType = response.data.userTypeIndex;
      const username=response.data.email;
      const id=response.data.id;
      localStorage.setItem('userType', userType);
      localStorage.setItem('email', username);
      localStorage.setItem('id',id);
      localStorage.setItem('name',name);
      console.log('User Type:', userType);

      // Redirect based on user type
      switch (userType) {
        case 0: // Admin
          window.location.href = '/admin'; // Change this to the admin route
          break;
        case 1: // Trainer
          window.location.href = '/trainer'; // Change this to the trainer route
          break;
        case 2: // Customer
          window.location.href = '/Customer'; // Change this to the customer route
          break;
        default:
          console.error('Unknown user type:', userType);
          break;
      }
    } catch (error) {
      console.error('Login failed', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error response status:', error.response.status);
        console.log('Error response data:', error.response.data);
        setErrors({ password: 'Authentication failed. Please check your credentials.' });
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message:', error.message);
      }
    }
  };

  // Render the UI
  return (
    <S.All>
      <NavBar />
      <S.Container>
        <img src={Image} alt='img_ilustration' />
        <S.CountArea>
          <S.ButtonSignup>
            <Link to='/signup'>REGISTER HERE!!</Link>
          </S.ButtonSignup>
          <S.Login>
            <h1><center>LOGIN</center></h1>
            <TextField
              classes={{ root: 'inputEmail' }}
              id='outlined-basic'
              required
              type='email'
              margin='dense'
              fullWidth
              label='Email'
              color='error'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              autoComplete='username'
            />

            <TextField
              margin='dense'
              classes={{ root: 'inputSignup' }}
              id='outlined-adornment-password'
              required
              fullWidth
              label='Password'
              color='error'
              variant='outlined'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={errors.password}
              error={Boolean(errors.password)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {/* You can add an icon for the password if needed */}
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              autoComplete='current-password'
            />
            {/* <S.Forgot>Forgot your password?</S.Forgot> */}
            <S.ButtonEntrar onClick={handleLogin}>Login Here</S.ButtonEntrar>
          </S.Login>
        </S.CountArea>
      </S.Container>
      <Footer />
    </S.All>
  );
}
