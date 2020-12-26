import React, { createContext, useState } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext();

/* This is the TaskListContextProvider component */
const TaskListContextProvider = props => {
    const [tasks, setTasks] = useState([
        { title: 'Read a book', id: 1 },
        { title: 'Wash the car', id: 2 },
        { title: 'Write some code', id: 3 }
    ]);

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuid()}])
    };

    const remoteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    };

    return (
        <TaskListContext.Provider value={{tasks, addTask, remoteTask}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;