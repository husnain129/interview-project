import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContainer from "./cards/CardContainer";
import WheelContainer from "./WheelContainer";

const paths = [
  "/",
  "bed",
  "tv-show",
  "towel",
  "phone",
  "t-shirt",
  "bed-show",
  "door-lock",
];
const App = () => {
  const [route, setRoute] = useState("/");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<WheelContainer route={route} setRoute={setRoute} />}
        ></Route>
        {paths.map((path, idx) => (
          <Route path={`/:${path}`} key={idx} element={<CardContainer />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
