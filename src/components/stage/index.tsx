import React from "react";
import { useDrop } from "react-dnd";

import { StageNames, Task as TaskInterface } from "../../types/types";
import { Task } from "../task";

interface StageProps {
  handleStageChange: (task: TaskInterface, newStage: number) => void;
  tasks: TaskInterface[];
  i: number;
}

export const Stage: React.FC<StageProps> = ({
  handleStageChange,
  tasks,
  i,
}) => {
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: TaskInterface) => handleStageChange(item, i),
  }));

  return (
    <div ref={drop} className="card outlined ml-20 mt-0" key={`${i}`}>
      <div className="card-text">
        <h4>{StageNames[i]}</h4>
        <ul className="styled mt-50" data-testid={`stage-${i}`}>
          {tasks.map((task) => (
            <Task
              key={`stage-${i}-${task.name}`}
              task={task}
              handleStageChange={handleStageChange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
