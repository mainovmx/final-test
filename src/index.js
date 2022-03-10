import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter, Link} from "react-router-dom";
import {Provider} from "mobx-react";
import MainStore from "./stores/MainStore";
import "./style.css"

const stores = {
    mainStore: new MainStore()
}
const MainHeader = () => (
    <div className="border-head">
        <div className="center">
                <Link to='/' className='text-bar'>Мемы </Link>
                <Link to='/Pages/favorite' className='text-bar'>Избраное </Link>
                <Link to='/Pages/notes' className='text-bar'>Заметки </Link>
                <Link to='/Pages/authorization' className='text-bar'>Авторизация </Link>
        </div>
    </div>
)
ReactDOM.render(
    <Provider stores = {stores}>
    <BrowserRouter>
        <MainHeader/>
        <App/>
    </BrowserRouter>
    </Provider>,
document.getElementById('root')
);