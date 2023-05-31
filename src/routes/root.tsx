import { Link, Outlet } from "react-router-dom"

export default function Root() {
  return (
    <div className="bg-gray-300 p-6">
    <h1 className="text-4xl font-bold text-slate-800 py-4">Citybikes app</h1>
    <div className="flex space-x-4 mb-4 pb-1 border-b border-b-slate-400">
      <Link to={"/journeys"}>Journeys</Link>
      <Link to={"/stations"}>Stations</Link>
    </div>
    <Outlet />
    </div>
  )
}