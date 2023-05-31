import { getStations } from "../../api/stations";

export async function stationsLoader() {
  const stations = await getStations();
  return stations;
}
