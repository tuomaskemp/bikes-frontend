import { useLoaderData } from "react-router-dom"
import { Journey } from "../../types"
import { metersToKilometers, secondsToMinutes } from "../../utils"


export default function JourneyList() {
  const journeys = useLoaderData() as Journey[]
  return (
    <>
    {journeys.map(journey => (
        <div key={journey.id} className="mb-4 p-2 bg-slate-200 rounded-lg">
            <p className="font-bold">{journey.departureStation.name} - {journey.returnStation.name}</p>
            <p>Covered distance: {metersToKilometers(journey.coveredDistanceInMeters)} kilometers</p>
            <p>Duration: {secondsToMinutes(journey.durationInSeconds)} minutes</p>
        </div>
    ))}
    </>
  )
}