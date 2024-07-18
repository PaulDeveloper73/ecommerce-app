import { Navigate, Route, Routes } from "react-router-dom";
import AppRoute from "./AppRoute";
import Home from "../pages/Home";
import { Suspense } from "react";

const AppRouting = () => {
  return (
    <Suspense fallback={() => <div>Loading...</div>}>
      <Routes>
        {AppRoute.map((route, index) => {
          if (route.requireAuth) {
            return (
              <Route
                path="/"
                element={<Navigate replace to={<Home />} />}
                key={index}
                exact
              />
            );
          } else {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={index}
                exact
              />
            );
          }
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouting;
