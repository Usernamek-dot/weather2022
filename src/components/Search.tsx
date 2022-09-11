export const Search = () => {
  return (
    <form>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <input
            type="search"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-stone-800 bg-clip-padding
        border border-solid border-stone-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-stone-700 focus:bg-stone-400 focus:border-stone-600 focus:outline-none
      "
            id="exampleSearch"
            placeholder="Search place"
          />
        </div>
      </div>
    </form>
  );
};
