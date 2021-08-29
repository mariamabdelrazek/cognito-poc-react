import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Status from "./components/Status";
import { Account } from "./components/Accounts";

const App = () => {
  return (
    <div className="test">
      <Account>
        <Status />
        <Signup />
        <Login />
      </Account>
    </div>
  );
};

export default App;
