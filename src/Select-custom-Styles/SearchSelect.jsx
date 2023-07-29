export const searchStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "none" : null,
    boxShadow: state.isFocused ? "none" : null,
    border: "none",
    "&:hover": {
      cursor: "text",
    },
    fontSize: "0.9rem",
  }),
  placeholder: (pre) => ({
    ...pre,
    color: "#b3b3b3",
    fontSize: "0.75rem",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (pre, state) => ({
    ...pre,
    padding: "5px",
    backgroundColor: state.isFocused ? "#fafafa" : "white",
    color: state.isFocused ? "black" : "black",
    "&:hover": {
      backgroundColor: "#fafafa",
      cursor: "pointer",
    },
  }),
  menu: (pre) => ({
    ...pre,
    padding: "3px 5px",
    border: "none",
    fontSize: "0.8rem",
    minWidth: "200px",
    maxWidth: "250px",
  }),
  dropdownIndicator: (pre) => ({
    ...pre,
    display: "none",
  }),
  container: (pre) => ({
    ...pre,
    width: "100%",
  }),
};
