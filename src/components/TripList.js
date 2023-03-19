import React, { useEffect, useState, useCallback } from 'react'
import {useFetch} from '../hooks/useFetch'
import './TripList.css'
export default function TripList() {
    // const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data, isPending, error} = useFetch(url)

    // const fetchTrips = useCallback(async ()=>{
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     setTrips(json)
    // }, [url])

    // useEffect(()=>{
    //    fetchTrips()
    // },[url, fetchTrips])
    // console.log(trips)

  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        {isPending && <div>Loading trips...</div>}
        {error && <div>{error}</div>}
        <ul>
            {data && data.map(trip=>(
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <h3>{trip.price}</h3>
                </li>
            ))}
        </ul>
        <div className='filters'>
            <button onClick={()=> setUrl('http://localhost:3000/trips?loc=europe')}>
                European Trips
            </button>
            <button onClick={()=> setUrl('http://localhost:3000/trips')}>
                All Trips
            </button>
        </div>
    </div>
  )
}
