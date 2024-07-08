import styled from "./textarea.module.css";

function Textarea(props) {
  return (
    <div className={styled.container}>
      <label>{props.label}</label>
      <textarea name={props.name} onChange={props.contentChange}></textarea>
    </div>
  );
}

export default Textarea;
