import { Search } from "./Search";

export const Sidebar = () => {
  return (
    <div
      className="
      fixed
 w-60 h-full shadow-md bg-stone-900 absolute"
      id="sidenavSecExample"
    >
      <div className="pt-4 pb-2 px-6">
        <a href="#!">
          <div className="flex items-center">
            <div className="shrink-0">💛</div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-stone-400">
                Weather App
              </p>
            </div>
          </div>
        </a>
      </div>
      <ul className="relative px-1">
        <li className="relative">
          <Search />
        </li>
      </ul>
      <hr className="my-2"></hr>
      <div className="text-center bottom-0 absolute w-full">
        <hr className="m-0"></hr>
        <p className="py-2 text-sm text-gray-700">tailwind-elements.com</p>
      </div>
    </div>
  );
};
