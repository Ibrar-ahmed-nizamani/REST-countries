const AppContainer = (props) => {
  return (
    <div className="bg-[#fafafa78] dark:bg-[hsl(207,26%,17%)] min-h-screen -mb-5 px-4 pt-5 md:px-10 md:pt-9">
      {props.children}
    </div>
  );
};

export default AppContainer;
