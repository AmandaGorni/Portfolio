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
export const Card = styled.div`
    width: 360px;
    height: 550px;
    padding: 5px 20px 30px 20px;
    border-radius: 5px;
    background-color: #31394d;
    box-shadow: 3px 3px 5px 0 #31394d70;
    transition: 500ms;
    &:hover{
        transform: scale(1.01);
        box-shadow: 10px 10px 10px 5px #31394d30;
    }
`
export const Top =styled.div`

  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  height: 50%;
  padding: 10px;
  border-bottom: solid 1px #ffffff50;
  img{
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  transition: 700ms;
  filter: grayscale(0.3);

  &:hover{
    filter: brightness(1.05);
    transform: scale(1.1);
    }
  }
  h2{
      font-size:clamp (20px, 2vw,30px)
  }
  button{
  border: none;
  background: linear-gradient(45deg, rgb(112, 69, 151), rgb(233, 79, 220));
  padding: 9px 40px;
  border-radius: 20px;
  color:#fff;
  font-size: 20px;
  box-shadow: 2px 2px 3px 0 #00000070;
  transition: 300ms;
  cursor:pointer;
  &:hover{
    box-shadow: 5px 5px 10px 0 #00000050;  
    }
  }
`
export const Bottom =styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 5px;
`
export const Social = styled.div`
    display: grid;
    place-items: center;
    a{
    border-radius: 50%;
    padding: 12px;
    display: grid;
    place-items: center;
    background: linear-gradient(45deg, rgb(33, 102, 122), rgb(192, 154, 228));
    transition: 300ms;

    &:hover{
    transform: rotate(-10deg);
    filter: brightness(1.1);  
        }
    }
    img{
    width: 35px;
    filter: invert(1);
    }
`
export const Title = styled.h2`
  font-size:3em;
  text-transform: uppercase;  
  letter-spacing: .3rem;
`
export const ContentIcon =styled.div`
    display: flex;
    justify-content:space-between;
    a{
    border-radius: 50%;
    padding: 22px;
    background: linear-gradient(45deg, rgb(33, 102, 122), rgb(192, 154, 228));
    transition: 300ms;

    &:hover{
    transform: rotate(-10deg);
    filter: brightness(1.1);  
        }
    }
    img{
    width: 42px;
    height: 42px;
    }
`