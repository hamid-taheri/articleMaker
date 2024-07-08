import styled from "./notfound.module.css";
import tasvir from "../../images/404.jpg";

function Notfound(){
    return(
        <div className={styled.container}>
            <img src={tasvir}/>
            <h1>صفحه مورد نظر یافت نشد.</h1>
        </div>
    )
}

export default Notfound;