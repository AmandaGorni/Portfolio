import styled from "styled-components";


export const Container = styled.section`
    max-width: 1440px;
    margin:auto;
    height: 89vh;
`
export const Wrapper = styled.div`   
    height: 100%;
    background: linear-gradient(black, black), url(${props => props.backImg}) no-repeat right;
    background-size:contain;
    background-blend-mode: saturation;
    @media (max-width: 966px) {
        background: linear-gradient(black,black);
    }
`
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 50%;
margin-left:50px;
font-size: 40px;
height: 100%;
letter-spacing: 1px;
text-align:justify;
@media (max-width: 966px) {
    width: 80%;
    }
`

export const Title = styled.h1`
    font-size: 100px;
`
