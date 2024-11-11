import styled from "styled-components"
import { NextPage } from "next"
import { PropsWithChildren } from "react"
import { Header } from "../Header/Header"

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <StyledContainer>
      <Header />
      <Main>{children}</Main>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const Main = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;
`
