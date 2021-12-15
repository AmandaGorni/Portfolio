import styled from "styled-components";


export const Container = styled.section`
    max-width: 1440px;
    margin:auto;
    height: 88vh;
    animation: back 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes back {
    0% {
        transform: translateX(-100px);
        opacity: 0;
        
    }
    100% {
        transform: translateX(0);
    
    }
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
@media (max-width: 768px) {
    font-size: 30px;
}
`

export const Title = styled.h1`
    font-size: 100px;
@media (max-width: 768px) {
    text-align:center;
}
`
