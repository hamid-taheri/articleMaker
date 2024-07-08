import styled from "./article.module.css";
import image from "../../images/book.jpg";

function Article() {
  return (
    <div className={styled.container}>
      <div className={styled.div1}>
        <img src={image}/>
        <h2>عنوان</h2>
        <h3>حمید طاهری</h3>
        <h4>زمان لازم برای مطالعه: 5 دقیقه</h4>
        <h5>تاریخ</h5>
      </div>
      <div className={styled.div2}>
        <p>سلام علیکم متن</p>
      </div>
    </div>
  );
}

export default Article;
