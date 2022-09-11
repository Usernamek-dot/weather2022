const API_KEY = "4735a3d53eb8b62853d0bf1b61da29cf";

export const getWeatherCoordinates = async (
  LAT: number,
  LON: number
): Promise<any> => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

  const respCoordinates = await fetch(API_URL);
  const dataCoordinates = await respCoordinates.json();
  return dataCoordinates;
};
export const getWeatherSearch = async (CITY: string): Promise<any> => {
  const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid={API_KEY}`;
  const respCity = await fetch(API_CITY);
  const dataCity = await respCity.json();
  return dataCity;
};
