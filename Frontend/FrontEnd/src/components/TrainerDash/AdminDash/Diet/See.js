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
    const apiUrl = 'http://localhost:8083/dietplans/getAllPlans';
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
            <th style={{ padding: '10px', border: '1px solid white' }}>Sno</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Diet Type</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>End Date</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Meal Plan</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Start Date</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>For UserId</th>
            {/* <th style={{ padding: '10px', border: '1px solid white' }}>Edit</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'red' : 'black' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.dietType}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.endDate}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.mealPlan}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.startDate}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.userId}</td>
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