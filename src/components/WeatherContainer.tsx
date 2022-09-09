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
        icon: ``,
        humidity: fetchedData.main.humidity + "%",
        feels: Math.floor(fetchedData.main.feels_like - 273) + "°C",
        visibility: fetchedData.visibility + "m",
        pressure: fetchedData.main.pressure + "hPa",
        longitude: fetchedData.coord.lon,
        latitude: fetchedData.wind.speed + "m/s",
        windSpeed: fetchedData.wind.speed + "m/s",
      });
  }, [fetchedData]);

  return (
    <div className="flex justify-center p-3">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-stone-500 shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <Location />
          <Table />
          <Temperature />
        </div>
      </div>
    </div>
  );
};
