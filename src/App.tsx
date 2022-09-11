import { FormEvent, useEffect, useState } from "react";
import { getWeatherCoordinates, getWeatherSearch } from "./api/fetchWeather";
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

  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");
    try {
      const data = await getWeatherSearch(CITY);

      if (data === "404") {
        setError("Not found");
      } else if (data === "400") {
        setError("Type a city");
      } else {
        setFetchedData(data);
        console.log(data);
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <aside className="h-screen sticky top-0">
          <Sidebar handleSearch={handleSearch} />
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
