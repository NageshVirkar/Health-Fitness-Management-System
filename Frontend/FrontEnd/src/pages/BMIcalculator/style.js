// style.js
import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const All = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(45deg, #111 0%, #333 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 5em auto 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 400px;
  padding: 2em;
  background: linear-gradient(45deg, #222 0%, #111 50%, #222 100%); /* Lighter background color */
  margin-top: 5em;
  border: 2px solid #ff0022; /* Add a border */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */

  h1 {
    color: white;
    margin-bottom: 1em;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const InputSignup = styled(TextField)`
  margin-bottom: 1em;
  width: 100%;

  &.MuiFormControl-root {
    label {
      color: white;
    }
    .MuiOutlinedInput-root {
      color: white;
      fieldset {
        border-color: #ff0022;
      }
      &:hover fieldset {
        border-color: white;
      }
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  }
`;

export const ButtonEntrar = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  margin-bottom: 1em;
  background: linear-gradient(45deg, #ff425b 0%, #a80016 100%);
  font-size: 20px;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 1px;
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

export const SocialArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5em;
  }
`;

export const Facebook = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ff0022;
  }
`;

export const Twitter = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ff0022;
  }
`;

// Additional styling for dark theme
export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
