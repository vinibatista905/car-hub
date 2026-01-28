import { CarCatalogueSkeleton, Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";
import { FilterProps } from "@/types";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<FilterProps>;
}) {
  const params = await searchParams;

  return (
    <main className="overflow-hidden">
      <Hero />
      <Suspense fallback={<CarCatalogueSkeleton />}>
        <CarCatalogue params={params} />
      </Suspense>
    </main>
  );
}
