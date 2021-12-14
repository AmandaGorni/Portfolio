import styled from "styled-components";
import { Link } from "gatsby";


export const Container = styled.section`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content:space-between;
  width: 100%;
  height: 8vh;
  
`
export const Logo = styled.h2`
  font-size:50px;
  letter-spacing: 2px;
  
`

export const MenuBox = styled.div`
 width: 31em;
 display: flex;
 justify-content: space-between;
`
export const Nav = styled(Link)`
`
export const BtnMenu = styled.button`
   background-color: transparent;
    /* background-image: linear-gradient(to top, #cd3273, #b02765, #931d56, #781247, #5e0838); */
    
    color: #fff;
    border: none;
    border-radius: 10px;
    position: relative;
    height: 100%;
    width: 100%;
    font-size: 24px;
    letter-spacing: 1px;
    padding: 0 2em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    
  &:hover {
    
    color: #B50A56;  
    
  }
  &:before, &:after{
    content: "";
     position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #B50A56;
    transition: 400ms ease all;
  }
  &:after{
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:after,
  &:hover:before{
    width: 100%;
    transition: 800ms ease all;
  }
`