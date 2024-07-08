import { useContext } from "react";
import styled from "./title.module.css";
import { AppContext } from "../../App";

function Title() {

    const{isLogin, setIsLogin} = useContext(AppContext)

    return (
        <div className={styled.title}>
            <div className={styled.d1}>
                <span>
                    بانک مقالات و مقاله ساز
                </span>
            </div>
            {
            isLogin
            ?
            <div className={styled.d2}>
                <button onClick={()=>setIsLogin(false)}>
                    خروج
                </button>
            </div>    
            :
            <div className={styled.d3}>
                <button onClick={()=>setIsLogin(true)}>
                ورود
                </button>
            </div>
            }
        </div>
    )
}

export default Title;