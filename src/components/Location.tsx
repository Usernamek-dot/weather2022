import { WeatherData } from "../models/WeatherData";
export const Location = ({
  data: { city, country },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <div className="flex flex-row justify-between ">
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-yello-700">
          {city}
        </h3>
        <p className="text-gray-600 text-xs">{country} </p>
      </div>
    </>
  );
};
