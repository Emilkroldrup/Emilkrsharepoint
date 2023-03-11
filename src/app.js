import React from "react";
import Header from "./component/header";
import Main from "./component/main";
import TaskForm from "./Taskform";
import TaskList from "./component/tasklist";
import "./style.css";




function App() {
 
    const [tasks, setTasks] = React.useState([
        {id: 1, title: "Task 1", description: "Task 1 description"},
        {id: 2, title: "Task 2", description: "Task 2 description"},
    ]);

    function addTask(task) {
        setTasks([...tasks, {id: task.length +1,title: task}]);

    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

  
      
      

  return (
    <div className="App">
        <h1>My To-Do List</h1>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
        <TaskForm addTask={addTask} />
        <Header />
        <Main />
    </div>
  );
}


export default App;
