import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Apps from "./Apps";
import Resources from "./Resources";
export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/> 
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/apps" element={<Apps/>}/>
        </Routes>
    )
}