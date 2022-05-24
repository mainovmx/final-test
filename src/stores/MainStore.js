import {makeAutoObservable} from "mobx";
import axios from "axios";
import AuthStore from "./AuthStore";
import DBStore from "./DBStore";

export default class MainStore {
    constructor() {
        makeAutoObservable(this)
        this.initImageArray();
    }
    currentUser = new AuthStore().currentUser
    data = new DBStore().data
    visibleModalNote = false
    isDataLoaded = false
    memes = []
    currentIndex = 0
    detailUrl = ''
    setDetailViewUrl = (value) => {
        this.detailUrl = value
    }
    opacityModalWindow = (value) => {
        this.visibleModalNote = value
    }
    loading = (value) => {
        this.isDataLoaded = value
    }

    nextImage = () => {
        if (this.currentIndex === this.memes.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex++
        }

    }
    previousImage = () => {
        if (this.currentIndex === this.memes.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex--
        }

    }
    initImageArray = () => {
        axios
            .get('https://api.imgflip.com/get_memes', {
                extras: "memes"
            })
            .then((response) => {
                this.memes = response.data.data.memes
                this.loading(true)
            })
            .catch(error => {
                console.log(error)
            })

    }
    get getMeme() {
        return this.memes[this.currentIndex]
    }

    get getFavorite() {
        return this.data[this.currentUser].favorite
    }
    addFavorite = () => {
        this.getFavorite.push(this.getMeme)
        this.uploadOnJSON()
    }
    removeFavorite = (value) => {
        this.getFavorite.splice(value, 1)
        this.uploadOnJSON()
    }
    uploadOnJSON = () => {
        let upload = JSON.stringify(this.data)
        localStorage.setItem('dataBase', upload)
    }

}
