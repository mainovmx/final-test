import {makeAutoObservable} from "mobx";
import DBStore from "./DBStore";
import AuthStore from "./AuthStore";

export default class NoteStore {
    constructor() {
        makeAutoObservable(this)
    }
    data = new DBStore().data
    currentUser = new AuthStore().currentUser
    noteData = ''
    currentNoteIndex = 0
    isEditable = false
    get getNote() {
        return this.data[this.currentUser].notes
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
    removeNote = (value) => {
        this.getNote.splice(value, 1)
        this.uploadOnJSON()
    }
    uploadOnJSON = () => {
        let upload = JSON.stringify(this.data)
        localStorage.setItem('dataBase', upload)
    }
    inputNoteData = (value) => {
        this.noteData = value
    }
    setCurrentNoteIndex = (value) => {
        this.currentNoteIndex = value
    }
    setEditOrNot = (value) => {
        this.isEditable = value
    }

}