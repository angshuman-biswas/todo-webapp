import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            <ul className="list">
                {
                    tasks.map((t) => {
                        return <Task task={t} key={t.id} />;
                    })
                }
            </ul>
        </div>
    )
};

export default TaskList;
