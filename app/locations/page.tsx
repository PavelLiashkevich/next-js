'use client'

import {LocationType} from 'assets/api/rick-and-morty-api'
import {PageWrapper} from 'components/PageWrapper/PageWrapper'
import {Card} from 'components/Card/Card'
import {useEffect, useState} from 'react';
import {Nullable} from '../../assets/types/Nullable';
import {API} from '../../assets/api/api';

const Locations = () => {

    const [locations, setLocations] = useState<Nullable<LocationType[]>>(null)

    useEffect(() => {
        API.rickAndMorty.getLocations().then(res => setLocations(res.results))
    }, [])

    if (!locations) {
        return null
    }

    const locationsList = locations.map((location) => (
        <Card key={location.id} name={location.name}/>
    ))

    return <PageWrapper title="Locations">{locationsList}</PageWrapper>
}

export default Locations
