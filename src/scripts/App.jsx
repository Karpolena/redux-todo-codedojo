import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

    }
    componentWillMount() {

    }

    componentDidMount() {
        
    }

    nextId() {
        // this._nextId = this._next || 4;
         this._nextId = JSON.stringify(Math.random() * (100000 - 100) + 100);
        return this._nextId++;
    }
    handleToggle(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            }
            return Object.assign({}, todo, {
                completed: !todo.completed
            });
        });
        this.setState({ todos});

    }
    handleAdd(title) {
        const todo = {
            id: this.nextId(),
            title,
            completed: false
        }
        const todos = [...this.state.todos, todo];
        this.setState({todos});
    }
    handleDelete(id) {
        const index = this.state.todos.findIndex(todo => todo.id === id);
        const todos = [
            ...this.state.todos.slice(0, index),
            ...this.state.todos.slice(index + 1)
        ];

        this.setState({ todos });
    }

    handleEdit(id, title) {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) {
                return todo;                
            }
            return Object.assign({}, todo, { title });
        });
        this.setState({ todos });
    }
    render(){
        return(
            <main className="main">
            <Header title={this.props.title} todos={this.state.todos} />
            <section className="todo-list">
                {this.state.todos.map(todo =>
                    <Todo 
                    key={todo.id} 
                    id={todo.id}
                    title={todo.title} 
                    completed={todo.completed} 
                    onStatusChange={this.handleToggle.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                    onEdit={this.handleEdit.bind(this)}
                    />)
                    
                }
            </section>
            <Form onAdd={this.handleAdd.bind(this)}/>
        </main>
        );
    }
}

 

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};
App.defaultProps = {
    title: "React Todo"
}


export default App;