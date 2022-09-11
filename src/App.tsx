import { useEffect, useState } from "react";
import { getWeatherCoordinates } from "./api/fetchWeather";
import { Sidebar } from "./components/Sidebar";
import { WeatherContainer } from "./components/WeatherContainer";
export const App = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.latitude;
      try {
        const data = await getWeatherCoordinates(LAT, LON);
        setFetchedData(data);
      } catch (err) {
        setError("error message");
      }
    });
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <aside className="h-screen sticky top-0">
          <Sidebar setFetchedData={setFetchedData} setError={setError} />
        </aside>
        <main>
          <WeatherContainer fetchedData={fetchedData} error={error} />
        </main>
      </div>
    </>
  );
};

{
  /* <Sidebar />
<WeatherContainer fetchedData={fetchedData} error={error} /> */
}
