import React, { useState, useEffect } from "react";
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'


export default function Start() {
   
        const data = useStaticQuery(graphql`
        query {
            alldata {
                homes {
                    title
                    subtitle
                    paragraph
                    photoFace {
                      url
                    }
                  }
            }
          }
        `)
    
        const {title, subtitle, paragraph, photoFace} = data.alldata.homes[0]
        

    return (
        <div>
            <S.Container>
                <S.Wrapper backImg={photoFace.url}>
                    <S.Content>
                    <S.Title>{title.slice(0,7)}<span style={{color:'#fff'}}>{title.slice(7,12)}</span></S.Title>
                    <h4>{subtitle}</h4>
                    <p>{paragraph}</p>
                    </S.Content>
                </S.Wrapper>
            </S.Container>
        </div>
    )
}
