import {makeAutoObservable, makeObservable} from "mobx";
import axios from "axios";
import React, {useEffect, useState} from "react";

/*
export const getMemes = () => {
    let memes = null
    return () => {
        axios.get('https://api.imgflip.com/get_memes')
            .then( response => (this.memes = response))
    }
}
*/
export function Memes() {
    const [appState, setAppState] = useState();
    useEffect(() => {
        const apiUrl = 'https://api.imgflip.com/get_memes';
        axios.get(apiUrl).then((resp) => {
            const allMemes = resp.data;
            setAppState(allMemes);
        });

    }, [setAppState])
    return (
        <div> </div>
    );

}