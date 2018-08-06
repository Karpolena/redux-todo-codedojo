import React, {Component} from 'react';
import Todo from './Todo';


function List(props) {
        return (
            <section className='todo-list'>
                {props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed.bind(this)}
                        onDelete={props.onDelete}
                        onToggle={props.onToggle}
                        onEdit={props.onEdit}
                    />)
                }
            </section>
        );
     }
    

