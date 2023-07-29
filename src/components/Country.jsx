import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countriesActions } from "../store/CountriesSlice";

const Country = (props) => {
  const dispatch = useDispatch();
  const countryName = props.countryDetail;

  const showCountryDetailHandler = () => {
    dispatch(countriesActions.showDetail(props.countryDetail));
  };

  return (
    <div
      className="bg-white rounded-md w-44 text-xs space-y-4 shadow-[0px_0px_8px_rgba(0,0,0,0.1)] hover:scale-110 hover:cursor-pointer transition-all active:scale-105 dark:bg-[hsl(209,23%,22%)] dark:text-white "
      onClick={showCountryDetailHandler}
    >
      <Link to={`${countryName.name.common}`}>
        <img
          src={props.flag}
          alt="country"
          className="w-full rounded-tl-md rounded-tr-md h-[160px] mb-2"
        />
        <div className="px-4 pb-5 space-y-2">
          <h3 className="font-bold text-base">{props.countryName}</h3>
          <div className="space-y-1">
            <div>
              <span className="font-semibold">Population: </span>
              {props.population?.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold">Region: </span>
              {props.region}
            </div>
            <div>
              <span className="font-semibold">Capital: </span>
              {props.capital ? props.capital : "No capital."}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
