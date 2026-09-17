import React from"react";
import Book from "./Book";
import "./BookList.css";


//데이터 배열

const books  = [
   {
       title:"처음 만난 리액트",
       author:"김소플",
       coverImage: "https://image.yes24.com/goods/172506733/XL"
   },
   {title:"데이터베이스실습",
       author:"박우창",
       coverImage: "https://image.yes24.com/goods/196285141/XL"},

   {title:"처음 만난 자바",
       author:"우재남",
       coverImage: "https://image.yes24.com/momo/TopCate1076/MidCate010/107597186.jpg"},

    {title:"난생 처음 c",
        author:"홍재홍",
        coverImage: "https://image.yes24.com/goods/105982127/XL"},

    {title:"처음 만난 html",
        author:"우우남",
        coverImage: "https://image.yes24.com/goods/101985361/XL"},

]


function BookList(){
    return(
        <div className ={"bookListWrapper"}>
            {books.map((book)=> {
                return (


                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}

                    />
                );
            })}


        </div>
    );

}
export default BookList;