import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants/constants";
import { fetchCars } from "@/utils";

export default async function Home( { searchParams }: any) {
  const allCars = await fetchCars({ 
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className = "overflow-hidden">
      <HeroSection/>

      <div className = "mt-12 padding-x padding-y max-width" id = "discover">
        <div className = "home__text-container">
          <h1 className = "text-4xl font-extrabold">Car Catalogue</h1>
          <p className = "text-gray-500">Explore the cars you might like</p>
        </div>

        <div className = "home__filters">
          <SearchBar/>

          <div className = "home__filter-container">
            <CustomFilter title = "fuel" options = {fuels}/>
            <CustomFilter title = "year" options = {yearsOfProduction} />
          </div>
        </div>

      {!isDataEmpty ? (
        <section>
          <div className = "home__cars-wrapper">
            {allCars?.map((car) => {
              return (
                <CarCard
                  car = {car}
                />
              )
            })}
          </div>
        </section>
      )
      : 
      (
        <div className = "home__error-container">
          <h2 className = "text-black text-xl font-bold">Oops, no results.</h2>
          <p>{allCars?.message}</p>
        </div>
      )}

      </div>
    </main>
  )
}
