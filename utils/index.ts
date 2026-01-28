import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
  const { manufacturer, model, year, fuel, limit } = filters;

  const params = new URLSearchParams();

  if (manufacturer) params.append("make", manufacturer);
  if (model) params.append("model", model);
  if (year) params.append("year", String(year));
  if (fuel) params.append("fuel_type", fuel);
  if (limit) params.append("limit", String(limit));

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${params.toString()}`,
      {
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
          "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) return [];

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (!value) {
    searchParams.delete(type);
  } else {
    searchParams.set(type, value);
  }

  const queryString = searchParams.toString();
  const newPathname = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;

  return newPathname;
};

export const calculateCarRent = (year: number, cityMpg: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = cityMpg * mileageFactor;
  const ageRate = (2024 - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const mockMpgFromKey = (type: string, car: CarProps) => {
  const key = `${type}-${car.make}-${car.model}-${car.year}`;

  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
  }

  return 10 + (Math.abs(hash) % 31);
};


