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
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Detail
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="humidity"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Humidity
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {humidity}
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="feels"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Feels
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {feels}
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="pressure"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Pressure
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {pressure}
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="windSpeed"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Wind
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {windSpeed}
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="visibility"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Visibility
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {visibility}
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="longitude"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Longitude
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {longitude}
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>

                  <td
                    id="latitude"
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Latitude
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {latitude}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
