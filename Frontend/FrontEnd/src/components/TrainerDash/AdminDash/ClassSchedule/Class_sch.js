import React, { Component } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

export default class Class_sch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/class/getAllClasses';
    console.log('API URL:', apiUrl);

    axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => {
        this.setState({
          userData: response.data,
        });
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching trainer data:', error);
        // Handle error
      })
      .finally(() => {
        console.log('Request completed.');
      });
  }

  render() {
    const { userData } = this.state;

    if (!userData) {
      return <div>Loading...</div>;
    }

    return (
<div style={{ maxWidth: '800px', margin: '20px auto' }}>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#333', color: 'white' }}>
        <th style={{ padding: '10px', border: '1px solid white' }}>User ID</th>
        <th style={{ padding: '10px', border: '1px solid white' }}>Class ID</th>
        <th style={{ padding: '10px', border: '1px solid white' }}>Class Name</th>
        <th style={{ padding: '10px', border: '1px solid white' }}>End Time</th>
        <th style={{ padding: '10px', border: '1px solid white' }}>Schedule Date</th>
        <th style={{ padding: '10px', border: '1px solid white' }}>Start Time</th>
      </tr>
    </thead>
    <tbody>
      {userData.map((user, index) => (
        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'red' : 'black' }}>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.userID}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.classID}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.className}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.endTime}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.scheduleDate}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.startTime}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
  }
}
