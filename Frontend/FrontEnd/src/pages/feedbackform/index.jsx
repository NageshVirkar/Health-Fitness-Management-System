import React, { useState } from 'react'; // Importing CSS for styling
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../feedbackform/style.css';
import axios from 'axios';


const FeedbackForm = () => {
  // State for form fields
  const [username, setName] = useState('');
  const [feedback_subject, setSubject] = useState('');
  const [feedback_content, setMessage] = useState('');
  const [rating, setRating] = useState('1');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Preventing the default form submit action
  
    // Prepare the data to be sent to the server
    const formData = {
      username,
      feedback_subject,
      feedback_content, // Ensure the rating is converted to an integer
    };
  
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post('http://localhost:8083/feedbackAndSurveys/saveSurvey', formData);
  
      // Handle the response if needed
      console.log('Server Response:', response.data);
      alert("Feedback is sent successfully");
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error:', error.message);
    }
  };
  return (
    <div >
        <NavBar/>
        <div style={{marginTop:"100px"}}>
    <div className="feedback-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input type="text" id="name" value={username} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Feedback Subject</label>
          <input type="text" id="subject" value={feedback_subject} onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Feedback Message</label>
          <textarea id="message" value={feedback_content} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FeedbackForm;