import { WeatherData } from "../models/WeatherData";
export const Location = ({
  data: { city, country },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <div className="flex flex-row justify-between ">
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-stone-400">
          {city}
        </h3>
        <p className="text-stone-300 text-xs">{country} </p>
      </div>
    </>
  );
};
