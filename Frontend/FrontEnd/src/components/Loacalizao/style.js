import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2em;

    h2{
        font-size: 45px;
        margin: 1em auto;
        font-weight: 700;
    }

    p{
        font-size: 18px;
        text-align: center;
        margin-bottom: 1em;
    }
`

export const Iframe = styled.iframe`
    width: 80%;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
`