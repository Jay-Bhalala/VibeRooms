import React from 'react';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

const TaskPage = () => {
    const { tasks, addTask, toggleTaskCompletion } = useTasks();

    return (
        <div>
            <Navbar />
            <h1>Tasks</h1>
            <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} />
        </div>
    );
};

export default TaskPage;