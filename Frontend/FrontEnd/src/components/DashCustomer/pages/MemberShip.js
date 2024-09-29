// Filename - pages/Membership.js

import React, { Component } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
export default class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membershipdata: null,
    //   loading: true,
    //   error: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/membership/getMembershipById/' + localStorage.getItem("id");
    console.log('API URL:', apiUrl);

	axios.get(apiUrl, {
		headers: {
		  'Authorization': `Bearer ${localStorage.getItem("token")}`,
		}
    })
    .then(response => {
      this.setState({
        membershipdata: response.data,
        //loading: false,
      });
	  console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error fetching membership data:', error);
      this.setState({
        error: error,
        //loading: false,
      });
    });
  }

  render() {
    const { membershipdata, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error fetching data. Please try again later.</div>;
    }

    if (!membershipdata) {
      return <div>No membership found.</div>;
    }

    return (
      <Card style={{ maxWidth: 500, margin: '100px auto', background: '#333', color: 'white' }}>
			<CardContent>
      <Typography variant="h5" component="div" style={{ textAlign: 'center', color: 'red', fontSize: '2rem' }}>
				Membership Details
			  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
				Membership ID: {membershipdata ? membershipdata.membershipID : 'N/A'}
			  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
				Expiration Date: {membershipdata ? format(new Date(membershipdata.expirationDate), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
			  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
				Membership Type: {membershipdata ? membershipdata.membershipType : 'N/A'}
			  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
				Registration Date: {membershipdata ? format(new Date(membershipdata.registrationDate), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
			  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
				Renewal Date: {membershipdata ? format(new Date(membershipdata.renewalDate), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
			  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
				User ID: {membershipdata ? membershipdata.userId : 'N/A'}
			  </Typography>
			</CardContent>
		  </Card>
		  
    );
  }
}
