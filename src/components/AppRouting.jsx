import React, { useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppRoute from "./AppRoute";
import Home from "../pages/Home";
import { Suspense } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const AppRouting = () => {
  const routes = AppRoute.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={
        route.requireAuth ? <Navigate replace to={<Home />} /> : route.element
      }
      exact
    />
  ));

  const location = useLocation();
  const fadeRef = useRef(null); // useRef for CSSTransition

  return (
    <SwitchTransition>
      <CSSTransition
        nodeRef={fadeRef} // Ref used for CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="fade" ref={fadeRef}>
          <Suspense
            fallback={
              <div className="flex justify-center items-center mt-20">
                Loading...
              </div>
            }
          >
            <Routes>{routes}</Routes>
          </Suspense>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AppRouting;
