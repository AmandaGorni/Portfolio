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
// export const TitleBox = styled.div``

// export const TextBox = styled.div`
// line-height: 3vh;
// height: 70%;
// p{
//     margin-top: 1em;
//     letter-spacing: 1px;
// }
// `

// export const Title = styled.h2`
//   font-size:3em;
//   text-transform: uppercase;  
//   letter-spacing: .3rem;
// `
export const ContainerBox = styled.div`
    position:relative;
    /* border:2px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    /* padding: 30px 20px 10px; */
`

export const Card = styled.div`
/* border:2px solid blue; */
    max-width:300px;
    /* height:420px; */
    height: 180px;
    background: #fff;
    margin:30px 10px;
    padding: 20px 15px;
    display: flex;
    border-radius:4px;
    flex-direction:column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    &:hover{
        height: 320px;
    }
`

export const ImgBox = styled.picture`
    position: relative;
    background: #fff;
    bottom: 40px;
    left: 3px;
    min-width:initial;
    width: 260px;
    height: 260px;
    border-radius: 4px;
    z-index:1;
    box-shadow: 0 5px 20 px rgba(0, 0, 0, 0.2);
    img{
        max-width:100%;
        border-radius:4px;
    }
`

export const Content = styled.div`
/* border:2px solid green; */
    position: relative;
    /* margin-top: -140px; */
    /* padding: 10px 15px; */
    text-align:center;
    
    visibility: hidden;
    opacity:0;
    transition: 0.3s ease-in-out;
    transition-delay: 0s;
    ${Card}:hover &{
        visibility: visible;
        opacity: 1;
        margin-top:5px;
        transition-delay: 0.2s;
        
    }
`