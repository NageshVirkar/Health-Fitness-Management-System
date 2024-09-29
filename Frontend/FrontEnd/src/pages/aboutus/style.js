import styled from 'styled-components'

export const All = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const SearchArea = styled.div`
    width: 100%;
    margin: 2em auto;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #444;
    position: relative;
    overflow: hidden;
    padding: .5em 1em;
    

    h1{
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        text-shadow:  0 0 10px #ffffff50;
    }

    svg{
        @media screen and (max-width: 640px) {
            display: none;
        }
    }

    div{
        width: 100%;
        max-width: 400px;
    }
`

export const Aviso = styled.div`
    width: 100%;
    height: 100%;
    background: #a3002260;
    position: absolute;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    font-size: 30px;
    display: ${props=>props.ina ? 'flex' : 'none'};
    font-weight: 700;
    text-shadow: 0 0 10px #ffffff75;
`

export const ItemValor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    justify-content: center;
    width: 65%;
    height: 65px;
    margin-top: -65px;
    border-radius: 5px;
    background: ${props=>props.ina ? '#eee' : '#ff0022'};
    box-shadow: ${props=>props.ina ? '#ffffff75' : '#ff002275'};
    font-weight: 500;

    p{
        margin: 0;
        color: ${props=>props.ina ? '#ff0022' : '#fff'};
    }
`

export const Valor = styled.p`
    font-size: 22px;
    font-weight: 600;
    text-shadow: 0 0 10px #ffffff50;
`

export const Cidade = styled.p`
    font-size: 22px;
    font-weight: 600;
    text-shadow: 0 0 10px #ffffff50;
    letter-spacing: 1px;
    margin: 0;
`

export const ItemDesc = styled.p`
    opacity: 50%;
    text-shadow: 0 0 10px #ffffff50;
    width: 90%;
    text-align: center;
    margin: 0;
`

export const Button = styled.button`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=>props.ina ? '#eee' : '#ff0022'};
    box-shadow: ${props=>props.ina ? '#eeeeee75' : '#ff002275'};
    text-shadow:${props=>props.ina ? '#ff002275' : '#0 0 10px #ffffff575'};
    color: ${props=>props.ina ? '#ff0022' : '#eeeeee'};
    font-size: 20px;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    letter-spacing: 1px;
    transition: all ease-in-out .2s;

    &:hover{
        transform: scale(1.05);
        transition: all ease-in-out .2s;
    }
`
// ... your existing styled components

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
export const AboutContent = styled.div`
  width: 80%;
  margin: 20px auto;
  text-align: center;
  line-height: 1.6;

  p {
    margin-bottom: 20px;
  }
`;

// ... your remaining styled components
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
// ... other styled components

export const Container = styled.div`
  width: 100%; /* Set the width to 100% to ensure it takes the full width of the parent container */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1em 0;
  overflow-x: auto; /* Enable horizontal scrolling if the content overflows */
`

export const Item = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  margin: 1.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #444;
  overflow: hidden;
  padding-bottom: 1em;
  box-shadow: ${props => (props.ina ? '0 0 15px  #ff0022' : '')};
  background: linear-gradient(
    45deg,
    ${props => (props.ina ? '#ff0022' : '#444')} 0%,
    ${props => (props.ina ? '#a30000' : '#444')} 100%
  );
`

export const ItemNome = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-shadow: 0 0 10px #ffffff50;
  margin: 0;
`;

// ... your remaining styled components
