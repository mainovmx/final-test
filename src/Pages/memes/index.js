import {inject, observer} from "mobx-react";
import React from "react";
import DetailView from "../../components/detailVIew";
import PageLoader from "../../components/pageLoader";

const MemesView = inject('mainStore','authStore')(observer(({mainStore,authStore}) => {
    const inFavorite = () => {
        if (authStore.auth) {
            return <input type='button' className='btn' value='В избранное' onClick={() => mainStore.addFavorite()}/>
        }
    }
    const handleClickDetailView = () => {
        mainStore.opacityModalWindow(true)
        mainStore.setDetailViewUrl(mainStore.getMeme.url)
    }
    if (mainStore.isDataLoaded) {
        return (      
            <div className = "no-margin">
               <DetailView/>
                <div className = "content">
                    <div className = "center">
                        <a className = "text-content"> {mainStore.getMeme.name} </a>
                    </div>
                    <div className = "container">
                        <input className = "button-margin-left" type = "image" alt = "button previos memes"
                               src = "https://www.pinclipart.com/picdir/big/345-3458901_arrow-pointing-to-left-svg-png-icon-free.png"
                               onClick = {() => mainStore.previousImage()}/>
                        <img
                            src = {mainStore.getMeme.url}
                            height = {mainStore.getMeme.height}
                            alt = "memes"
                            onClick = {handleClickDetailView}
                        />
                        <input className = "button-margin-right" type = "image" alt = "button next memes"
                               src = "https://uprostim.com/wp-content/uploads/2021/05/image009-1.png"
                               onClick = {() => mainStore.nextImage()}/>
                        {inFavorite()}
                    </div>
                </div>
            </div>
        )}
        return PageLoader
}))
export default MemesView