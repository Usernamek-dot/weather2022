import { WeatherContainer } from "./components/WeatherContainer";

export const App = () => {
  return (
    <>
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-5 text-stone-700">
        Weather App 💛
      </h1>
      <WeatherContainer />
    </>
  );
};
