import {action, computed, makeObservable, observable, values} from "mobx";
import axios from "axios";
import data from "../data.json"

export default class MainStore {
    constructor() {
        makeObservable(this, {
            dataBase: observable,
            initDataBase: action,
            memes: observable,
            currentIndex: observable,
            isDataLoaded: observable,
            data: observable,
            enteringLogin: observable,
            enteringPassword: observable,
            loginJSON: observable,
            passJSON: observable,
            auth: observable,
            visibleModalNote: observable,
            currentUser: observable,
            detailUrl: observable,
            initImageArray: action,
            nextImage: action,
            Loading: action,
            previousImage: action,
            inputLoginData: action,
            inputPassData: action,
            checkAuth: action,
            exitProfile: action,
            opacityEditNote: action,
            setDetailViewUrl: action,
            getMeme: computed,
            getNote: computed,
            getFavorite: computed,
            uploadOnJSON: action,
            removeDataInFile: action,
            addFavorite: action,
            addNote: action,
            inputNoteData: action,
            noteData: observable,
            isEditable: observable,
            setEditOrNot: action,
            currentNoteIndex:observable,
        })
        this.initImageArray();
        this.initDataBase();
    }
    currentNoteIndex = 0
    isEditable = false
    currentUser = 0
    visibleModalNote = false
    isDataLoaded = false
    auth = false
    enteringLogin = ''
    enteringPassword = ''
    dataBase = ''
    data = []
    memes = []
    currentIndex = 0
    loginJSON = ''
    passJSON = ""
    detailUrl = ''
    noteData = ''
    initDataBase = () => {
        this.dataBase = JSON.stringify(data.users)
        let parserJSON = localStorage.getItem('dataBase')
        this.data = JSON.parse(parserJSON)
        if (this.data === null) {
            localStorage.setItem('dataBase', this.dataBase)
            this.data = localStorage.getItem('dataBase')
        }
    }
    setCurrentNoteIndex = (value) => {
        this.currentNoteIndex = value
    }
    setEditOrNot = (value) => {
        this.isEditable = value
    }
    addFavorite = () => {
        this.getFavorite.push(this.getMeme)
        this.uploadOnJSON()
    }
    inputNoteData = (value) => {
        this.noteData = value
    }
    addNote = () => {
        if (this.isEditable) {
            let now = new Date().toLocaleString()
            let arNote = {"text": this.noteData, "datetime": now}
            this.data[this.currentUser].notes.splice(this.currentNoteIndex,1,arNote)
            this.noteData = ''
        } else{
            let now = new Date().toLocaleString()
            let arNote = {"text": this.noteData, "datetime": now}
            this.data[this.currentUser].notes.push(arNote)
            this.noteData = ''
        }
        this.uploadOnJSON()
    }
    uploadOnJSON = () => {
        let upload = JSON.stringify(this.data)
        localStorage.setItem('dataBase', upload)
    }
    removeDataInFile = (isNote, value) => {
        (isNote) ? isNote = this.getNote : isNote = this.getFavorite
        isNote.splice(value, 1)
        this.uploadOnJSON()
    }
    setDetailViewUrl = (value) => {
        this.detailUrl = value
    }
    opacityEditNote = (value) => {
        this.visibleModalNote = value
    }
    Loading = (value) => {
        this.isDataLoaded = value
    }
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
                this.Loading(true)
            })
            .catch(error => {
                console.log(error)
            })

    }
    get getFavorite() {
        return this.data[this.currentUser].favorite
    }

    get getMeme() {
        return this.memes[this.currentIndex]
    }

    get getNote() {
        return this.data[this.currentUser].notes
    }
}
