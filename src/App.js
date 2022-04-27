import React from 'react'
import './style.css'
import MemesView from "./Pages/memes";
import {Route, Routes} from "react-router";
import Favorite from "./Pages/favorite";
import Notes from "./Pages/notes";
import Auth from "./Pages/authorization";
import {inject, observer} from "mobx-react";

const App = inject('stores')( observer(({stores}) => {
    const checkAuth = (page) => {
         if (stores.mainStore.auth){
             return page
         }
         return <Auth/>
    }
    return(
        <Routes>
            <Route path='/' element={<MemesView/>} />,
            <Route exact path='/Pages/favorite' element={checkAuth(<Favorite/>)}/>,
            <Route exact path='/Pages/notes' element={checkAuth(<Notes/>)}/>,
            <Route exact path='/Pages/authorization' element={<Auth/>}/>,
        </Routes>

    )
}))

export default App;
