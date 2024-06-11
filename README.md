# Kanban

Kanban is a popular workflow used in task management, project management, issue tracking, and other similar purposes. The workflow is usually visualized using a Kanban Board.

Create a Kanban Board component with tasks, where each task consists of a name only, as shown below:

10 tasks in 4 columns named backlog, todo, ongoing, done. Left right arrows move tasks between columns.

The component must have the following functionalities:

The component board contains 4 stages of tasks in the sequence 'Backlog', 'To Do', 'Ongoing', and 'Done'.

An array of tasks is passed as a prop to the component.

In every individual stage, the tasks are rendered as a list <ul>, where each task is a single list item <li> that displays the name of the task.

Each task list item has 2 icon buttons on the right:

Back button: This moves the task to the previous stage in the sequence, if any. This button is disabled if the task is in the first stage.

Forward button: This moves the task to the next stage in the sequence, if any. This button is disabled if the task is in the last stage.

Each task has 2 properties:

- name: The name of task. This is the unique identification for every task. [STRING]

- stage: The stage of the task. [NUMBER] (0 represents the 'Backlog' stage, 1 represents the 'To Do' stage, 2 represents the 'Ongoing' stage, and 3 represents the 'Done' stage)
