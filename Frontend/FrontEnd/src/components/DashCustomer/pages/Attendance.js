import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import axios from 'axios';

export default class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceData: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/attendance/' + localStorage.getItem("id");

    axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => {
        this.setState({
          attendanceData: response.data,
        });
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
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

    const {
      attendance_id,
      checkInTime,
      checkOutTime,
      status,
      userId
    } = attendanceData;

    return (
      <Card style={{ maxWidth: 500, margin: '100px auto', background: '#333', color: 'white' }}>
        <CardContent>
          <Typography variant="h5" component="div" style={{ textAlign: 'center', color: 'red', fontSize: '2rem' }}>
            Attendance ID: {attendance_id}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Check-in Time: {checkInTime ? format(new Date(checkInTime), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Check-out Time: {checkOutTime ? format(new Date(checkOutTime), 'yyyy-MM-dd HH:mm:ss') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            Status: {status || 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>
            User ID: {userId || 'N/A'}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
