import { WeatherData } from "../models/WeatherData";

export const Table = ({
  data: {
    humidity,
    feels,
    pressure,
    windSpeed,
    visibility,
    longitude,
    latitude,
  },
}: {
  data: WeatherData;
}) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Detail</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Humidity</td>
          <td id="humidity">{humidity}</td>
        </tr>
        <tr>
          <td>Feels</td>
          <td id="feels">{feels}</td>
        </tr>

        <tr>
          <td>Pressure</td>
          <td id="pressure">{pressure}</td>
        </tr>
        <tr>
          <td>Wind</td>
          <td id="windSpeed"> {windSpeed}</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td id="visibility"> {visibility}</td>
        </tr>
        <tr>
          <td>Longitude</td>
          <td id="longitude">{longitude}</td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td id="latitude">{latitude}</td>
        </tr>
      </tbody>
    </table>
  );
};
