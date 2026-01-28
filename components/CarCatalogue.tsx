import { SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
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

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  const carsWithMock = allCars?.map((car: CarProps) => ({
    ...car,
    city_mpg: mockMpgFromKey("city", car),
    combination_mpg: mockMpgFromKey("combination", car),
    highway_mpg: mockMpgFromKey("highway", car),
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
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {carsWithMock?.map((car: CarProps, index: number) => (
              <CarCard key={index} car={car} />
            ))}
          </div>

          <ShowMore
            pageNumber={(params.limit || 10) / 10}
            isNext={(params.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results found.</h2>
        </div>
      )}
    </div>
  );
}
