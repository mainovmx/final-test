import React from "react";
import './style.css'
export const MainHeader = () => {
    return(
        <h1>Шапка</h1>
    )
}
export const MainFooter = () => {
    return(
        <h2>Подвал</h2>
    )
}
class MainBody extends React.Component{
    render() {
        return (
            <MainHeader/>,
            <MainFooter/>
        )
    }
}
export default MainBody;