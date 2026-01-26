export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "51c39c680bmsh2efd6df21f285c3p18d655jsnb7370bbcc452",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    },
  );

  const result = await response.json();

  return result;
};

export const calculateCarRent = (year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Random city MPG between 10 and 40
  const randomCityMpg = Math.floor(Math.random() * (40 - 10 + 1)) + 10;

  // Calculate additional rate based on mileage and age
  const mileageRate = randomCityMpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

