import { useLoaderData } from "react-router-dom"
import { Journey } from "../types"
import { metersToKilometers, secondsToMinutes } from "../utils"

export default function Root() {
    const journeys = useLoaderData() as Journey[]
    
  return (
    <>
    {journeys.map(journey => (
        <div key={journey.id} className="mb-4">
            <p>Departure: {journey.departureStation.name}</p>
            <p>Return: {journey.returnStation.name}</p>
            <p>Covered distance: {metersToKilometers(journey.coveredDistanceInMeters)} kilometers</p>
            <p>Duration: {secondsToMinutes(journey.durationInSeconds)} minutes</p>
        </div>
    ))}
    </>
  )
}