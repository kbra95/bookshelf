import *as React from 'react'
import { RouteComponentProps } from 'react-router-dom';

import {IBook} from '../containers/App'


interface IDetailProps extends RouteComponentProps<{id: string}> {

}

interface IDetailState {
    id:string,
    book:IBook
}

class Details extends React.Component<IDetailProps,IDetailState> {
  componentDidMount() :void{
    fetch('http://5cac55fcc85e05001452f25e.mockapi.io/api/v1/books/' + this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState({ book:data }));
  }
  constructor (props:IDetailProps){
    super(props)
    this.state={
      id: this.props.match.params.id,
      book:{
        bookName:''  ,
        id: 0,
        author:'',
        publisher:''
      }
    }

  }
  render(){
    return(
      <div>
        <h1>here we go : Detail of id ==== {this.state.id}</h1>
        <h1>{this.state.book.bookName}</h1>
        <h2>Author: {this.state.book.author}</h2>
        <p>Publisher: {this.state.book.publisher}</p>
      </div>
    )

  }
}
export default Details
