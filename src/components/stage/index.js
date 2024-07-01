import { useDrop } from "react-dnd";
import { StageNames } from "../kanban-board";
import { Task } from "../task";

export const Stage = ({ handleStageChange, tasks, i }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: () => ({ stage: i }),
  }));

  return (
    <div ref={drop} className="card outlined ml-20 mt-0" key={`${i}`}>
      <div className="card-text">
        <h4>{StageNames[i]}</h4>
        <ul className="styled mt-50" data-testid={`stage-${i}`}>
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              handleStageChange={handleStageChange}
              stage={i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
