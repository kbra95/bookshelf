import *as React from 'react';
import BookList from '../components/BookList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ModalAdd from '../components/ModalAdd'
export interface IBook{
  bookName: string ,
  id: number,
  author:string,
  publisher:string
}

interface IAppProps{
id:number

}
interface IAppState{
  books: Array<IBook>,
  searchField:string
}
class App extends React.Component<IAppProps,IAppState> {
  constructor(props:IAppProps){
    super(props)
    this.state = {
      books: [],
      searchField:''
    }
  }
  onSearchChange =(event : React.SyntheticEvent<HTMLInputElement>):void =>{
    this.setState({searchField: event.currentTarget.value})
  }
  componentDidMount() :void{
    fetch('http://5cac55fcc85e05001452f25e.mockapi.io/api/v1/books')
      .then(response => response.json())
      .then(data => this.setState({ books:data }));
  }
  render() : JSX.Element {
    const filteredBooks = this.state.books.filter(book =>{
      return book.bookName.toLowerCase().includes(this.state.searchField.toLowerCase())
    });
    if(this.state.books.length ===0){
      return <h1>Loading</h1>
    }else {
      return (
        <div className='tc App container'>
          <div >

              <ModalAdd />
              <SearchBox searchChange={this.onSearchChange.bind(this)} />
          </div>
          <Scroll>
             <BookList books={filteredBooks}/>
          </Scroll>
        </div>
      );
    }

  }
}

export default App;
