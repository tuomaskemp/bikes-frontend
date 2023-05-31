import { useLoaderData } from "react-router-dom"
import { Journey } from "../types"

export default function Root() {
    const journeys = useLoaderData() as Journey[]
  return (
    <>
    {journeys.map(journey => (
        <p key={journey.id}>Departure: {journey.departureStation.name} Return: {journey.returnStation.name}</p>
    ))}
    </>
  )
}