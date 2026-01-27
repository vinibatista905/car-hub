import { SearchBar, CustomFilter, CarCard } from "@/components";
import { CarProps, FilterProps } from "@/types";
import { fetchCars, mockMpgFromKey } from "@/utils";

export default async function CarCatalogue({
  params,
}: {
  params: FilterProps;
}) {
  const allCars = await fetchCars({
    manufacturer: params.manufacturer || "",
    model: params.model || "",
    limit: params.limit,
    fuel: params.fuel,
    year: params.year,
  });
  console.log("🚗 carros:", allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  const carsWithMock = allCars?.map((car: CarProps) => ({
    ...car,
    mock_city_mpg: mockMpgFromKey(`${car.make}-${car.model}-${car.year}`),
  }));

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {carsWithMock?.map((car: CarProps, index: number) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          {/* <p>{allCars?.message}</p> */}
        </div>
      )}
    </div>
  );
}
