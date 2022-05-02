import React from 'react'
import {inject, observer} from "mobx-react";

const EditNote = inject('mainStore','noteStore')(observer(({mainStore, noteStore}) => {
    if (!mainStore.visibleModalNote) return null
    const handleClickAddNote = () => {
        if (noteStore.isEditable) {
            noteStore.addNote()
            mainStore.opacityModalWindow(false)
        } else {
            noteStore.addNote()
            mainStore.opacityModalWindow(false)

        }
    }
    return (
        <React.Fragment>
            <div className='modal' onClick={() => mainStore.opacityModalWindow(false)}>
                <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Добавить заметку</h3>
                        <span className='modal-close' onClick={() => mainStore.opacityModalWindow(false)}>
            &times;
          </span>
                    </div>
                    <div className='modal-body'>
                        <textarea cols="72" rows="10" placeholder="Введите заметку" name="note"
                                  value={mainStore.noteData} onChange={(e) => noteStore.inputNoteData(e.target.value)}/>
                        <div className='modal-content'>
                            <input type='button' onClick={handleClickAddNote} value='Добавить'/>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}))
export default EditNote