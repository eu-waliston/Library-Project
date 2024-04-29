import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home"

//User Routes
import Login from "../Components/User/Login"
import Register from "../Components/User/Register"
import Recover from "../Components/User/Recover"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/magic-labrary/front/login" element={<Login/>}/>
            <Route path="/magic-labrary/front/register" element={<Register/>}/>
            <Route path="/magic-labrary/front/recover" element={<Recover/>}/>
        </Routes>
    )
}

export default AllRoutes;