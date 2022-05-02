import React, { ReactElement } from 'react'
import {inject, observer} from "mobx-react";
const DetailView = inject('mainStore')(observer(({mainStore}) => {
    if (!mainStore.visibleModalNote) return null
    return (
        <React.Fragment>
            <div className = 'modal' onClick={() => mainStore.opacityModalWindow(false)}>
                    <div className = 'modal-body'>
                            <img className = 'dtl-view' src = {mainStore.detailUrl}/>
                            <button value = 'x' className='btn' onClick={() => mainStore.opacityModalWindow(false)}/>
                    </div>
            </div>
        </React.Fragment>
    )
}))
export default DetailView