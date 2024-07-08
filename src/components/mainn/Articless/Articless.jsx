import { useParams } from "react-router-dom";
import styled from "./articless.module.css"

function Articless(props){    
    return(
        <div className={styled.container}>
            <img src={props.maghaleh.imageUrl}/>

            <h2>
                {props.maghaleh.title}
            </h2>
            <h3>
                {props.maghaleh.athor}
            </h3>
            <h4>
                زمان لازم برای مطالعه: {props.maghaleh.readingTime} دقیقه
            </h4>
            <h5>
                {props.maghaleh.date}
            </h5>
        </div>
    )
}

export default Articless;