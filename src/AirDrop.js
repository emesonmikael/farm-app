import React from "react";

function Airdrop({ points }) {
  const maxTokens = 2000;
  
  // Cálculo dos tokens a serem distribuídos com base na pontuação
  const calculateTokens = () => {
    // A pontuação é dividida por 500 e multiplicada pela quantidade máxima de tokens
    const tokens = (points / 500) * maxTokens;
    // A recompensa não pode ultrapassar 2000 tokens
    return Math.min(tokens, maxTokens);
  };

  return (
    <div>
      <h1>Airdrop</h1>
      <p>Você receberá aproximadamente {calculateTokens()} tokens, com base na sua pontuação de {points} pontos.</p>
    </div>
  );
}

export default Airdrop;