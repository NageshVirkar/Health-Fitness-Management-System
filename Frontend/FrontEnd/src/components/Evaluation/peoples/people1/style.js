import styled from 'styled-components'

export const Container = styled.div`
    width: 410px;
    height: 230px;
    border: solid 2px #eee;
    border-radius: 5px;
    box-shadow: 0 0 7px #ff002290, inset 0 0 7px #ff002290;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    padding: 1em;

    @media screen and (max-width: 415px) {
        padding: .3em;
        width: 95%;
        height: 255px;
    }
`
export const InfoText = styled.p`
    font-size: 18px;
    text-align: center;
`

export const InfoArea2 = styled.div`
    img{
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 1em;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5em;
`

export const InfoName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p{
        margin: 0;
    }
`