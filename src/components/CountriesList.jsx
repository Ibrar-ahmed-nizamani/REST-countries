import { useEffect, useState } from "react";
import Country from "./Country";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../store/CountriesSlice";
import Spinner from "../UI/Spinner";

const CountriesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries.countriesData);
  const filterByRegion = useSelector((state) => state.countries.filterRegion);
  const searchedCountry = useSelector((state) => state.countries.searchCountry);

  const fetchCountry = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) {
        throw new Error("Could not fetch countries. Try reloading the page.");
      }
      const data = await res.json();

      dispatch(countriesActions.fetchCountries(data));
      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!countriesData.length) {
      fetchCountry();
    }
  }, []);

  const mapCountryToComponent = (country, index) => (
    <Country
      key={index}
      flag={country.flags.png}
      region={country.region}
      population={country.population}
      countryName={country.name.common}
      capital={country.capital?.[0]}
      countryDetail={country}
    />
  );

  let countriesList = countriesData.map(mapCountryToComponent);

  if (filterByRegion) {
    countriesList = filterByRegion.map(mapCountryToComponent);
  }

  if (searchedCountry) {
    countriesList = searchedCountry.map(mapCountryToComponent);
  }

  return (
    <main className="flex justify-center flex-wrap py-8 gap-y-8 md:gap-y-12 sm:gap-x-8 md:gap-x-4 md:justify-between">
      {isLoading && <Spinner />}
      {error && countriesData.length === 0 && <p>{error.message}</p>}
      {countriesList}
    </main>
  );
};

export default CountriesList;
