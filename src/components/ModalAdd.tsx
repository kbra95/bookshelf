import *as React from 'react'
import axios from 'axios'
import {FormGroup,Label,Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link } from 'react-router-dom'
export interface IBook{
  bookName: string ,
  id: number,
  author:string,
  publisher:string
}
interface IModalProps{

}
interface IModalState{
    books :Array<IBook>,
    modal:boolean,
    book:IBook,
    editBook:IBook
}
//let url : string = "http://5cac55fcc85e05001452f25e.mockapi.io/api/v1/books";
class ModalApp extends React.Component<IModalProps,IModalState> {

componentWillUnmount(){

}
  constructor(props :IModalProps) {
    super(props);
    this.state = {
      modal: false,
      books:[],
      book:{
        bookName: '' ,
        id: 0,
        author:'',
        publisher:''
      },
      editBook:{
        bookName: '' ,
        id: 0,
        author:'',
        publisher:''
      }
    };

    this.toggleNewBookModal = this.toggleNewBookModal.bind(this);
  }


  toggleNewBookModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

addBook():void{

  axios.post("http://5cac55fcc85e05001452f25e.mockapi.io/api/v1/books" ,this.state.book).then((response) => {
    console.log(response.data) //it is work but page is needed to reload after adding
    let {books} = this.state;
    books.push(response.data)
    this.setState({ books, modal:false ,book:{
      bookName: '' ,
      id: 0,
      author:'',
      publisher:''
    }})
    alert("Kayıt Eklendi.");
    window.location.reload();
  });
}
  render(): JSX.Element {
    return (
      <Link to = '/create'>
      <div>
        <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleNewBookModal.bind(this)} >
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Modal title</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="name">Book Name</Label>
              <Input id="name" name={this.state.book.bookName} value={this.state.book.bookName} onChange={(e) =>{
                  let {book} = this.state
                  book.bookName = e.target.value;
                  this.setState({book})
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="author">Author</Label>
              <Input id="author" name={this.state.book.author} value={this.state.book.author} onChange={(e) =>{
                  let {book} = this.state
                  book.author = e.target.value;
                  this.setState({book})
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="pub">Publisher</Label>
              <Input id="pub" name={this.state.book.publisher} value={this.state.book.publisher} onChange={(e) =>{
                  let {book} = this.state
                  book.publisher = e.target.value;
                  this.setState({book})
                }
              }/>
            </FormGroup>

          </ModalBody>
          <ModalFooter>

            <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      </Link>
    );
  }
}

export default ModalApp;
