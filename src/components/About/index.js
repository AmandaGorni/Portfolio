import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

import Carousel from 'nuka-carousel';

export default function AboutMe() {
 
  const settings = {
    
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    swiping: true,
    transitionMode: 'scroll',
    widthMode: 'current',
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 8000,
    pauseOnHover: true,   

  }
  const data = useStaticQuery(graphql`
    query{
        alldata{
            abouts {
                img {
                  url
                }
                title
                paragraph
              }
        }
    }
    `)

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContainerBox>
        <Carousel {...settings}>
            {data.alldata.abouts.map((item, i) => (
                <S.Card key={i}>
                <S.Front>
                  <img src={item.img.url}/>
                </S.Front>
                <S.Back>
                <S.Content>
                  <h2>{item.title}</h2>
                  <p>{item.paragraph}</p>
                </S.Content>
                </S.Back>
              </S.Card>
            )  )}
            </Carousel>
        </S.ContainerBox>
      </S.Wrapper>
    </S.Container>
  );
}
