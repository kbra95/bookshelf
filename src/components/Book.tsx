import *as React  from 'react'
import {Link} from 'react-router-dom'
interface CardStatelessProps{
  bookName: string ,
  id: number,
  author:string,
  publisher:string
}
const Book: React.SFC<CardStatelessProps> = ({id,bookName,author,publisher}) =>{
  return (

    <Link to={`/${id}`}>
    <div className = 'col-xs-4 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img style={{width:"30", height:"30"}} alt ='books' src={`https://robohash.org/${id}`}/>
      <div>
        <h1>{bookName}</h1>
        <h2>Author: {author}</h2>
        <p>Publisher: {publisher}</p>
      </div>
    </div>
    </Link>
  )
}

export default Book
