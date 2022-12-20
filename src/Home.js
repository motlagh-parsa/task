import './App.css';
import {AddTask} from "./taskManagement/AddTask";
import {TaskList} from "./taskManagement/TaskList";
import React from "react";
import {EditTask} from "./taskManagement/EditTask";

const allTasks = [
    {title: 'one', desc: 'first'},
    {title: 'two', desc: 'second'},
    {title: 'three', desc: 'third'},
    {title: 'four', desc: 'fourth'},
]


export const Home = () => {
    const [tasks, setTasks] = React.useState(allTasks)

    const handleAdd = (title, desc) => {
        const tasksExtra = [{title: title, desc: desc}]
        const taskClone = tasks.concat(tasksExtra)
        setTasks(taskClone)
    }

    return (
        <div>
            {/*<EditTask/>*/}
            <AddTask onAdd={handleAdd}/>
            <TaskList tasks={tasks}/>
        </div>
    );
}


