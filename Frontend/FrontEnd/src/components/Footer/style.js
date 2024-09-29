import styled from 'styled-components'

export const Container = styled.footer`
    width: 100%;
    padding: 3em;
    background: #222;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1033px){
        padding: 1em;
    }
`

export const Email = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5em;
    text-align: center;

    @media screen and (max-width: 795px){
        margin-bottom: 3em;
    }
`
export const Input = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input{
        width: 500px;
        height: 45px;
        outline: 0;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #111;
        font-weight: 600;
        letter-spacing: 1px;
        @media screen and (max-width: 688px){
            width: 90%;
        }
    }

    button{
        border: 0;
        background: #fff;
        color:  #ff0022;
        font-weight: 600;
        width: 150px;
        height: 45px;
        border-radius: 0 5px 5px 0;

        &:hover{
            background: #ddd;
        }
    }
`

export const ContainerAreaInfo = styled.div`
    width: 100%;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 795px){
        flex-direction: column;
    }
    @media screen and (max-width: 519px){
        margin-bottom: 2em;
    }
`

export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 795px){
        margin-bottom: 3em;
    }
`

export const LogoImage = styled.img`
    width: 300px;
    @media screen and (max-width: 848px){
        width: 250px;
    }
`

export const SocialArea = styled.div`
    display: flex;
`

export const SocialItem = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 15px #ff002290;
    margin: 0 .5em;
    transition: all ease-in-out .2s;
    cursor: pointer;

    &:hover{
        transition: all ease-in-out .2s;
        transform: scale(1.1);
    }

    &:active{
        transition: all ease-in-out .1s;
        transform: scale(1);
    }
`

export const Uls = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 521px){
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
    }
`

export const Contato = styled.ul`
    width: 250px;
    margin-right: 8em;

    h4{
        font-weight: 600;
    }

    @media screen and (max-width: 1033px){
        margin-right: 4em;
    }

    @media screen and (max-width: 521px){
        margin-right: 0em;
        padding: 0;
        margin-bottom: 3em;
    }
`

export const ContatoItem = styled.li`
    list-style: none;
`

export const HorarioInfo = styled.div`
    display: flex;
`

export const Horario = styled.div`
    width: 300px;
    h4{
        font-weight: 600;
    }

    @media screen and (max-width: 1033px){
        width: 200px;
    }
`

export const HorariosItem = styled.li`
    list-style: none;
    display: flex;
    padding: 0;
`

export const HorariosItemDia = styled.ul`
    margin-right: 2em;
    padding: 0;
`

export const HorariosItemHora = styled.ul`
    padding: 0;
`