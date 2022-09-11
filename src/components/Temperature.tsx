import { WeatherData } from "../models/WeatherData";

export const Temperature = ({
  data: { temperature, description, icon },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <section className="flex flex-row m-4">
        <img id="iconImg" src={icon} />
        <div id="IdTemperature">
          <p id="idDescription" className="text-stone-300 text-base mb-4">
            {temperature} <span>°C</span>
          </p>
        </div>
        <p id="idDescription" className="ml-3 text-stone-300 text-base mb-4">
          {description}
        </p>
      </section>
    </>
  );
};
