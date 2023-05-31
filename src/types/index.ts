export type Journey = {
  id: number;
  departureTime: Date;
  returnTime: Date;
  departureStation: Station;
  returnStation: Station;
  coveredDistanceInMeters: number;
  durationInSeconds: number;
};

export type Station = {
  id: number;
  fid: number;
  stationId: number;
  name: string;
  nameSwe: string;
  nameEn: string;
  address: string;
  addressSwe: string;
  city: string | null;
  citySwe: string | null;
  operator: string | null;
  capacity: number;
  latitude: number;
  longitude: number;
  totalJourneysDeparting: number;
  totalJourneysReturning: number;
};
