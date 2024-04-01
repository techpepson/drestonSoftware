import React from "react";
import "@radix-ui/themes/styles.css";
import { Route, Routes } from "react-router-dom";
import Login from "./frontend-source-code/components/AUTH_PAGES/Login";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
