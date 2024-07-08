import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Login from "../../components/login/Login";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import styled from "./signup.module.css";

function Signup(){
    return(
        <div className={styled.container}>
            <div className={styled.title}>
                <Title/>
            </div>
            <div className={styled.header}>
                <Header/>
            </div>
            <div className={styled.sidebar}>
                <Sidebar/>
            </div>
                <div className={styled.main}>
                    <Login/>
                </div>
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default Signup;