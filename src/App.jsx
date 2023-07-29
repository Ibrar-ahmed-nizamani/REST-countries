import React, { Suspense } from "react";
import AppHeader from "./components/AppHeader";
import AppContainer from "./UI/AppContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./UI/Spinner";

const HomePage = React.lazy(() => import("./pages/Homepage"));
const CountryDetail = React.lazy(() => import("./pages/CountryDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppContainer>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:country" element={<CountryDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
