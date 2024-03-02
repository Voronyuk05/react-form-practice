import { Component } from "react"
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { nanoid } from "nanoid";
import initialTodos from '../todo.json'
import { Container } from "./App.styled";
import { TodoList } from "components/TodoList/TodoList"
import { TodoEditor } from "components/TodoEditor/TodoEditor";
import { Filter } from "components/Filter/Filter";
import { Info } from "components/Info/Info";
import { Modal } from "components/Modal/Modal";
import { Btn } from "components/Btn/Btn";

export class App extends Component{

  state={
    showModal: false,
    todos: initialTodos,
    filter: '',
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todos)
    if (parsedTodos) {
      this.setState({
        todos: parsedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  componentWillUnmount() {
    console.log('Компонент розмонтувався');
  }

  handleDelete = (todoId) => {
    this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  handleCompletedChange = (todoId) => {
    this.setState(prevState => ({
        todos: prevState.todos.map(todo => 
          todo.id === todoId ? {...todo, completed: !todo.completed} :  todo
        )
    }))
  }

  handleFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  visibleTodos = () => {
    return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  handleAddTodo = (text) => {
    const newToDo = {
      text,
      completed: false,
      id: nanoid(),
    }

    this.setState((prevState)=>{
      return{
        todos: [newToDo, ...prevState.todos]
      }
    })

    this.toggleModal()
  }

  toggleModal = () => {
    console.log(this.state.showModal);
    this.setState(prev => ({showModal: !prev.showModal}))
  }


  render(){
    return(
      <Container>
      <Btn buttonFunc={this.toggleModal}><FaPlus /></Btn>
      {this.state.showModal && 
        <Modal onClose={this.toggleModal}>
          <Btn buttonFunc={this.toggleModal}><IoMdClose /></Btn>
          <TodoEditor handleAddTodo={this.handleAddTodo}/>
        </Modal>
      }
        <Info  initialTodos={this.state.todos}/>
        <Filter filter={this.state.filter} handleFilterChange={this.handleFilterChange} />
        {this.state.todos && <TodoList  initialTodos={this.visibleTodos()} handleCompletedChange={this.handleCompletedChange} handleDelete={this.handleDelete} handleAddTodo={this.handleAddTodo}/>}
      </Container>
    )
  }
}