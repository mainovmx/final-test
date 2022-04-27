import {inject, observer} from "mobx-react";
import React from "react";
import DetailView from "../../components/detailVIew";
import PageLoader from "../../components/pageLoader";

const MemesView = inject('stores')(observer(({stores}) => {
    const inFavorite = () => {
        if (stores.mainStore.auth) {
            return <input type='button' className='btn' value='В избранное' onClick={() => stores.mainStore.addFavorite()}/>
        }
    }
    const handleClickDetailView = () => {
        stores.mainStore.opacityEditNote(true)
        stores.mainStore.setDetailViewUrl(stores.mainStore.getMeme.url)
    }
    if (stores.mainStore.isDataLoaded) {
        return (
            <div className = "no-margin">
               <DetailView/>
                <div className = "content">
                    <div className = "center">
                        <a className = "text-content"> {stores.mainStore.getMeme.name} </a>
                    </div>
                    <div className = "container">
                        <input className = "button-margin-left" type = "image" alt = "button previos memes"
                               src = "https://www.pinclipart.com/picdir/big/345-3458901_arrow-pointing-to-left-svg-png-icon-free.png"
                               onClick = {() => stores.mainStore.previousImage()}/>
                        <img
                            src = {stores.mainStore.getMeme.url}
                            height = {stores.mainStore.getMeme.height}
                            alt = "memes"
                            onClick = {handleClickDetailView}
                        />
                        <input className = "button-margin-right" type = "image" alt = "button next memes"
                               src = "https://uprostim.com/wp-content/uploads/2021/05/image009-1.png"
                               onClick = {() => stores.mainStore.nextImage()}/>
                        {inFavorite()}
                    </div>
                </div>
            </div>
        )}
        return PageLoader
}))
export default MemesView