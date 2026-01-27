import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";
import { FilterProps } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<FilterProps>;
}) {
  const params = await searchParams;

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue params={params} />
    </main>
  );
}
