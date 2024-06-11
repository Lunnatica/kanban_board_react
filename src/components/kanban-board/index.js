import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Stage } from "../stage";
import "./index.css";

export const StageNames = ["Backlog", "To Do", "Ongoing", "Done"];

const mapTasksToStages = (tasks) => {
  let stagesTasks = [];
  for (let i = 0; i < StageNames.length; ++i) {
    stagesTasks.push([]);
  }
  for (let task of tasks) {
    const stageId = task.stage;
    stagesTasks[stageId].push(task);
  }

  return stagesTasks;
};

const KanbanBoard = ({ initialTasks }) => {
  const [stagesTasks, setStagesTasks] = useState(
    mapTasksToStages(initialTasks)
  );

  const handleStageChange = (task, nextStage) => {
    const newStagesTasks = [...stagesTasks];

    newStagesTasks[nextStage].push({ ...task, stage: nextStage });

    newStagesTasks[task.stage] = newStagesTasks[task.stage].filter(
      (item) => item.name !== task.name
    );

    setStagesTasks(newStagesTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mt-20 layout-column justify-content-center align-items-center">
        <div className="mt-50 layout-row">
          {stagesTasks.map((tasks, i) => (
            <Stage
              handleStageChange={handleStageChange}
              tasks={tasks}
              i={i}
              key={i}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
