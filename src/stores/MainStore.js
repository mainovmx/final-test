import {action, makeObservable, observable} from "mobx";
import axios from "axios";
import data from "../data.json"

export default class MainStore{
        constructor() {
        makeObservable(this, {
            memes: observable,                                  //обсы для мемов
            currentIndex: observable,
            dataUsers: observable,                              //обсы для авторизации
            enteringLogin: observable,
            enteringPassword: observable,
            loginJSON: observable,
            passJSON: observable,
            auth: observable,
            initImageArray: action,                            //акты для мемов
            nextImage: action,
            previousImage: action,
            inputLoginData: action,                           //акты для авторизации
            inputPassData: action,
            checkAuth: action,
            exitProfile: action,

        })
        this.initImageArray();

    }
    auth = false
    enteringLogin = ''
    enteringPassword = ''
    dataUsers = data.users
    memes = []
    currentIndex = 0
    loginJSON = ''
    passJSON = ""

    //Работа с авторизацией
    inputLoginData = (value) =>{
            this.enteringLogin = value
    }
    inputPassData = (value) => {
            this.enteringPassword = value
    }
    checkAuth = () => {
        this.loginJSON = this.dataUsers.map((users)=>{
            return users.login
        })
        this.passJSON  = this.dataUsers.map((users)=>{
            return users.pass
        })
        this.loginJSON.includes(this.enteringLogin) === true ?
            this.passJSON.includes(this.enteringPassword) === true ?
                this.auth = true: alert('Неверный пароль')
        : alert('Неверный логин')
    }
    exitProfile = (value) => {
        this.auth = value
    }


    //Работа с изображением
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