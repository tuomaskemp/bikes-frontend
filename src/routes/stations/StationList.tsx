import { Link, useLoaderData } from "react-router-dom"
import { Station } from "../../types"


export default function StationList() {
    const stations = useLoaderData() as Station[]
  return (
    <>
    {stations.map(station => (
        <Link key={station.id} to={`/station/${station.stationId}`} className="mb-4 flex font-bold">
            {station.name}
        </Link>
    ))}
    </>
  )
}