import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  FirstPage,
  SecondPage,
  ThirdPage,
  Dashboard,
} from "../pages";
import RequiredAuth from "./RequiredAuth";

const MyRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route path="firstpage" element={<FirstPage />} />
          <Route path="secondpage" element={<SecondPage />} />
          <Route path="thirdpage" element={<ThirdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouting;
