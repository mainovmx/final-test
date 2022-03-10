import {action, makeObservable, observable} from "mobx";
import React from "react";
import axios from "axios";

export default class MainStore{
        constructor() {
        makeObservable(this, {
            memes: observable,
            currentIndex: observable,
            users: observable,
            initUsers: action,
            initImageArray: action,
            nextImage: action,
            previousImage: action

        })
        this.initImageArray();
        //this.initUsers();
    }

    memes = []
    users = []
    currentIndex = 0
    initUsers = () =>{
    }
    nextImage = () => {
        if (this.currentIndex === this.memes.length-1) {
            this.currentIndex = 0
        } else {
            this.currentIndex++
        }

    }
    previousImage = () => {
        if (this.currentIndex === this.memes.length-1) {
            this.currentIndex = 0
        } else {
            this.currentIndex--
        }

    }

    initImageArray = () =>{
        axios
            .get('https://api.imgflip.com/get_memes', {
                extras: "memes"
            })
            .then((response)=>{
                this.memes = response.data.data.memes
            })
            .catch(error => {
                console.log(error)
            })
    }
}