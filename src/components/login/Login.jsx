import { useContext } from "react";
import styled from "./login.module.css";
import { AppContext } from "../../App";

function Login() {

  const {isLogin, setIsLogin} = useContext(AppContext)

  return (
    <div className={styled.container}>
      {
        isLogin
        ?
        <div className={styled.d2}>
          <p>
            شما وارد شده اید.
          </p>
        </div>       
        :
        <div className={styled.d1}>
          <label>نام کاربری</label>
          <input type="text"></input>
          <label>رمز عبور</label>
          <input type="password"></input>
          <button onClick={()=>setIsLogin(true)}>ورود</button>
        </div>
      }
    </div>
  );
}

export default Login;
