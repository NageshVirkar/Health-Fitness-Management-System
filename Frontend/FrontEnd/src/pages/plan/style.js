import styled from 'styled-components'

export const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;
`

export const Header = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    top: -75px;
    display: flex;
    align-items: center;
    justify-content: center;


    img{
        height: 100%;
        object-fit: cover;
        width: 100%;
        opacity: 50%;
    }
`

export const HeaderInfo = styled.div`
    width: 90%;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-weight: 700;
        font-size: 40px;
        letter-spacing: 1px;
        color: #ff0022;
        text-shadow: 0 0 10px #ff002275;
        margin: 0;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        text-shadow: 0 0 10px #ffffff50;
        text-align: center;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InfoAdd = styled.div`
    p{
        text-align: center;
        width: 95%;
        opacity: 70%;
        font-size: 14px;
        letter-spacing: 1px;
        margin-bottom: 3em;
    }
`