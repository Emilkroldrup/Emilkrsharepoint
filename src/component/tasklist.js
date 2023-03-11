import React from "react";
import { setTasks } from '../app';


const TaskList = ({ tasks, deleteTask }) => {
    function completeTask(taskIndex) {
        const newTasks = [...tasks];
        newTasks[taskIndex].isCompleted = true;
        setTasks(newTasks);
           
        }

        function removeTask(taskIndex) {
            const newTasks = [...tasks];
            newTasks.splice(taskIndex, 1);
            setTasks(newTasks);
        }

        
            return (
              <div className="task-list">
                {tasks.map((task) => (
                  <div key={task.id} className="task-item">
                    <span>{task.text}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                ))}
              </div>
            );
          };
        
    

    export default TaskList;