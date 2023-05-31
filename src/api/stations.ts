import axios from "axios";

export const getStations = async () => {
  const response = await axios.get("http://localhost:3000/api/stations");
  return response.data;
};

export const getSingleStation = async (id: string | undefined) => {
  const response = await axios.get(`http://localhost:3000/api/stations/${id}`);
  return response.data;
};
