import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { searchStyles } from "../Select-custom-Styles/SearchSelect";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../store/CountriesSlice";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const searchCountry = useSelector((state) => state.countries.countriesData);

  const option = searchCountry.map((country) => {
    return {
      value: country.name.common,
      label: country.name.common,
    };
  });

  const searchCountryHandler = (searchData) => {
    const countryName = searchData.value;
    setVal(countryName);

  };

  const inputValueHandler = (e) => {
    e.preventDefault();
    if (val.trim() === "") return;
    dispatch(countriesActions.searchCountry(val));
  };

  return (
    <form
      className="bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.1)] py-2 px-4 rounded-md flex space-x-3 md:py-1 md:w-[44%] lg:w-1/3 dark:bg-[hsl(209,23%,22%)]"
      onSubmit={inputValueHandler}
    >
      <button>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="sm"
          style={{ color: "#b3b3b3" }}
        />
      </button>
      <Select
        options={option}
        placeholder="Search for a country..."
        isSearchable={true}
        styles={searchStyles}
        onChange={searchCountryHandler}
      />
    </form>
  );
};

export default Search;
