import { useEffect, useState } from "react";
import Articless from "./Articless/Articless";
import styled from "./mainn.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Mainn(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        
        axios
        .get("http://localhost:8000/articles")
        .then((result) => {
            setArticles(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <div className={styled.main}>
            
            {
                articles.map((article) =>(
                    <Link to={`/maghaleh/${article.id}`}>
                        <Articless key={article.id}  maghaleh={article}/>
                    </Link>
                ))
            }
           
        </div>
    )
}

export default Mainn;