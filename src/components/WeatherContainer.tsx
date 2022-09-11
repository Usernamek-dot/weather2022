import { useEffect, useState } from "react";
import { Location } from "./Location";
import { Table } from "./Table";
import { Temperature } from "./Temperature";

export const WeatherContainer = ({
  fetchedData,
  error,
}: {
  fetchedData: any;
  error: string;
}) => {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    description: "",
    icon: "",
    humidity: "",
    feels: "",
    visibility: "",
    pressure: "",
    longitude: "",
    latitude: "",
    windSpeed: "",
  });

  useEffect(() => {
    if (fetchedData)
      setWeather({
        city: fetchedData.name,
        country: fetchedData.sys.country,
        temperature: Math.floor(fetchedData.main.temp - 273),
        description: fetchedData.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}.png`,
        humidity: fetchedData.main.humidity + "%",
        feels: Math.floor(fetchedData.main.feels_like - 273) + "°C",
        visibility: fetchedData.visibility + "m",
        pressure: fetchedData.main.pressure + "hPa",
        longitude: fetchedData.coord.lon,
        latitude: fetchedData.coord.lat,
        windSpeed: fetchedData.wind.speed + "m/s",
      });
  }, [fetchedData]);

  return (
    <div className="p-4  flex justify-center">
      {error === "" ? (
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-stone-600 shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt="Weather image"
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              <Location data={weather} />
            </h5>
            <Table data={weather} />
            <Temperature data={weather} />
          </div>
        </div>
      ) : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">
            Something seriously bad happened. {error}
          </span>
        </div>
      )}
    </div>
  );
};
