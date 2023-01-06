import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { getProducts } from "./API/Dummy";
import ComponentView from "./Components/ComponentView";

export const Store = createContext();

function App() {
  return <ComponentView />;
}

export default App;
