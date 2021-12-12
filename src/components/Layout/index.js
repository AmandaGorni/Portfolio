import React from 'react'
import Navbar from '../Nav/Navbar'
import GlobalStyle from '../globalstyle'

import * as S from './styles'

export default function Layout({ children }) {
    return (
        <S.Sidebar>
            <S.Wrapper>
                <S.Content>
                    <Navbar />
                    <S.ContentBox>
                        {children}
                    </S.ContentBox>
                    <S.Copyright>
                    <p>Copyright 2021 Blog Amanda Gorni</p>
                </S.Copyright>
                </S.Content>
                
            </S.Wrapper>
            <GlobalStyle />
        </S.Sidebar>
    )
}
