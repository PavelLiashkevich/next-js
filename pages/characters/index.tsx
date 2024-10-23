import { API } from "assets/api/api"
import { CharacterType, ResponseType } from "assets/api/rick-and-morty-api"
import { CharacterCard } from "components/Card/CharacterCard/CharacterCard"
import { PageWrapper } from "components/PageWrapper/PageWrapper"
import { getLayout } from "components/Layout/BaseLayout/BaseLayout"

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()
  return {
    props: {
      characters,
    },
  }
}

type PropsType = {
  characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {
  const { characters } = props

  const charactersList = characters.results.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ))

  return <PageWrapper title="Characters">{charactersList}</PageWrapper>
}

Characters.getLayout = getLayout

export default Characters
