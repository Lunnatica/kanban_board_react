"use client";

const title = "Kanban Board";

import { Header } from "../components/Header";
import KanbanBoard from "../components/kanban-board";

const tasks = [
  { name: "task 0", stage: 0 },
  { name: "task 1", stage: 0 },
  { name: "task 2", stage: 0 },
  { name: "task 3", stage: 0 },
  { name: "task 4", stage: 1 },
  { name: "task 5", stage: 1 },
  { name: "task 6", stage: 1 },
  { name: "task 7", stage: 2 },
  { name: "task 8", stage: 2 },
  { name: "task 9", stage: 3 },
];

export default function Home() {
  return (
    <>
      <Header title={title}></Header>
      <KanbanBoard initialTasks={tasks} />
    </>
  );
}
