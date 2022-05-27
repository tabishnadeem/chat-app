import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@nextui-org/react";
import MainContainer from "./container/MainContainer";
import SignUp from "./pages/SignUp";

function App() {
  return <div className="App">
    {/* <MainContainer /> */}
    <SignUp />
  </div>;
}

export default App;
