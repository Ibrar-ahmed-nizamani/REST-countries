import Select from "react-select";
import { filterStyles } from "../Select-custom-Styles/filterSelect";
import { useDispatch } from "react-redux";
import { countriesActions } from "../store/CountriesSlice";

const option = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const FilterCountries = () => {
  const dispatch = useDispatch();

  const selectedValueHandler = (selectedOption) => {
    dispatch(countriesActions.filterByRegion(selectedOption.value));
  };

  return (
    <div className="w-40 mt-9 text-xs font-medium md:mt-0 dark:bg-[hsl(209,23%,22%)]">
      <Select
        options={option}
        placeholder="Filter by Region"
        isSearchable={false}
        styles={filterStyles}
        onChange={selectedValueHandler}
      />
    </div>
  );
};

export default FilterCountries;
