export const secondsToMinutes = (seconds: number) => {
  const date = new Date();
  date.setSeconds(seconds);
  const minutes = date.getMinutes();
  return minutes;
};

export const metersToKilometers = (meters: number) => {
  if (meters < 1) {
    return;
  } else {
    return meters / 1000;
  }
};
