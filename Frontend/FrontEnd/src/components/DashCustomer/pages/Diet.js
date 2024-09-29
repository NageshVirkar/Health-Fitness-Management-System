import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import axios from 'axios';

export default class Diet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DietData: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/dietplans/getPlanById/' + localStorage.getItem("id");
    console.log('API URL:', apiUrl);

    axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      })
      .then(response => {
        this.setState({
          DietData: response.data,
        });
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching diet data:', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }
      })
      .finally(() => {
        console.log('Request completed.');
      });
  }

  render() {
    const { DietData } = this.state;

    if (!DietData) {
      return <div>Loading...</div>;
    }

    const {
      id,
      dietType,
      mealPlan,
      startDate,
      endDate,
      userId,
    } = DietData;

    return (
      <Card style={{ maxWidth: 500, margin: '100px auto', background: '#333', color: 'white' }}>
        <CardContent>
        <Typography variant="h5" component="div" style={{ textAlign: 'center', color: 'red', fontSize: '2rem' }}>
			      Your Diet Information
		  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            DietData ID: {id}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Diet Type: {dietType || 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Meal Plan: {mealPlan || 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Start Date: {startDate ? format(new Date(startDate), 'yyyy-MM-dd') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            End Date: {endDate ? format(new Date(endDate), 'yyyy-MM-dd') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            User ID: {userId || 'N/A'}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
