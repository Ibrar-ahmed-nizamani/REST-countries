export const filterStyles = {
  control: (provided) => ({
    ...provided,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
    padding: "12px 15px",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  placeholder: (pre) => ({
    ...pre,
    color: "black",
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
    padding: "10px 20px",
    border: "none",
  }),
};
