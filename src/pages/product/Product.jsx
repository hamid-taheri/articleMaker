import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import styled from "./product.module.css";
import { useContext, useState } from "react";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import Nproduct from "../../components/nproduct/Nproduct";
import { AppContext } from "../../App";

function Product() {
  const [article, setArticle] = useState({
    id: "",
    imageUrl: "",
    title: "",
    athor: "",
    readingTime: "",
    date: "",
    content: "",
  });

  const handleChangeArticle = (event) => {
    setArticle((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(article);
  };

  const handelChangeContent = (event) => {
    setArticle((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
    console.log(article);
  };

  const handelChangeProduct = () => {
    axios.post("http://localhost:8000/articles", {
      id: article.id,
      imageUrl: article.imageUrl,
      title: article.title,
      athor: article.athor,
      readingTime: article.readingTime,
      date: article.date,
      content: article.content,
    });
    alert("مقاله شما ساخته شد. برای مشاهده آن به بانک مقالات مراجعه نمایید.");
  };

  const{isLogin} = useContext(AppContext)

  return (
    <div className={styled.container}>
      <div className={styled.title}>
        <Title />
      </div>
      <div className={styled.header}>
        <Header />
      </div>
      <div className={styled.sidebar}>
        <Sidebar />
      </div>
      <div className={styled.main}>

      {
        isLogin
        ?
        <div>
          <Input
            label="شناسه"
            name="id"
            handelChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="آدرس تصویر"
            name="imageUrl"
            handelChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="عنوان"
            name="title"
            handelChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="نویسنده"
            name="athor"
            handelChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="زمان مطالعه"
            name="readingTime"
            handelChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="تاریخ"
            name="date"
            handelChange={handleChangeArticle}
            type="text"
          />
          <Textarea
            label="متن"
            name="content"
            contentChange={handelChangeContent}
          />
          <Button handelClick={handelChangeProduct} />
        </div>
        :
        <div>
          <Nproduct/>
        </div>
      }   

      </div>
      <div className={styled.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Product;
