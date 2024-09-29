import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  width: 600px;
  margin-left: 500px;
  margin-top: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const FormHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 2px;
`;

const FormInput = styled.input`
  padding: 4px;
  margin-bottom: 8px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
  margin-left: 180px;
`;

const DarkThemeForm = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactNumber: '',
      address: '',
      
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:8083/customer/reg_user"; // Replace with your backend API endpoint

    axios.post(apiUrl, formData)
      .then(response => {
        console.log("API response:", response.data);
        alert('User Registered Successfully!');
        // Handle success, you can redirect or show a success message
      })
      .catch(error => {
        console.error("API error:", error);
        // Handle error, you can show an error message to the user
      });
  };

  return (
    <FormContainer>
      <FormHeader>Register User</FormHeader>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>First Name:</FormLabel>
          <FormInput
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Last Name:</FormLabel>
          <FormInput
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Email:</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Contact No:</FormLabel>
          <FormInput
            type="text"
            name="contactno"
            value={formData.contactno}
            onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Address:</FormLabel>
          <FormInput
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Password:</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormRow>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default DarkThemeForm;
