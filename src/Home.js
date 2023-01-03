import './App.css';
import {AddTask} from "./taskManagement/AddTask";
import {TaskList} from "./taskManagement/TaskList";
import React, {useContext} from "react";
import {TaskContext} from "./App";


export const Home = ({onAdd}) => {
    const tasks = useContext(TaskContext)

    return (
        <div>
            <AddTask onAdd={onAdd}/>
            <TaskList tasks={tasks}/>
        </div>
    );
}



