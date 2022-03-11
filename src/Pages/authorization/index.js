import React from "react";
import {inject, observer} from "mobx-react";


const Auth = inject('stores')(observer(({stores}) => {
    const mainStore = stores.mainStore
    if ( mainStore.auth === false )
    return(
        <div className="center, no-margin">
            <div className="content, center">
                <h1>Авторизация</h1>
                <a>Логин </a> <input type='text' value={mainStore.enteringLogin} onChange={(e) =>mainStore.inputLoginData(e.target.value)}/>
                <a> Пароль </a> <input type='password' value={mainStore.enteringPassword} onChange={(e) =>mainStore.inputPassData(e.target.value)}/>
                <div>
                    <input type='submit' value='Вход' onClick={mainStore.checkAuth}/>
                </div>
            </div>
        </div>
    )
    else return(
        <div className='center, no-margin'>
            <div className='center, content'>
                <h1>Вы уже авторизированы</h1>
                <input type='button' value='Выйти?' onClick={mainStore.exitProfile(false)}/>
            </div>

        </div>
    )
}))
export default Auth