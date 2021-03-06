import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  // calling this peice of state tasks and the function used to updated tasks is setTasks
  // in the () of useState() goes the default version of the state
  // setting state here at the top level of the app (app.js) so that all things can access it
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Apointment",
      day: "Feb 5th",
      time: "2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Work Meeting",
      day: "Feb 6th",
      time: "9:30 am",
      reminder: false,
    },
    {
      id: 3,
      text: "Workout",
      day: "Feb 7th",
      time: "10:30 am",
      reminder: true,
    },
  ]);
  // Add Task
  const addTask = (task) => {
    // create an id
    const id = Math.floor(Math.random() * 10000) + 1;
    // create the new task by adding the new id to the info from the form
    const newTask = { id, ...task };
    // update the state with the new task
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Remidner
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container temp">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onReminder={toggleReminder}
        />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
