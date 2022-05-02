import React from "react";
import {inject, observer} from "mobx-react";
import EditNote from "../../components/editNotes";
import * as shortid from "shortid";


const Notes = inject('noteStore','mainStore')(observer(({noteStore,mainStore}) => {
    const note = noteStore.getNote
    const showNotes = note.map((item,index) => {
        const handleClickEdit = () => {
            noteStore.setCurrentNoteIndex(index)
            noteStore.setEditOrNot(true)
            noteStore.inputNoteData(item.text)
            mainStore.opacityModalWindow(true)
        }
        return(
            <div className = "notes" key={shortid.generate()}>
                <a>{item.datetime} </a>
                <a className = "text-note">{item.text}</a>
                <input type = "button" className = "edit-note" value = "e" onClick = {handleClickEdit}/>
                <input type = "button" className = "delete-note" value = "x" onClick = {() => noteStore.removeNote(index)} />
            </div>
        )
    })
    const actionAdd = () => {
        noteStore.setEditOrNot(false)
        mainStore.opacityModalWindow(true)
    }
    return(
        <div className = "center, no-margin">
            <div className = "content">
                <input type = "button"  className = "add-note" value = " + " onClick = {actionAdd}/>
                <h1 className = "text-content, center">Заметки</h1>
                {showNotes}
                <EditNote/>
            </div>
        </div>
    )
}))
export default Notes