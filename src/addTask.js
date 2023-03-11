import React, { useState } from 'react';

function AddTask({ addNewTask}) {
    const [newTask, setNewTask] = useState('');


    function addTask() {
        if (newTask !== '') {
            addNewTask(newTask);
            setNewTask('');
        }
    }
    
    
    
    return (
        <div>
            <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default AddTask;
    


