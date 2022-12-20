import './App.css';
import {EditTask} from "./taskManagement/EditTask";
import {AddTask} from "./taskManagement/AddTask";
import {TaskList} from "./taskManagement/TaskList";
import React from "react";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route} from "react-router-dom";
import {Home} from "./Home";

// const allTasks = [
//     {title: 'one', desc: 'first'},
//     {title: 'two', desc: 'second'},
//     {title: 'three', desc: 'third'},
//     {title: 'four', desc: 'fourth'},
// ]

function App() {
    return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
