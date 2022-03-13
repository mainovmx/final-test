import React from 'react'
import './style.css'
import MemesView from "./Pages/memes";
import {Route, Routes} from "react-router";
import Favorite from "./Pages/favorite";
import Notes from "./Pages/notes";
import Auth from "./Pages/authorization";

function App() {

    return(
        <Routes>
            <Route path='/' element={<MemesView/>} />,
            <Route exact path='/Pages/favorite' element={<Favorite/>}/>,
            <Route exact path='/Pages/notes' element={<Notes/>}/>,
            <Route exact path='/Pages/authorization' element={<Auth/>}/>,
        </Routes>

    )
}

export default App;
