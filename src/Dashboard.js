import React from "react";

function Dashboard({ points }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Pontuação Atual: {points}</p>
      <p>Tempo de Farm: 5 horas</p>
      <p>Melhore seu tempo de farm ou pontuação nas opções de upgrade!</p>
    </div>
  );
}

export default Dashboard;