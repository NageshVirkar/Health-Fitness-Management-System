import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import axios from 'axios';

export default class Reciept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceData: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/receipt/generateReceipt';
    console.log('API URL:', apiUrl);
	console.log(localStorage.getItem("token"));
    axios.post(apiUrl, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
		
      }
	  
    })
      .then(response => {
        this.setState({
          attendanceData: response.data,
        });
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
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
    const { attendanceData } = this.state;

    if (!attendanceData) {
      return <div>Loading...</div>;
    }
    console.log('check_in_time:', attendanceData.check_in_time);
    console.log('check_out_time:', attendanceData.check_out_time);
    console.log('status:', attendanceData.status);
    const {
      attendance_id,
      checkInTime,
      checkOutTime,
      status,
      userId
,
    } = attendanceData;

    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Attendance ID: {attendance_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check-in Time: {checkInTime ? format(new Date(checkInTime), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check-out Time: {checkOutTime ? format(new Date(checkOutTime), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {status || 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            User ID: {userId
 || 'N/A'}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
