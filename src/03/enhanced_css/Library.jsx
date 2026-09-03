import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div className= "library-container">
            <Book name = "처음 만난 파이썬" numOfPage ={300} imgUrl ="https://image.yes24.com/goods/102485981/XL" />
            <Book name = "처음 만난 AWS" numOfPage ={400} imgUrl ="https://image.yes24.com/goods/136882448/XL" />
            <Book name = "처음 만난 리액트" numOfPage ={500} imgUrl ="https://image.yes24.com/goods/172506733/XL" />
            <Book name = "처음 만난 자바스크립트" numOfPage ={250} imgUrl ="https://image.yes24.com/momo/TopCate1076/MidCate010/107597186.jpg" />
            <Book name = "처음 만난 HTML/CSS" numOfPage ={180} imgUrl ="https://image.yes24.com/goods/101985361/XL" />


        </div>

    );
}

export default Library;