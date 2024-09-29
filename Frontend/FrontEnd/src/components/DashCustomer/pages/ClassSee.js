import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import axios from 'axios';

export default class ClassSee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClassSeeData: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/class/getClassById/' + localStorage.getItem("id");
    console.log('API URL:', apiUrl);

    axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => {
        this.setState({
          ClassSeeData: response.data,
        });
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching class data:', error);
        // Handle error
      })
      .finally(() => {
        console.log('Request completed.');
      });
  }

  render() {
    const { ClassSeeData } = this.state;

    if (!ClassSeeData) {
      return <div>Loading...</div>;
    }

    const {
      classID,
      className,
      startTime,
      endTime,
      scheduleDate,
      trainerID,
    } = ClassSeeData;

    return (
      <Card style={{ maxWidth: 500, margin: '100px auto', background: '#333', color: 'white' }}>
        <CardContent>
        <Typography variant="h5" component="div" style={{ textAlign: 'center', color: 'red', fontSize: '2rem' }}>
			      Your Class
		  </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Class ID: {classID}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Class Name: {className}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Start Time: {startTime}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            End Time: {endTime}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Schedule Date: {scheduleDate}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Trainer ID: {trainerID}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
