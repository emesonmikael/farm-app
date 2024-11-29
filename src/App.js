import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Upgrades from "./Upgrades";
import Tasks from "./Tasks";
import Airdrop from "./AirDrop";

function App() {
  const [points, setPoints] = useState(130); // Pontuação inicial

  const updatePoints = (newPoints) => {
    setPoints(newPoints); // Atualiza a pontuação
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/upgrades">Upgrades</Link> |{" "}
          <Link to="/tasks">Tasks</Link> | <Link to="/airdrop">Airdrop</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard points={points} />} />
          <Route path="/upgrades" element={<Upgrades points={points} setPoints={updatePoints} />} />
          <Route path="/tasks" element={<Tasks points={points} setPoints={updatePoints} />} />
          <Route path="/airdrop" element={<Airdrop points={points} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;