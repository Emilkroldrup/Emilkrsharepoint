import React, { useState } from 'react';
import Form from "./form";

function Main() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Task 1", description: "Task 1 description" },
        { id: 2, name: "Task 2", description: "Task 2 description" },
        { id: 3, name: "Task 3", description: "Task 3 description" },
    ]);

    return (
        <main>
            <h2>To do tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
            <Form setTasks={setTasks}/>
        </main>
    );
}

export default Main;