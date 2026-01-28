import { SearchButtonProps } from "@/types";
import Image from "next/image";

const SearchButton = ({ otherClasses, disabled }: SearchButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        -ml-3 z-10
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${otherClasses}
      `}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className={`object-contain ${disabled ? "animate-pulse" : ""}`}
      />
    </button>
  );
};

export default SearchButton;
