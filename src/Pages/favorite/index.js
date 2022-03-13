import React from "react";
import {inject, observer} from "mobx-react";
import DetailView from "../../components/detailVIew";

const Favorite = inject('stores')(observer(({stores})=>{
    const mainStore = stores.mainStore
    const item = mainStore.getFavorite
    const showFavorite = item.map((item, index)=>{
        const action = () =>{
            mainStore.setDetailViewUrl(item.url)
            mainStore.opacityEditNote(true)
        }
        return(
                <div>
                    <a className='text-content'>{item.name}</a>
                    <div className='container'>
                        <img src={item.url} onClick={action}/>
                        <input type='button' className='btn' value='X' onClick={()=> {mainStore.removeDataInFile(false, index)}}/>
                    </div>
                </div>
        )
    })
    if (mainStore.auth) {
        return(
        <div className="center, no-margin">
            <DetailView/>
            <div className="content">
                    <div className="center">
                <h1 className="text-content">Избранное</h1>
                </div>
                    {showFavorite}
            </div>
        </div>
    )}
    return (
        <div className="content">
            <h1>Избранное доступно только авторизированным пользователям</h1>
        </div>
    )
}))
export default Favorite