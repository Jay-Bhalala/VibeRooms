import React from 'react';

const TaskList = ({ tasks, toggleTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} onClick={() => toggleTask(task.id)}>
                    {task.name} {task.completed ? '(Completed)' : ''}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;