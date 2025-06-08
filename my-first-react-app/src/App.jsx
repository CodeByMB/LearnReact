// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title, rating, isCool }) => {
  return (
    <div
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#31363f",
        borderRadius: "10px",
        minHeight: "100px",
      }}
    >
      <h2>{title}</h2>
      <h3>{rating}</h3>
      <h3>{isCool}</h3>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
