const BorderCountries = (props) => {
  return (
    <div className="flex flex-col my-4 space-y-3 ">
      <h4 className="text-sm font-medium">Border Countries: </h4>
      <div className="flex flex-wrap gap-2 ">
        {props.borders
          ? props.borders.map((border, index) => (
              <div
                className="bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.17)]  px-4 py-1 dark:bg-[hsl(209,23%,22%)]"
                key={index}
              >
                {border}
              </div>
            ))
          : "No border countries."}
      </div>
    </div>
  );
};

export default BorderCountries;
