import { useLoaderData } from "react-router-dom";
import { Station } from "../../types";


export default function SingleStation() {
  const station = useLoaderData() as Station
  return (
    <>
    <p>Name {station.name}</p>
    <p>Address {station.address}</p>
    <p>Total journeys departing to this station: {station.totalJourneysDeparting}</p>
    <p>Total journeys returning to this station: {station.totalJourneysReturning}</p>
    </>
  )
}