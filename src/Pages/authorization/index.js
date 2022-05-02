import React from "react";
import {inject, observer} from "mobx-react";


const Auth = inject('authStore')(observer(({authStore}) => {
    if (authStore.auth){
    return(
        <div className = 'center, no-margin'>
            <div className = 'center, content'>
                <h1>{authStore.getUser}</h1>
                <h1>Вы уже авторизированы</h1>
                <input type = 'button' value = 'Выйти?' onClick={() => authStore.exitProfile(false)}/>
            </div>
        </div>
    )} else {
    return(
        <div className = "center, no-margin">
            <div className = "content, center">
                <h1>Авторизация</h1>
                <a>Логин </a> <input type = 'text' value={authStore.enteringLogin} onChange={(e) => authStore.inputLoginData(e.target.value)}/>
                <a>Пароль </a> <input type = 'password' value={authStore.enteringPassword} onChange={(e) => authStore.inputPassData(e.target.value)}/>
                <div>
                    <input type = 'submit' value = 'Вход' onClick={authStore.checkAuth}/>
                </div>
            </div>
        </div>

    )}
}))
export default Auth