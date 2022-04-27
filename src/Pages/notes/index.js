import React from "react";
import {inject, observer} from "mobx-react";
import EditNote from "../../components/editNotes";


const Notes = inject('stores')(observer(({stores}) => {
    const mainStore = stores.mainStore
    const item = mainStore.getNote
    const showNotes = item.map((item,index) => {
        const handleClickEdit = () => {
            mainStore.setCurrentNoteIndex(index)
            mainStore.setEditOrNot(true)
            mainStore.inputNoteData(item.text)
            mainStore.opacityEditNote(true)
        }
        return(
            <div className = "notes">
                <a>{item.datetime} </a>
                <a className = "text-note">{item.text}</a>
                <input type = "button" className = "edit-note" value = "e" onClick = {handleClickEdit}/>
                <input type = "button" className = "delete-note" value = "x" onClick = {() => mainStore.removeDataInFile(true , index)} />
            </div>
        )
    })
    const actionAdd = () => {
        mainStore.setEditOrNot(false)
        mainStore.opacityEditNote(true)
    }
    if(mainStore.auth){
        return(
        <div className = "center, no-margin">
            <div className = "content">
                <input type = "button"  className = "add-note" value = " + " onClick = {actionAdd}/>
                <h1 className = "text-content, center">Заметки</h1>
                {showNotes}
                <EditNote/>
            </div>
        </div>
    )} else {
        return (
            <div className="content">
                <h1>Заметки доступны только авторизированным пользователям</h1>
            </div>
        )
    }
}))
export default Notes