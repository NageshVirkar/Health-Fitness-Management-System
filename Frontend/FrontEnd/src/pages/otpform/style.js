// style.js
import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(45deg, #111 0%, #333 100%);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #ff1231; /* Red border */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonEntrar = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  margin: 1em 0 3em 0;
  background: linear-gradient(45deg, #ff425b 0%, #a80016 100%);
  font-size: 20px;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  color: #eee;
  text-shadow: 0 0 10px #eeeeee75;
  transition: all ease-in-out 0.3s;

  &:hover {
    transition: all ease-in-out 0.3s;
    background: linear-gradient(45deg, #ff1231 0%, #e0001e 100%);
    box-shadow: 2px 2px 7px #11111195;
  }

  &:active {
    transition: all ease-in-out 0.1s;
    transform: scale(0.95);
  }
`;

export const Signup = styled.form`
  width: 100%;
  padding: 2em;

  h1 {
    color: #ff0022;
    text-align: center;
    font-weight: 700;
    margin-bottom: 1em;
  }

  .inputSignup {
    &.MuiOutlinedInput-input {
      color: white !important; // Set the input text color to white
    }
    &.MuiInputLabel-root {
      color: white !important; // Set the input label color to white
    }
  }
`;

// Add other styles as needed
