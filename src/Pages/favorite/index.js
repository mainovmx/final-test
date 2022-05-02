import React from "react";
import {inject, observer} from "mobx-react";
import DetailView from "../../components/detailVIew";
import * as shortid from "shortid";

const Favorite = inject('mainStore')(observer(({mainStore})=> {
    const showFavorite = mainStore.getFavorite.map((item, index)=> {
        return(
                <div key={shortid.generate()}>
                    <a className = 'text-content' > {item.name} </a>
                    <div className = 'container'>
                        <img src={item.url} onClick={() => {
                            mainStore.setDetailViewUrl(item.url)
                            mainStore.opacityModalWindow(true)}}/>
                        <input type='button' className='btn' value='X' onClick={() => {mainStore.removeFavorite(index)}}/>
                    </div>
                </div>
        )
    })
    return(
        <div className = "center, no-margin">
            <DetailView/>
            <div className = "content">
                <div className = "center">
                    <h1 className = "text-content">Избранное</h1>
                </div>
                {showFavorite}
            </div>
        </div>
    )
}))
export default Favorite