import React from "react";
import {inject, observer} from "mobx-react";
import DetailView from "../../components/detailVIew";

const Favorite = inject('stores')(observer(({stores})=> {
    const showFavorite = stores.mainStore.getFavorite.map((item, index)=> {
        return(
                <div>
                    <a className = 'text-content'> {item.name} </a>
                    <div className = 'container'>
                        <img src={item.url} onClick={() => {
                            stores.mainStore.setDetailViewUrl(item.url)
                            stores.mainStore.opacityEditNote(true)}}/>
                        <input type='button' className='btn' value='X' onClick={() => {stores.mainStore.removeDataInFile(false, index)}}/>
                    </div>
                </div>
        )
    })
    if (stores.mainStore.auth) {
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
    )}
    return (
        <div className = "content">
            <h1>Избранное доступно только авторизированным пользователям</h1>
        </div>
    )
}))
export default Favorite