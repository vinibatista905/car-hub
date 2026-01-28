"use client";

import { SearchButton, SearchManufacturer } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState<string | null>("");
  const [model, setModel] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer == "" && model == "") {
      return alert("Please fill in the search bar");
    }

    startTransition(() => {
      updateSearchParams(manufacturer?.toLowerCase(), model.toLowerCase());
    });
  };

  const updateSearchParams = (
    manufacturer: string | null | undefined,
    model: string,
  ) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton disabled={isPending} otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model icon"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
        />

        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton disabled={isPending} otherClasses="sm:hidden" />
      </div>
      <SearchButton disabled={isPending} otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
