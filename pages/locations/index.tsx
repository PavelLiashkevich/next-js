import { API } from "../../assets/api/api"
import { LocationType, ResponseType } from "../../assets/api/rick-and-morty-api"
import { Header } from "../../components/Header/Header"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"

export const getServerSideProps = async () => {
  const locations = await API.rickAndMorty.getLocations()

  if (!locations) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        locations,
    },
  }
}

type PropsType = {
  locations: ResponseType<LocationType>
}

const Locations = (props: PropsType) => {
  const { locations } = props

  const episodesList = locations.results.map((location) => (
    <div key={location.id}>{location.name}</div>
  ))

  return (
    <PageWrapper>
      <Header />
      {episodesList}
    </PageWrapper>
  )
}

export default Locations
