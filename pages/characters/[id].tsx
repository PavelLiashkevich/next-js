import { API } from "../../assets/api/api"
import {
    CharacterType,
} from "../../assets/api/rick-and-morty-api"
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout"
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
    const { results } = await API.rickAndMorty.getCharacters()

    const paths = results.map(character => ({
        params: {id: String(character.id)},
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

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

    if(router.isFallback) return <h1>Loading...</h1>

    return (
        <PageWrapper>
            <CharacterCard key={character.id} character={character} />
        </PageWrapper>
    )
}

Character.getLayout = getLayout

export default Character
