import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContainer from "./cards/CardContainer";
import WheelContainer from "./WheelContainer";
const App = () => {
  const [route, setRoute] = useState("/");
  console.log("route", route);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<WheelContainer route={route} setRoute={setRoute} />}
        ></Route>
        <Route path={`/:${route}`} element={<CardContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
