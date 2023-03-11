import React from "react";

function TaskForm(props) {
    const [task, setTask] = React.useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.addTask(task);
            setTask('');
        }}>
            <input
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}>   
                </input>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;