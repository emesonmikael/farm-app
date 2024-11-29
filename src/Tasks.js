import React from "react";

function Tasks({ points, setPoints }) {
  const [tasks, setTasks] = React.useState([
    { id: 1, question: "O que é um blockchain?", completed: false, points: 50 },
    { id: 2, question: "Qual é o maior token por capitalização?", completed: false, points: 80 },
  ]);

  const completeTask = (id, pointsEarned) => {
    // Marca a tarefa como concluída
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    
    // Atualiza a pontuação
    setPoints(points + pointsEarned);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.question} -{" "}
            {task.completed ? "Concluído" : `${task.points} pontos`}
            {!task.completed && (
              <button onClick={() => completeTask(task.id, task.points)}>Completar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;