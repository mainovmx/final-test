import React, { ReactElement } from 'react'
import {inject, observer} from "mobx-react";
const DetailView = inject('stores')(observer(({stores}) => {
    if (!stores.mainStore.visibleModalNote) return null
    return (
        <React.Fragment>
            <div className = 'modal' onClick={() => stores.mainStore.opacityEditNote(false)}>
                    <div className = 'modal-body'>
                            <img className = 'dtl-view' src = {stores.mainStore.detailUrl}/>
                            <button value = 'x' className='btn' onClick={() => stores.mainStore.opacityEditNote(false)}/>
                    </div>
            </div>
        </React.Fragment>
    )
}))
export default DetailView