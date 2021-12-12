import styled from "styled-components";


export const Container = styled.section`
    max-width: 1440px;
    margin:auto;
    height: 90vh;
    /* border:1px solid red; */
`

export const Wrapper = styled.div`
    
    height: 100%;
    background: linear-gradient(black, black), url(${props => props.backImg}) no-repeat right;
    background-size:contain;
    background-blend-mode: saturation;
    
`
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 50%;
/* border:1px solid white; */
font-size: 30px;
height: 100%;
letter-spacing: 1px;
text-align:justify;
`

export const Title = styled.h1`
    font-size: 100px;
`
