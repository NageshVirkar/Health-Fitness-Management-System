import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.9em;

    h2{
        font-size: 45px;
        margin: 1em 0;
        font-weight: 700;

        @media only screen and (max-width: 380px){
            font-size: 40px;
        }
    }
`

export const ModalidadesFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    
`

export const ModalidadeItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 230px;
    height: 235px;
    padding: .1em;
    margin: 1em 1.2em;
    border-radius: 5px;
    border: solid 2px #eeeeee;
    box-shadow: 0 0 8px #ff001e, inset 0 0 5px #ff001e;

    img{
        width: 170px;
        margin-bottom: .5em;
    }

    h3{
        font-size: 30px;
        text-shadow: 0 0 10px #ffffff50;
    }
`