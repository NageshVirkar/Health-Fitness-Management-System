import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em 1em;
    top: 0;
    z-index: 100;
    position: relative;
    
    a{
        color: inherit; 
        text-decoration: none;
    }

    @media only screen and (max-width: 425px){
        padding: .5em;
    }
`

export const BackNav = styled.div`
    width: 100%;
    height: 100vh;
    background: #00000095;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props=>props.show ? 'block' : 'none'};
`

export const NavImg = styled.img`
    height: 60px;

    @media only screen and (max-width: 425px){
        height: 50px;
    }
`

export const NavItems = styled.ul`
    display: inline-flex;
    align-items: center;
    margin: 0;
    z-index: 101;

    li{
        text-shadow: 0 0 10px #e7e7e775;
        padding: .8em;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border-bottom: solid 0px #ff002200;
        transition: all ease .3s;
        margin: 0;

        &:hover{
            border-bottom: solid 3px #ff0022;
            transition: all ease .3s;
        }

        @media only screen and (max-width: 1162px){
            padding: 1em 0;
            font-size: 20px;

            &:hover{
                background: #a30022;
                border: 0;
                transition: all ease .3s;
            }
        }
    }

    li a{
        color: #fff;
        text-decoration: none;
    }

    @media screen and (max-width: 1162px){
        padding: 0;
        display: block;
        position: fixed;
        background: linear-gradient(45deg, #ff0000 0%, #ff0044 100%);
        top: 0;
        left: ${props=>props.showMenu ? '0' : '-100%'};
        height: 100vh;
        width: 250px;
        transition: all ease-in-out .6s;
        box-shadow: 0 0 15px #ff0022;
    }
`

export const HamburgerArea = styled.div`
    display: none;

    @media screen and (max-width: 1162px){
        display: block;
    }
`

export const NavButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 20px;
    font-weight: 600;
    padding: .5em 1em;
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 1px;
    color: #ff0022;
    text-shadow: 0 0 10px #ff002275;
    transition: all ease-in-out .3s;

    &:hover{
        transition: all ease-in-out .3s;
        color: #e7e7e7;
        text-shadow: 0 0 10px #e7e7e775;
        background: #ff0022;
        box-shadow: 2px 2px 7px #11111175;
    }

    &:active{
        transition: all ease-in-out .1s;
        transform: scale(.95);
    }
    display: block;

    @media only screen and (max-width: 1162px){
        display: none;
    }
`

export const NavButton2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    padding: 1em;
    margin: 0 auto;
    cursor: pointer;
    letter-spacing: 1px;
    color: #eee;
    text-shadow: 0 0 10px #ff002275;
    transition: all ease-in-out .3s;

    &:hover{
        background: #a30022;
        transition: all ease-in-out .3s;
        color: #e7e7e7;
        text-shadow: 0 0 10px #e7e7e775;
    }

    &:active{
        transition: all ease-in-out .1s;
        transform: scale(.95);
    }
    
    display: none;

    @media only screen and (max-width: 1162px){
        display: block;
    }
`