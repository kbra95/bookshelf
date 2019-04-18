import *as React from 'react'
import Book from './Book'
import {IBook} from '../containers/App'

const BookList = ({books} : {books:Array<IBook>})=>{
  const bookArray = books.map((user,i) =>{
    return(
      <Book
          key ={i}
          id ={books[i].id}
          bookName ={books[i].bookName}
          author ={books[i].author}
          publisher ={books[i].publisher} /> );
        });
  return (
    <div className='col-xs-2 '>
          {bookArray}

    </div>);

}
export default BookList
