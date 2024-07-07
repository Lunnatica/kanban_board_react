import { StageNames } from "../kanban-board";
import { useDrag } from "react-dnd";

export const Task = ({ task, index, handleStageChange, stage }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: task,
    end: (item, monitor) => {
      const result = monitor.getDropResult();
      if (item && result.stage) {
        console.log(item, result.stage);
        handleStageChange(task, result.stage);
      }
    },
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
