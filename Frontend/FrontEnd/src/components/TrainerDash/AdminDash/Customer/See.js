import React, { Component } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

export default class See extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/customer/getAllUsers';
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
      <div style={{ maxWidth: '800px', margin: '30px auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#333', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid white' }}>User ID</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>First Name</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Last Name</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Email</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Contact Number</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Address</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Health Records</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Registration Date</th>
            {/* <th style={{ padding: '10px', border: '1px solid white' }}>Edit</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'red' : 'black' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.userId}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.firstName}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.lastName}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.contactNumber}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.address}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.healthRecords}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{format(new Date(user.registrationDate), 'yyyy-MM-dd')}</td>
              {/* <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Edit</button>              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <button style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Delete</button>
              </td> */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    );
  }
}
