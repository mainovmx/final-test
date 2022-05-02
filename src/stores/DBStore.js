import {makeAutoObservable} from "mobx";
import data from "../service/data.json"

export default class DBStore {
    constructor() {
        makeAutoObservable(this)
        this.initDataBase()
    }
    data = []
    dataBase = ''
    initDataBase = () => {
        this.dataBase = JSON.stringify(data.users)
        let parserJSON = localStorage.getItem('dataBase')
        this.data = JSON.parse(parserJSON)
        if (this.data === null) {
            localStorage.setItem('dataBase', this.dataBase)
            this.data = localStorage.getItem('dataBase')
        }
    }
}