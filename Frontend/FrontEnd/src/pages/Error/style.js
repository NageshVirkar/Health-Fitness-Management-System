import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        max-width: 500px;
        width: 90%;
        margin-bottom: 3em;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        outline: 0;
        background: #ff0022;
        box-shadow: 0 0 10px #ff002250;
        font-size: 20px;
        font-weight: 600;
        padding: .5em 1em;
        border-radius: 5px;
        cursor: pointer;
        letter-spacing: 1px;
        color: #eee;
        transition: all ease-in-out .3s;
        a{
            color:inherit ;
            text-decoration: none;
        }

        &:hover{
            transition: all ease-in-out .3s;
            background:#ff0033;
            box-shadow: 2px 2px 7px #00000095;
            color: #eee;
            text-shadow: 0 0 10px #eeeeee75;
        }

        &:active{
            transition: all ease-in-out .1s;
            transform: scale(.98);
        }
    }
`