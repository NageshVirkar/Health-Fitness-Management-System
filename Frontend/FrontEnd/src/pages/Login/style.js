import styled from 'styled-components';

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
  img {
    width: 50%;
    @media only screen and (max-width: 723px) {
      display: none;
    }
  }

  display: flex;
  margin: 5em auto 5em; /* Added more space before the form */
  border-radius: 5px;
  width: 700px;
  height: 500px;
  background: linear-gradient(45deg, #222 0%, #111 100%);

  @media only screen and (max-width: 723px) {
    flex-direction: column;
    max-width: 400px;
    width: 95%;
    height: 490px;
  }
`;

export const CountArea = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: #111;
  border-radius: 0 5px 5px 0;
  padding: 1em;

  path {
    color: red;
  }

  @media only screen and (max-width: 723px) {
    width: 100%;
    border-radius: 5px;
  }
`;

export const ButtonSignup = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  color: #ff0022;
  text-shadow: 0 0 10px #ff002250;
  transition: all ease-in-out 0.3s;
  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transition: all ease-in-out 0.3s;
    color: #e7e7e7;
    text-shadow: 0 0 10px #e7e7e775;
    background: #ff0022;
    box-shadow: 2px 2px 7px #11111175;
  }

  &:active {
    transition: all ease-in-out 0.1s;
    transform: scale(0.95);
  }

  @media only screen and (max-width: 723px) {
    margin-bottom: 1em;
  }
`;

export const LoginArea = styled.div`
  width: 100%;
`;

export const Login = styled.form`
  width: 100%;
  margin-top: 2em; /* Added space above the form */

  h1 {
    color: #ff0022;
    text-shadow: 0 0 10px #ff002250;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
`;

export const ButtonEntrar = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  margin-bottom: 3em;
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
export const PasswordInput = styled.div`
  input {
    color: white;!important /* Updated the text color to white */
    background: transparent;
    border: 1px solid #ff0022;
    border-radius: 5px;
    padding: 0.5em;
    margin-bottom: 1em;
    transition: border 0.3s;

    &:focus {
      outline: none;
      border-color: white;
    }
  }
`;


export const Forgot = styled.p`
  color: #ff425b; /* Changed the color for the "Forgot your password?" link */
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #ff0022;
    transition: all ease-in-out 0.2s;
  }
`;

export const SocialArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Facebook = styled.div`
  display: none; /* Removed Facebook button */
`;

export const Twitter = styled.div`
  display: none; /* Removed Twitter button */
`;

// Additional styling for Login text
export const LoginText = styled.h1`
  color: white!important;
  text-shadow: 0 0 10px #ff002250;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

