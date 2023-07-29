import { createSlice } from "@reduxjs/toolkit";
import countryByDefault from "./defaultCountry.json";

export const countriesSlice = createSlice({
  name: "CountriesList",
  initialState: {
    countriesData: [],
    filterRegion: null,
    searchCountry: null,
    countryDetail: countryByDefault[0],
    countryCurrency: "",
    countryNativeName: "",
  },
  reducers: {
    fetchCountries(state, action) {
      state.countriesData = action.payload;
    },
    filterByRegion(state, action) {
      state.searchCountry = null;
      const region = action.payload;
      state.filterRegion = state.countriesData.filter(
        (country) => country.region === region
      );
    },
    searchCountry(state, action) {
      const countrySearchName = action.payload;
      state.searchCountry = state.countriesData.filter(
        (country) => country.name.common === countrySearchName
      );
    },
    showDetail(state, action) {
      const country = action.payload;
      state.countryDetail = country;

      if (country.currencies) {
        const { currencies } = country;
        const countryCurrency = Object?.keys(currencies);
        const currencyCode = countryCurrency?.[0];
        const { [currencyCode]: currency } = currencies;
        state.countryCurrency = currency;
      } else {
        state.countryCurrency = "";
      }

      if (country.name.nativeName) {
        const native = country.name.nativeName;
        const nativeName = Object.keys(native)[0];
        const { [nativeName]: countryNameNative } = native;
        state.countryNativeName = countryNameNative;
      } else {
        state.countryNativeName = "";
      }
    },
  },
});

export const countriesActions = countriesSlice.actions;
