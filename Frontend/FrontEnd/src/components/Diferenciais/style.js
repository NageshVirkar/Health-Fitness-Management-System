import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Box = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    padding: 1em;

    img{
        width: 130px;
        margin-bottom: 1em;
    }

    p{
        font-size: 18px;
        text-align: center;
    }
`