// Filename - pages/Health_fitness.js

import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import axios from "axios";


export default class Health_fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthfitnessdata: null,
      // loading: true,
      // error: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/healthfitness/tracking/' + localStorage.getItem("id");
    console.log('API URL:', apiUrl);

	axios.get(apiUrl, {
		headers: {
		  'Authorization': `Bearer ${localStorage.getItem("token")}`,
		}
    })
      .then(response => {
        this.setState({
          healthfitnessdata: response.data,
          // loading: false,
        });
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching health and fitness data:', error);
        this.setState({
          error: error,
          // loading: false,
        });
      });
  }

  render() {
    const { healthfitnessdata, loading, error } = this.state;

    return (
      <Card style={{ maxWidth: 500, margin: '100px auto', background: '#333', color: 'white' }}>
		<CardContent>
    <Typography variant="h5" component="div" style={{ textAlign: 'center', color: 'red', fontSize: '2rem' }}>
			Health and Fitness Details
		  </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
			Membership ID: {healthfitnessdata ? healthfitnessdata.membershipID : 'N/A'}
		  </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
			Expiration Date: {healthfitnessdata ? format(new Date(healthfitnessdata.expirationDate), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
		  </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
			Membership Type: {healthfitnessdata ? healthfitnessdata.membershipType : 'N/A'}
		  </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
			Registration Date: {healthfitnessdata ? format(new Date(healthfitnessdata.registrationDate), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
		  </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
			Renewal Date: {healthfitnessdata ? format(new Date(healthfitnessdata.renewalDate), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
		  </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
			User ID: {healthfitnessdata ? healthfitnessdata.userId : 'N/A'}
		  </Typography>
		</CardContent>
	  </Card>
	  
    );
  }
}
