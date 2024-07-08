import Contactus from "../../components/contactus/Contactus";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import styled from "./contact.module.css";

function Contact(){
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
                <Contactus/>
            </div> 
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default Contact;