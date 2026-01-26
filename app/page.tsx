import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
