import { API } from "../../assets/api/api"
import { CharacterType } from "../../assets/api/rick-and-morty-api"
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import styled from "styled-components"

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters()

  const paths = results.map((character) => ({
    params: { id: String(character.id) },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {}

  const character = await API.rickAndMorty.getCharacter(id as string)

  if (!character) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      character,
    },
  }
}

type PropsType = {
  character: CharacterType
}

const Character = (props: PropsType) => {
  const { character } = props

  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>

  const { id } = router.query

  return (
    <PageWrapper>
      <Container>
        <StyledIdText>ID: {id}</StyledIdText>
        <CharacterCard key={character.id} character={character} />
        <StyledButton onClick={() => router.push("/characters")}>
          Go to characters
        </StyledButton>
      </Container>
    </PageWrapper>
  )
}

Character.getLayout = getLayout

export default Character

const StyledIdText = styled.div`
  font-size: 35px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`

const StyledButton = styled.button`
  width: 330px;
  height: 60px;
  border-radius: 4px;
  border: none;
  background: #6767df;
  font-size: 20px;
  transition: all 0.3s ease;
  &:hover {
    background: #2b2bc9;
    color: white;
    cursor: pointer;
  }
`
