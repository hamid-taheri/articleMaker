import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import Wellcome from "../../components/wellcome/Wellcom";
import styled from "./home.module.css";

function Home(){
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
                <Wellcome/>
            </div> 
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default Home;