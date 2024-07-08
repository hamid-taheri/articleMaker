import styled from "./articles.module.css"

function Articles(props){
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

export default Articles;