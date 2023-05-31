import { Link, Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
    <h1 className="text-4xl">Citybikes app</h1>
    <Link to={"/journeys"}>Journeys</Link>
    <Link to={"/stations"}>Stations</Link>
    <Outlet />
    </>
  )
}