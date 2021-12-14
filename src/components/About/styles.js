import styled from "styled-components";
import backAbout from "../../images/backMe.jpeg"


export const Container = styled.section`
    position: relative;
    height: 89vh;
    animation: back 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    
    &::after{
    content: "";
    background: url(${backAbout}) center;
    background-size: cover;
    opacity: .7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    /* animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940); */
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
export const Wrapper = styled.div`
    position:relative;
    padding: 3rem;
    width: 80%;
    height: 100%;
    float: left;
    color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align:justify;
    transition: 800ms ease all;
    animation: textback 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
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

export const ContainerBox = styled.div` 
  
    position:relative;
    width: 80%;
    height: 80vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
`

export const Card = styled.div`
  max-width: 1000px;
  margin:auto;
  width: 90%;
  height:70vh;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Front = styled.picture`

width: 100%;
height: 100%;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 20px;
  
  transition: transform 1s linear;
  transform: perspective(600px) rotateY(0deg);
  ${Card}:hover &{
  transform: perspective(600px) rotateY(-180deg);
}
  img {
  width: 100%;
  height: 100%;
  border-radius: 20px;

}
`
export const Back = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 20px;
  
  transition: transform 1s linear;
  background: #ececec;
  transform: perspective(600px) rotateY(180deg);
  ${Card}:hover &{
    transform: perspective(600px) rotateY(0deg);
}
`
export const Content = styled.div`
 text-align: center;
  color: #333;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`