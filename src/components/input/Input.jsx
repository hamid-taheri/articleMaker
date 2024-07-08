import styled from "./input.module.css";

function Input(props){
    return(
        <div className={styled.container}>
            <label>{props.label}</label>
            <input name={props.name} onChange={props.handelChange} type={props.type}></input>
        </div>
    )
}

export default Input;