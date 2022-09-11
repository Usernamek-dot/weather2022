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
          <p id="idDescription" className="text-stone-300 text-base mb-4">
            {temperature} <span>°C</span>
          </p>
        </div>
      </section>
      <section>
        <p id="idDescription" className="text-stone-300 text-base mb-4">
          {description}
        </p>
      </section>
    </>
  );
};
