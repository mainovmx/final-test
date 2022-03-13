import React, {ReactElement} from 'react'
import {inject, observer} from "mobx-react";

const EditNote = inject('stores')(observer(({stores}) => {
    const mainStore = stores.mainStore
    if (!mainStore.visibleModalNote) return null
    const action = () => {
        if (mainStore.editOrNot) {
            mainStore.addNote()
            mainStore.opacityEditNote(false)
        } else {
            mainStore.addNote()
            mainStore.opacityEditNote(false)

        }
    }
    return (
        <React.Fragment>
            <div className='modal' onClick={() => mainStore.opacityEditNote(false)}>
                <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Добавить заметку</h3>
                        <span className='modal-close' onClick={() => mainStore.opacityEditNote(false)}>
            &times;
          </span>
                    </div>
                    <div className='modal-body'>
                        <textarea cols="72" rows="10" placeholder="Введите заметку" name="note"
                                  value={mainStore.noteData} onChange={(e) => mainStore.inputNoteData(e.target.value)}/>
                        <div className='modal-content'><input type='button' onClick={action} value='Добавить'/>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}))


export default EditNote