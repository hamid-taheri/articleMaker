import Aboutus from "../../components/aboutus/Aboutus";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import styled from "./about.module.css";

function About(){
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
                    <Aboutus/>
                </div>
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default About;