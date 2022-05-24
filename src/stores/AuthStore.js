import {makeAutoObservable} from "mobx";
import DBStore from "./DBStore";

export default class AuthStore {
    constructor() {
        makeAutoObservable(this)
    }
    currentUser = 0
    enteringLogin = ''
    enteringPassword = ''
    auth = false
    loginJSON = ''
    passJSON = ""
    data = new DBStore().data
    inputLoginData = (value) => {
        this.enteringLogin = value
    }
    inputPassData = (value) => {
        this.enteringPassword = value
    }
    checkAuth = () => {
        this.loginJSON = this.data.map((users) => {
            return users.login
        })
        this.passJSON = this.data.map((users) => {
            return users.pass
        })
        if (this.loginJSON.includes(this.enteringLogin)) {
            if (this.passJSON.includes(this.enteringPassword)) {
                this.currentUser = this.loginJSON.indexOf(this.enteringLogin)
                this.exitProfile(true)
            } else alert('Неверный пароль')
        } else alert('Неверный логин')
    }
    exitProfile = (value) => {
        this.auth = value
    }
    get getUser() {
        return this.data[this.currentUser].login
    }
}