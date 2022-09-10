import { WeatherData } from "../models/WeatherData";

export const Temperature = ({
  data: { temperature, description, icon },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <section>
        <img id="idImgTemperature" src={icon} />
      </section>
      <section>
        <div id="IdTemperature">
          {temperature} <span>°C</span>
        </div>
      </section>
      <section>
        <p id="idDescription" className="text-gray-700 text-base mb-4">
          {description}
        </p>
      </section>
    </>
  );
};
