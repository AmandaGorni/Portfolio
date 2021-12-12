import styled from "styled-components";
import backCont from "../../images/backCont.jpeg"

export const Content = styled.section`
    position: relative;
    height: 89vh;
    animation: back 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    &::after{
    content: "";
    background: url(${backCont}) center;
    background-size: cover;
    opacity: .7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }

    @keyframes back {
    0% {
        transform: translateX(-100px);
        opacity: 0;
        
    }
    100% {
        transform: translateX(0);
    
    }
}
`
export const ContentBox = styled.div`
    position:relative;
    padding: 2rem;
    width: 50%;
    height: 100%;
    float: left;
    color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align:justify;
    transition: 800ms ease all;
    animation: textback 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
    @media only screen and (max-width: 807px) {
      width: 100%;  
      padding: 1.5rem;
      justify-content:center ;
    }
    &::after{
    content: "";
    background: #d87093;
    opacity: .7;  
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }
    @keyframes textback {
    0% {
        transform: translateX(-300px);
        opacity: 0;
        
    }
    100% {       
        transform: translateX(0);
    }
}
    
`
export const TitleBox = styled.div``

export const TextBox = styled.div`
line-height: 3vh;
height: 70%;
p{
    margin-top: 1em;
    letter-spacing: 1px;
}
`

export const Title = styled.h2`
  font-size:3em;
  text-transform: uppercase;  
  letter-spacing: .3rem;
`