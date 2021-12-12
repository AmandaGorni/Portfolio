import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

import Carousel from 'nuka-carousel';

export default function AboutMe() {

  const settings = {
    
    slidesToShow : 3,
    slidesToScroll : 1,
    speed : 500,
    swiping : true,
    transitionMode : 'scroll',
    widthMode : 'current',
    wrapAround : true,
    autoplay : true,
    autoplayInterval : 3000,
    pauseOnHover : true,    
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

    // const {img, title, paragraph} = data.alldata.abouts;
    
    return (
        <>
        {/* <S.Content>
            <S.ContentBox>
                <S.TitleBox>
                <S.Title>Amanda</S.Title>
                <h5>Front-End Developer</h5>
                </S.TitleBox>
                <S.TextBox>
                <p>    Estudante eterna de tudo que me interessar pela vida. </p>
                <p>  Amo desafios, sou determinada ao extremo e auto-crítica também. Minhas inseguranças e meus medos me frustam e me machucam as vezes, mas não me paralisam, afinal se quero alcançar o que ninguém alcança, tenho que fazer o que ninguém faz. Romântica e brincalhona, não poderia deixar de amar séries coreanas, turcas, chinesas e mexicanas. </p>
                <p>  </p>
                </S.TextBox>
            </S.ContentBox>
        </S.Content> */}
        <S.Container>
          <S.Wrapper>
          <S.ContainerBox>
          <Carousel {...settings}>
            {data.alldata.abouts.map((item, i) => (
                <S.Card key={i}>
                <S.ImgBox>
                  <img src={item.img.url}/>
                </S.ImgBox>
                <S.Content>
                  <h2>{item.title}</h2>
                  <p>{item.paragraph}</p>
                </S.Content>
              </S.Card>
            )

            )}
            </Carousel>
            </S.ContainerBox>
            </S.Wrapper>
      {/* <S.Card>
        <S.Imgbox>
          <img></img>
        </S.Imgbox>
        <S.Content>
          <h2></h2>
          <p></p>
        </S.Content>
      </S.Card>
      <S.Card>
        <S.Imgbox>
          <img></img>
        </S.Imgbox>
        <S.Content>
          <h2></h2>
          <p></p>
        </S.Content>
      </S.Card>
      <S.Card>
        <S.Imgbox>
          <img></img>
        </S.Imgbox>
        <S.Content>
          <h2></h2>
          <p></p>
        </S.Content>
      </S.Card> */}
    </S.Container>
        </>
    )
}
