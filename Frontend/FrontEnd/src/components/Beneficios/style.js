import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1em;
    margin: 5em 0;
`

export const ContainerInfo = styled.div`
    width: 950px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`

export const InfoBeneficios = styled.div`
    flex: 1;
    h2{
        font-size: 45px;
        line-height: 50px;
        font-weight: 700;
        margin: 0 auto;

        @media only screen and (max-width: 440px){
            font-size: 35px;
        }
    }
`

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1.5em 0;

    img{
        width: 35px;
        margin-right: .5em;
    }

    p{
        font-size: 20px;
        text-shadow: 0 0 10px #ffffff50;
        margin: 0;
    }
`

export const Image = styled.img`
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 1.5em;
    display: block;

    @media only screen and (max-width: 989px){
        display: none;
    }
`

export const Image2 = styled.img`
    max-width: 500px;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
    margin: 1.5em 0;
    display: none;

    @media only screen and (max-width: 989px){
        display: block;
    }
`