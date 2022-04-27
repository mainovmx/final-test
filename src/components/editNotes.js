import React from 'react'
import {inject, observer} from "mobx-react";

const EditNote = inject('stores')(observer(({stores}) => {
    if (!stores.mainStore.visibleModalNote) return null
    const handleClickAddNote = () => {
        if (stores.mainStore.isEditable) {
            stores.mainStore.addNote()
            stores.mainStore.opacityEditNote(false)
        } else {
            stores.mainStore.addNote()
            stores.mainStore.opacityEditNote(false)

        }
    }
    return (
        <React.Fragment>
            <div className='modal' onClick={() => stores.mainStore.opacityEditNote(false)}>
                <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Добавить заметку</h3>
                        <span className='modal-close' onClick={() => stores.mainStore.opacityEditNote(false)}>
            &times;
          </span>
                    </div>
                    <div className='modal-body'>
                        <textarea cols="72" rows="10" placeholder="Введите заметку" name="note"
                                  value={stores.mainStore.noteData} onChange={(e) => stores.mainStore.inputNoteData(e.target.value)}/>
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