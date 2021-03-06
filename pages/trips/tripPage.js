import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const Trip = ({ ...props }) => {
    const { trips } = props;
    const [tripList, setTripList] = useState([]);

    useEffect(() => {
        const { getTrips } = props;
        const getTripsData = getTrips();
    }, [])

    useEffect(() => {
        if (trips.length > 0) {
            setTripList(trips);
        }
    }, [trips])

    return (
        <div>
            <Head>
                <title>Trips</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Trips Page</p>
        </div>
    )
}

export default Trip;