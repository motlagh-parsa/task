// import './App.css';
// import {AddTask} from "./taskManagement/AddTask";
// import {TaskList} from "./taskManagement/TaskList";
// import React from "react";
// import {EditTask} from "./taskManagement/EditTask";
// import {createContext} from "react";
//
// export const TaskContext = createContext()
//
// export const Home = () => {
//
//     // const allTasks = [
//     //     {title: 'one', desc: 'first'},
//     //     {title: 'two', desc: 'second'},
//     //     {title: 'three', desc: 'third'},
//     //     {title: 'four', desc: 'fourth'},
//     // ]
//     //
//     // const [tasks, setTasks] = React.useState(allTasks)
//
//     const handleAdd = (title, desc) => {
//         const tasksExtra = [{title: title, desc: desc}]
//         const taskClone = tasks.concat(tasksExtra)
//         setTasks(taskClone)
//     }
//
//     return (
//         <div>
//
//             <TaskContext.Provider value={tasks}>
//                 {/*<EditTask tasks={tasks} />*/}
//                 <EditTask />
//             </TaskContext.Provider>
//
//             <AddTask onAdd={handleAdd}/>
//             <TaskList tasks={tasks}/>
//
//         </div>
//     );
// }
//
//


import './App.css';
import {AddTask} from "./taskManagement/AddTask";
import {TaskList} from "./taskManagement/TaskList";
import React, {useContext} from "react";
import {TaskContext} from "./App";

// export const TaskContext = createContext()

export const Home = ({onAdd}) => {
    const tasks = useContext(TaskContext)

    return (
        <div>
            <AddTask onAdd={onAdd}/>
            <TaskList tasks={tasks}/>
        </div>
    );
}



