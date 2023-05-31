import axios from "axios";

export const getJourneys = async () => {
  const response = await axios.get("http://localhost:3000/api/journeys");
  return response.data;
};
