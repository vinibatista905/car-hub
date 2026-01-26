"use client";

import { SearchManufacturer } from "@/components";
import { useState } from "react";

const handleSearch = () => {};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string | null>("");

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
