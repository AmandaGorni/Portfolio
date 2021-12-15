import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export default function Contact() {

    const data = useStaticQuery(graphql`
        query {
            alldata {
                contacts {
                    title
                    subtitle
                    iconName
                    mod3 {
                      url
                    }
                    midiasIcons {
                        url
                      }
                  }
            }
          }
        `)

    const { title, subtitle, iconName, midiasIcons, mod3 } = data.alldata.contacts[0]
    console.log(data)
    return (

        <S.Content>
            <S.ContentBox>
                <S.Card>
                    <S.Top>
                        <img src={mod3[3].url} alt="avatar" />
                        <h2 >{subtitle}</h2>
                        <button >{title}</button>
                    </S.Top>
                    <S.Bottom>
                        <S.Social>
                            <a
                                href="https://github.com/AmandaGorni"
                                target="_blank"
                            >
                                <img
                                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                                    alt=""
                                />
                            </a>
                        </S.Social>
                        <S.Social>
                            <a
                                href="https://www.instagram.com/amanda.dspg/"
                                target="_blank"
                            >
                                <img

                                    src={midiasIcons[2].url}
                                    alt={iconName[4]}
                                />
                            </a>
                        </S.Social>
                        <S.Social>
                            <a
                                href="https://www.linkedin.com/in/amanda-gorni-227b6940/"
                                target="_blank"
                            >
                                <img
                                    src={midiasIcons[3].url}
                                    alt={iconName[1]}
                                />
                            </a>

                        </S.Social>
                    </S.Bottom>
                    <S.ContentIcon>
                        <a  href="https://pt-br.reactjs.org/docs/getting-started.html"
                            target="_blank"  >
                            <img src={mod3[1].url} alt="" />
                        </a>
                        <a  href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                            target="_blank"  >
                            <img src={mod3[0].url} alt="" />
                        </a>
                        <a  href="https://www.gatsbyjs.com/docs/"
                            target="_blank"  >
                            <img src={mod3[2].url} alt="" />
                        </a>
                    </S.ContentIcon>
                </S.Card>
            </S.ContentBox>
        </S.Content>

    )
}