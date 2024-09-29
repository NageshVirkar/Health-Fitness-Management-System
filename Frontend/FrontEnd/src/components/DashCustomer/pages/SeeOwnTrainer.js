import React, { Component } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

export default class SeeOwnTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainerdata: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8083/trainer/getAllTrainers';
    console.log('API URL:', apiUrl);
  
    axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => {
        this.setState({
          trainerdata: response.data,
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
    const { trainerdata } = this.state;

    if (!trainerdata) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ maxWidth: '800px', margin: '20px auto' }}>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#333', color: 'white' }}>
        <th style={{ padding: '10px', border: '1px solid black' }}>Trainer ID</th>
        <th style={{ padding: '10px', border: '1px solid black' }}>First Name</th>
        <th style={{ padding: '10px', border: '1px solid black' }}>Last Name</th>
        <th style={{ padding: '10px', border: '1px solid black' }}>Email</th>
        {/* <th style={{ padding: '10px', border: '1px solid white' }}>Request</th> */}

        {/* Add more table headers as needed */}
      </tr>
    </thead>
    <tbody>
      {trainerdata.map((trainer, index) => (
        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'red' : 'black' }}>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{trainer.trainerID}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{trainer.firstName}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{trainer.lastName}</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>{trainer.email}</td>
          {/* <td style={{ padding: '10px', border: '1px solid #ddd' }}>
              <button style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Request</button>
          </td> */}
          {/* Add more table cells as needed */}
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
  }
}
