import { useEffect, useState } from "react";
import Articles from "./Articles/Articles";
import styled from "./main.module.css";
import axios from "axios";

function Main(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        
        axios
        .get("http://localhost:8000/articles")
        .then((result) => {
            setArticles(result.data);
        });
    }, []);

    return(
        <div className={styled.main}>
            
            {
                articles.map((article) =>(
                    <Articles key={article.id}  maghaleh={article}/>
                ))
            }
           
        </div>
    )
}

export default Main;