import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from "./routes";

function App() {
  const Routings = AppRoutes();
  return (
    <>
      <Router>
        <Routes>
          {
            Routings.map((AppRoute) =>
              <Route key={AppRoute.id} path={AppRoute.path} element={AppRoute.element}></Route>
            )
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
