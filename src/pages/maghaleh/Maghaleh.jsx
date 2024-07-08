import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import styled from "./maghaleh.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

function Maghaleh(){
    
    const [isLoading, setIsLoading] = useState(false);

    const [article, setArticle] = useState({});

    const params = useParams();

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`http://localhost:8000/articles/${params.id}`)
            .then(result => {
                setArticle(result.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    },[]);


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
                <div className={styled.contain}>
                    {isLoading?(<Spinner/>):(
                        <div>
                            <div className={styled.div1}>
                                <img src={article.imageUrl}/>
                                <h2>{article.title}</h2>
                                <h3>{article.athor}</h3>
                                <h4>زمان لازم برای مطالعه: {article.readingTime} دقیقه</h4>
                                <h5>{article.date}</h5>
                            </div>
                            <div className={styled.div2}>
                                <p>{article.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div> 
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default Maghaleh;