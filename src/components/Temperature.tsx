export const Temperature = () => {
  return (
    <>
      <section>
        <img
          id="idImgTemperature"
          src="https://wallpapercave.com/rainy-weather-wallpapers"
        />
      </section>
      <section>
        <div
          id="IdTemperature"
          className="py-3 px-6 border-t border-gray-700 text-gray-600"
        >
          Temperature<span>°C</span>
        </div>
      </section>
      <section>
        <p id="idDescription" className="text-gray-700 text-base mb-4">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </section>
    </>
  );
};
