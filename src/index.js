import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App";
import {Route, Routes} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import Favorite from "./Pages/favorite";
import Notes from "./Pages/notes";
import Auth from "./Pages/authorization";
const MainHeader = () => (
    <div class="border-head">
        <div class="center">
                <Link to='/' class='text-bar'>Мемы </Link>
                <Link to='/Pages/favorite'class='text-bar'>Избраное </Link>
                <Link to='/Pages/notes'class='text-bar'>Заметки </Link>
                <Link to='/Pages/authorization'class='text-bar'>Авторизация </Link>
        </div>
    </div>
)
ReactDOM.render(
    <BrowserRouter>
        <MainHeader/>
        <Routes>
            <Route path='/'element={<App/>} />
            <Route exact path='/Pages/favorite' element={<Favorite/>}/>,
            <Route exact path='/Pages/notes' element={<Notes/>}/>,
            <Route exact path='/Pages/authorization' element={<Auth/>}/>
        </Routes>
    </BrowserRouter>,
document.getElementById('root')
);