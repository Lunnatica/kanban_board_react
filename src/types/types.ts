export const StageNames: string[] = ["Backlog", "To Do", "Ongoing", "Done"];

export interface Task {
  name: string;
  stage: number;
}
