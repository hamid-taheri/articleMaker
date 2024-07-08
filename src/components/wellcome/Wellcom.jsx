import styled from "./wellcome.module.css"
import article from "../../images/article.png"

function Wellcome() {
    return (
        <div className={styled.wellcome}>
            <img src={article}/>
            <h3>
                به وب اپلیکیشن بانک مقالات و مقاله ساز خوش آمدید.
            </h3>
        </div>
    )
}

export default Wellcome;