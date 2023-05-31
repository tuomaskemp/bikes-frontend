import { getJourneys } from "../../api/journeys";

export async function journeyLoader() {
  const journeys = await getJourneys();
  return journeys;
}
