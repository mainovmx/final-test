import {inject, observer} from "mobx-react";
import React from "react";

const MemesView = inject('stores')(observer(({stores})=>{
    const mainStore = stores.mainStore
    const item = mainStore.memes[mainStore.currentIndex]
    return(
        <div className="no-margin">
            <div className="content">
                <div className="center">
                    <input className="button-margin" type="image" alt="button previos memes"
                           src="https://www.pinclipart.com/picdir/big/345-3458901_arrow-pointing-to-left-svg-png-icon-free.png"
                           width="50px" onClick={() => mainStore.previousImage()}/>
                    <a className="text-content"> {item.name} </a>
                    <input className="button-margin" type="image" alt="button next memes"
                           src="https://uprostim.com/wp-content/uploads/2021/05/image009-1.png"
                           width="50px" onClick={() => mainStore.nextImage()}/>
                </div>
                <div className="center">
                    <img
                        src={item.url}
                        width={item.width}
                        height={item.height}
                        alt="memes"
                    />
                </div>
            </div>
        </div>
    )

}))
export default MemesView