import axios from "axios";

export const getStations = async () => {
  const response = await axios.get("http://localhost:3000/api/stations");
  return response.data;
};
