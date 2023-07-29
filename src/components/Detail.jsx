import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import BorderCountries from "./BorderCountries";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Detail = () => {
  const countryDetail = useSelector((state) => state.countries.countryDetail);
  const currency = useSelector((state) => state.countries.countryCurrency);
  const nativeName = useSelector((state) => state.countries.countryNativeName);

  const { languages } = countryDetail;

  const languageNames = [];

  for (const languageCode in languages) {
    const languageName = languages[languageCode];
    languageNames.push(languageName);
  }

  return (
    <div className="overflow-hidden">
      <motion.section
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        className="space-y-10 text-xs my-3 dark:text-[hsl(0,0%,98%)] min-h-full"
      >
        <Link to="/">
          <button className="bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.17)]  px-4 py-1 space-x-1 active:scale-95 hover:cursor-pointer transition-all dark:bg-[hsl(209,23%,22%)]">
            <FontAwesomeIcon icon={faArrowLeftLong} /> <span>Back</span>
          </button>
        </Link>
        <div className="flex flex-col  space-y-5 lg:flex-row lg:justify-between">
          <img
            src={countryDetail.flags.png}
            alt=""
            className="h-[240px] sm:h-[300px] sm:w-[85%] md:h-[320px] lg:h-[365px] lg:w-[43%]"
          />
          <div className="lg:w-[51%]">
            <div className="md:flex md:justify-between ">
              <div className="space-y-3 mb-4">
                <h3 className="text-lg font-bold">
                  {countryDetail.name.common}
                </h3>
                <div className="flex flex-col space-y-2">
                  <p>
                    <span className="font-semibold tracking-wide">
                      Native Name:{" "}
                    </span>
                    {nativeName ? nativeName.common : "No native name."}
                  </p>
                  <p>
                    <span className="font-semibold tracking-wide">
                      Population:{" "}
                    </span>
                    {countryDetail.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold tracking-wide">
                      Region:{" "}
                    </span>
                    {countryDetail.region}
                  </p>
                  <p>
                    <span className="font-semibold tracking-wide">
                      Sub Region:{" "}
                    </span>
                    {countryDetail.subregion
                      ? countryDetail.subregion
                      : "No Sub Region."}
                  </p>
                  <p>
                    <span className="font-semibold tracking-wide">
                      Capital:{" "}
                    </span>
                    {countryDetail.capital
                      ? countryDetail.capital?.[0]
                      : "No capital."}
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:pt-[calc(42px+18px)] ">
                <p>
                  <span className="font-semibold tracking-wide">
                    Top Level Domain:{" "}
                  </span>
                  {countryDetail.tld?.[0]}
                </p>
                <p>
                  <span className="font-semibold tracking-wide">
                    Currencies:{" "}
                  </span>
                  {currency ? currency.name : "No currency."}
                </p>
                <p>
                  <span className="font-semibold tracking-wide">
                    Languages:{" "}
                  </span>
                  {languageNames.length > 0
                    ? languageNames.join(", ")
                    : "No specific langauge."}
                </p>
              </div>
            </div>
            <BorderCountries borders={countryDetail.borders} />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Detail;
