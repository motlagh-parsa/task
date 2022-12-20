import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";
import {EditTask} from "./taskManagement/EditTask";
import {Home} from "./Home";

// const router=createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Home />}/>,
//         <Route path="/edit/:id" element={<EditTask />}/>
//     )
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>,
                <Route path="/edit/:id/:value" element={<EditTask/>}/>
                {/*<Route path="/edit/:id" render={(props) => <EditTask title={Home.tasks.title} desc={Home.tasks.desc} />}/>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
