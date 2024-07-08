import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Mainn from "../../components/mainn/Mainn";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import styled from "./maghaleha.module.css";

function Maghaleha(){
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
                <Mainn/>
            </div> 
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default Maghaleha;