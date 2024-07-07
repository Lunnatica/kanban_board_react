import { useDrag } from "react-dnd";

import { StageNames, Task as TaskInterface } from "../../types/types";

interface TaskProps {
  task: TaskInterface;
  handleStageChange: (task: TaskInterface, newStage: number) => void;
}

export const Task: React.FC<TaskProps> = ({ task, handleStageChange }) => {
  const [, drag] = useDrag(() => ({
    type: "task",
    item: task,
  }));

  return (
    <li ref={drag} className="slide-up-fade-in">
      <div className="li-content layout-row justify-content-between align-items-center">
        <span data-testid={`${task.name.split(" ").join("-")}-name`}>
          {task.name}
        </span>
        <div className="icons">
          <button
            disabled={task.stage === 0}
            onClick={() => handleStageChange(task, task.stage - 1)}
            className="icon-only x-small mx-2"
            data-testid={`${task.name.split(" ").join("-")}-back`}
          >
            <i className="material-icons">arrow_back</i>
          </button>
          <button
            disabled={task.stage === StageNames.length - 1}
            onClick={() => handleStageChange(task, task.stage + 1)}
            className="icon-only x-small mx-2"
            data-testid={`${task.name.split(" ").join("-")}-forward`}
          >
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
      </div>
    </li>
  );
};
