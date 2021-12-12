import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {

    const data = useStaticQuery(graphql`
    query {
        alldata {
            headers {
                title
                menu
              }
        }
      }
    `)

    const {title, menu} = data.alldata.headers[0]
    

    return (
        <div >
            <S.Container >
                
                <div >
                    <Link to="/">
                        <S.Logo>{title.slice(0,7)}<span style={{color:'#fff'}}>{title.slice(7,12)}</span></S.Logo>
                    </Link>
                </div>
                <S.MenuBox >
                    {menu.map((category, index) => (
                        <S.Nav key={index} to={`/${category}`}>
                            <S.BtnMenu key={index} >{category}</S.BtnMenu>
                        </S.Nav>
                        
                    ))}    
                </S.MenuBox>
            </S.Container>
        </div>
    )
}
/* <Link key={index} href={`/category/${category}`}></Link> */