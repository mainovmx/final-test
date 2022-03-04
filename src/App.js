import React from 'react'
import './style.css'

const MemeButtonLeft = () =>{
    return(
        <input class="button-margin" type="image" src="https://www.pinclipart.com/picdir/big/345-3458901_arrow-pointing-to-left-svg-png-icon-free.png"
               width="50px"/>
    )
}
const MemeButtonRight = () =>{
    return(
        <input class="button-margin" type="image" src="https://uprostim.com/wp-content/uploads/2021/05/image009-1.png"
               width="50px"/>
    )
}

function App(){
    return(
        <div className="no-margin">
            <div className="content">
                <div className="center">
                    <a className="text-content">Здесь должно быть описание</a>
                </div>
                <div>
                    <MemeButtonLeft/>
                    <img src="https://www.meme-arsenal.com/memes/6fdcf7d9a868cca3adecaa89518b871a.jpg"/>
                    <MemeButtonRight/>
                </div>
            </div>
        </div>
    )
}

export default App;
