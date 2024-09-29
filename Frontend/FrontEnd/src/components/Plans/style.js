import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3em auto;

    h2{
        font-size: 45px;
        margin: 1em auto;
        font-weight: 700;
        text-align: center;

        @media only screen and (max-width: 420px){
            font-size: 35px;
        }
    }
`

export const Plans = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 900px){
        flex-direction: column;
    }
`

export const Plan = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #444;
    background-position: center;
    width: 330px;
    height: 450px;
    border-radius: 5px;
    padding: 1em;

    img{
        width: 30px;
    }

    p{
        text-shadow: 0 0 10px #ffffff75;
        font-weight: 500;
        margin: 0;
    }

    @media only screen and (max-width: 1115px){
        width: 300px;
    }

    @media only screen and (max-width: 1065px){
        width: 270px;
    }

    @media only screen and (max-width: 900px){
        max-width: 400px;
        width: 100%;
    }
`

export const PlanDetail = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 30px;
        margin-right: .5em;
    }

    p{
        text-shadow: 0 0 10px #ffffff50;
        font-size: 20px;
        font-weight: 500;
        margin: 0;

        @media only screen and (max-width: 1065px){
            font-size: 18px;
        }

        @media only screen and (max-width: 900px){
            font-size: 20px;
        }
    }
`

export const Button = styled.button`
    width: 100%;
    text-shadow: 0 0 10px #ffffff50;
    height: 50px;
    background: #ff0022;
    border: 0;
    font-size: 19px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 1em;

    a{
        color: inherit;
        text-decoration: none;
    }
`

export const Plan2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-image: linear-gradient(45deg, #ff0044 0%, #ff0011 100%);
    width: 380px;
    box-shadow: 0 0 20px #ff0022;
    height: 520px;
    border-radius: 5px;
    padding: 1em;
    margin: 4em 0;

    p{
        font-weight: 600;
        margin: 0;
        text-shadow: 0 0 10px #ffffff50;
    }

    img{
        width: 60px;
    }

    @media only screen and (max-width: 1065px){
        width:340px;
    }

    @media only screen and (max-width: 948px){
        width:310px;
    }

    @media only screen and (max-width: 900px){
        max-width: 450px;
        width: 100%;
    }

    @media only screen and (max-width: 351px){
        height: 570px;
    }

`

export const PlanDetail2 = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 30px;
        margin-right: .5em;
    }

    p{
        text-shadow: 0 0 10px #ffffff50;
        font-size: 20px;
        font-weight: 500;
        margin: 0;

        @media only screen and (max-width: 948px){
            font-size: 18px;
        }

        @media only screen and (max-width: 900px){
            font-size: 20px;
        }

        @media only screen and (max-width: 351px){
            font-size: 19px;
        }
    }
`

export const Button2 = styled.button`
    width: 100%;
    height: 50px;
    background: #eee;
    color: #ff0022;
    text-shadow: 0 0 10px #ff002250;
    border: 0;
    font-size: 21px;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 1em;

    a{
        color: inherit;
        text-decoration: none;
    }
`