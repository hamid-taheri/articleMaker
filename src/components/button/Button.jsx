import styled from "./button.module.css";

function Button(props){

    function handlerahnama(){
        alert("لطفاً به تعداد مقالاتی که در بانک مقالات وجود دارد یک عدد اضافه کنید و به عنوان شناسه در قسمت مربوطه وارد کنید.")
    }

    return(
        <div className={styled.container}>
            <button onClick={handlerahnama}>راهنما</button>
            <button onClick={props.handelClick} type={props.type}>ساخت مقاله</button>
        </div>
    )
}

export default Button;