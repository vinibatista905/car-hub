import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string | null;
  setManufacturer: (manufacturer: string | null) => void;
}

export interface SearchButtonProps {
  otherClasses: string;
}

export interface FilterProps {
  manufacturer?: string;
  model?: string;
  fuel?: string;
  year?: number;
  limit?: number;
}

export interface CarProps {
  city_mpg: number;
  mock_city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}