import React, { useState } from "react";

function Upgrades() {
  const [farmTime, setFarmTime] = useState(5);
  const [points, setPoints] = useState(130);

  const upgradeTime = () => {
    if (farmTime < 8 && points >= 300) {
      setFarmTime(farmTime + 1);
      setPoints(points - 300); // Custo do upgrade
    } else {
      alert("Pontos insuficientes ou tempo máximo alcançado!");
    }
  };

  const upgradePoints = () => {
    if (points >= 400 && farmTime > 5) {
      setPoints(points - 400); // Custo do upgrade
      alert("Pontuação diária aumentada!");
    } else {
      alert("Pontos insuficientes ou requisitos não atendidos!");
    }
  };

  return (
    <div>
      <h1>Upgrades</h1>
      <button onClick={upgradeTime}>Aumentar Tempo de Farm (300 pontos)</button>
      <button onClick={upgradePoints}>Aumentar Pontuação (400 pontos)</button>
    </div>
  );
}

export default Upgrades;