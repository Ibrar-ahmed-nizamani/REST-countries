import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./CountriesSlice";

const Store = configureStore({
  reducer: { countries: countriesSlice.reducer },
});

export default Store;
