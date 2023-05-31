import { useLoaderData } from "react-router-dom"
import { Station } from "../../types"


export default function StationList() {
    const stations = useLoaderData() as Station[]
    
  return (
    <>
    {stations.map(station => (
        <div key={station.id} className="mb-4">
            {station.name}
        </div>
    ))}
    </>
  )
}