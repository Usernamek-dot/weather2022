import { FormEvent, useEffect, useRef, useState } from "react";

export const Search = ({
  handleSearch,
}: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };
  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("");
      }}
      id="form"
    >
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <input
            ref={inputRef}
            value={search}
            onChange={handleChange}
            autoComplete="off"
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
            id="search"
            placeholder="Search place"
          />
        </div>
      </div>
    </form>
  );
};
