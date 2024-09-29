import styled from 'styled-components'

export const All = styled.div`
    width: 100%;
`

export const Container = styled.div`
    margin: 3em auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`

export const HeaderArea = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    top: -75px;

    h1{
        z-index: 2;
        font-size: 40px;
        font-weight: 600;
        text-shadow: 0 0 10px #ffffff50;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        opacity: 35%;
    }
`

export const Item = styled.div`
    border-radius: 5px;
    background: linear-gradient(45deg, #222 0%, #444 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    margin: 2em;
    width: 400px;
    height: 500px;
    padding-bottom: 1em;
    border: solid 3px #ff0022;
    box-shadow: 0 0 15px #ff002290;

    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    @media screen and (max-width: 850px){
        height: auto;
    }
`

export const ItemNome = styled.h2`
    font-size: 28px;
    letter-spacing: 1px;
    color: #ff0022;
    text-shadow: 0 0 10px #ff002275;
    margin: .5em auto;
`

export const ItemDesc = styled.p`
    width: 90%;
    margin: 0 auto 1em auto;
    text-align: center;
`

export const Button = styled.button`
    width: 90%;
    height: 45px;
    border: 0;
    border-radius: 5px;
    background: #ff0022;
    box-shadow: 0 0 10px #ff002275;
    text-shadow: 0 0 10px #ffffff50;
    transition: all ease-in-out .2s;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: all ease-in-out .2s;
        background: #ffffff;
        color: #ff0022;
        box-shadow: 0 0 10px #ffffff75;
        text-shadow: 0 0 10px #ff002250;
    }
`
// ... your existing styled components

export const ItemImageArea = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

// ... your remaining styled components
// ... your existing styled components

export const AboutContent = styled.div`
  width: 80%;
  margin: 20px auto;
  text-align: center;
  line-height: 1.6;

  p {
    margin-bottom: 20px;
  }
`

// ... your remaining styled components

// export const All = styled.div``
// export const All = styled.div``