import './App.css';
import {EditTask} from "./taskManagement/EditTask";
import React, {createContext} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home";


export const TaskContext = createContext()

function App() {
    const allTasks = [
        {title: 'one', desc: 'first'},
        {title: 'two', desc: 'second'},
        {title: 'three', desc: 'third'},
        {title: 'four', desc: 'fourth'},
    ]

    const [tasks, setTasks] = React.useState(allTasks);

    const handleAdd = (title, desc) => {
        const tasksExtra = [{title: title, desc: desc}]
        const taskClone = tasks.concat(tasksExtra)
        setTasks(taskClone)
    }

    const handleEdit = (title, desc) => {

    }

    return (
        <TaskContext.Provider value={tasks}>
            <Routes>
                <Route index element={<Home onAdd={handleAdd} onEdit={handleEdit}/>}/>
                <Route path="/edit/:id" element={<EditTask onEdit={handleEdit} />}/>
            </Routes>
        </TaskContext.Provider>
    );
}

export default App;
