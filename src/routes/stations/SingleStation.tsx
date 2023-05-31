import { useLoaderData } from "react-router-dom";
import { Station } from "../../types";


export default function SingleStation() {
  const station = useLoaderData() as Station
  return (
    <div className="min-h-screen">
    <p className="text-2xl">{station.name}</p>
    <p className="text-slate-500">{station.address}</p>
    <p>Total journeys departing from this station: {station.totalJourneysDeparting}</p>
    <p>Total journeys returning to this station: {station.totalJourneysReturning}</p>
    </div>
  )
}