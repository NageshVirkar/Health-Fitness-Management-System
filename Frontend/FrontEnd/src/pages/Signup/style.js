import styled from 'styled-components'


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
    padding: .5em 1em;
    border-radius: 1px;
    cursor: pointer;
    letter-spacing: 1px;
    color: #eee;
    text-shadow: 0 0 10px #eeeeee75;
    transition: all ease-in-out .3s;
    margin-bottom: 1.0em;

    &:hover{
        transition: all ease-in-out .3s;
        background: linear-gradient(45deg, #ff1231 0%, #e0001e 100%);
        box-shadow: 2px 2px 7px #11111195;
    }

    &:active{
        transition: all ease-in-out .1s;
        transform: scale(.95);
    }
`

export const PassowrdInput = styled.div`
    margin: .5em auto .5em auto;

`

export const Forgot = styled.p`
    color: #222;
    transition: all ease-in-out .2s;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        color: #ff0022;
        transition: all ease-in-out .2s;
    }
`

export const SocialArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Facebook = styled.div`
    width: 100%;
    height: 45px;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #3B5998;
    font-size: 18px;
    color: #eee;
    margin: .5em auto;
    cursor: pointer;

    img{
        height: 40px;
        width: 40px;
        margin-right: 1em;
    }

    @media only screen and (max-width: 723px){
        font-size: 16px;
    }

`

export const Twitter = styled.div`
    width: 100%;
    height: 45px;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #55ACEE;
    font-size: 18px;
    color: #eee;
    margin: .5em auto;
    cursor: pointer;

    img{
        height: 40px;
        width: 40px;
        margin-right: 1em;
    }
`

export const All = styled.div`
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(45deg, #111 0%, #333 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5em;
`;

export const Container = styled.div`
window.scrollTo({ top: 0, behavior: 'smooth' });
    img {
        width: 100%;
    }

    padding: 1em;
    margin: 3em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    max-width: 500px;
    width: 95%;
    background: linear-gradient(45deg, #111 0%, #333 100%); /* Dark background */
`;

export const ButtonSignin = styled.button`
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
    margin-bottom: 1.0em; /* Adjust the margin here */

    a {
        color: inherit;
        text-decoration: none;
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
`;
// ... (previous imports)


export const Signup = styled.form`
    width: 100%;

    h1 {
        color: #ff0022;
        text-shadow: 0 0 10px #ff002250;
        font-weight: 700;
        margin-bottom: 0.5em;
    }

    .inputSignup {
        &.MuiOutlinedInput-input {
            color: white !important;  // Set the input text color to white
        }
        &.MuiInputLabel-root {
            color: white !important;  // Set the input label color to white
        }
    }
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em auto;
    width: 100%;
    flex-wrap: wrap;
    color: white!important;  // Set the default text color to white

    .MuiFormControl-root {
        width: calc(50% - 0.5em);  // Adjust input width
        margin-bottom: 1em;  // Adjust bottom margin

        .inputSignup {
            &.MuiOutlinedInput-input {
                color: white !important;  // Set the input text color to white
            }
            &.MuiInputLabel-root {
                color: white !important;  // Set the input label color to white
            }
        }
    }
`;

// ... (rest of the code)

// Add other styles as needed
