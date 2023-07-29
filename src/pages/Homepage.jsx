import Search from "../components/Search";
import FilterCountries from "../components/FilterCountries";
import CountriesList from "../components/CountriesList";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }}>
      <div className="md:flex md:items-center md:justify-between">
        <Search />
        <FilterCountries />
      </div>
      <CountriesList />
    </motion.div>
  );
};

export default HomePage;
