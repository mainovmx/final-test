import {inject, observer} from "mobx-react";
import React from "react";
import DetailView from "../../components/detailVIew";

const MemesView = inject('stores')(observer(({stores})=>{
    const mainStore = stores.mainStore
    const item = mainStore.getMeme
    const inFavorite = () =>{
        if (mainStore.auth){return <input type='button' className='btn' value='В избранное' onClick={()=>mainStore.addFavorite()}/>}
    }
    const action = () =>{
        mainStore.opacityEditNote(true)
        mainStore.setDetailViewUrl(item.url)
    }
    if (mainStore.isDataLoaded) {
        return (
            <div className="no-margin">
               <DetailView/>
                <div className="content">
                    <div className="center">
                        <a className="text-content"> {item.name} </a>
                    </div>
                    <div className="container">
                        <input className="button-margin-left" type="image" alt="button previos memes"
                               src="https://www.pinclipart.com/picdir/big/345-3458901_arrow-pointing-to-left-svg-png-icon-free.png"
                               onClick={() => mainStore.previousImage()}/>
                        <img
                            src={item.url}
                            height={item.height}
                            alt="memes"
                            onClick={action}
                        />
                        <input className="button-margin-right" type="image" alt="button next memes"
                               src="https://uprostim.com/wp-content/uploads/2021/05/image009-1.png"
                               onClick={() => mainStore.nextImage()}/>
                        {inFavorite()}
                    </div>
                </div>
            </div>
        )}
        return (
            <div className='content'>
                <h1>Данные загружаются</h1>
            </div>
        )
}))
export default MemesView