import { useLoaderData } from "react-router-dom"
import { Journey } from "../types"

export default function Root() {
    const journeys = useLoaderData() as Journey[]
    const secondsToMinutes = (seconds: number) => {
        const date = new Date();
        date.setSeconds(seconds);
        const minutes = date.getMinutes();
        return <>{minutes} minutes</>;
    }
    const metersToKilometers = (meters: number) => {
        if (meters < 1) {
            return;
        } else {
            return meters / 1000;
        }
    }
  return (
    <>
    {journeys.map(journey => (
        <div key={journey.id} className="mb-4">
            <p>Departure: {journey.departureStation.name}</p>
            <p>Return: {journey.returnStation.name}</p>
            <p>Covered distance: {metersToKilometers(journey.coveredDistanceInMeters)} kilometers</p>
            <p>Duration: {secondsToMinutes(journey.durationInSeconds)}</p>
        </div>
    ))}
    </>
  )
}