import React, { useState } from 'react';
import { setTasks } from '../app';


function Form() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = { id: Date.now(), name, description };
        setTasks(prefTasks => [...prefTasks, newTask]);
        setName('');
        setDescription('');
    };



    return (
        <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
}

export default Form;