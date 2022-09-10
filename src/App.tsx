import { useEffect, useState } from "react";
import { getWeatherCoordinates } from "./api/fetchWeather";
import { WeatherContainer } from "./components/WeatherContainer";

export const App = () => {
  const [fetchedData, setFetchecData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.latitude;
      try {
        const data = await getWeatherCoordinates(LAT, LON);
        setFetchecData(data);
      } catch (err) {
        setError("error message");
      }
    });
  }, []);

  return (
    <>
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-5 text-stone-700">
        Weather App 💛
      </h1>
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </>
  );
};
