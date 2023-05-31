import { LoaderFunctionArgs } from "react-router-dom";
import { getSingleStation, getStations } from "../../api/stations";

export async function stationsLoader() {
  const stations = await getStations();
  return stations;
}

export async function singleStationLoader({ params }: LoaderFunctionArgs) {
  const singleStation = await getSingleStation(params.stationId);
  return singleStation;
}
