import React from 'react';

import TodoListItem from './todo-list-item'

const TodoList = ({todos}) => { // дестректурируем пропсы от App (index.js)
    // todos - это массив объектов - [{lbl: "Drink Koffe", important: false},....]
    const elements = todos.map((item) => {
        // JSX поддерживает spread оператор когда имена,
        // свойств компонента совпадают с именами свойств объекта
        // то можно заменить, например, блок кода lbl = {todos[0].lbl} на
        // <TodoListItem lbl = {todos[0].lbl} /> на <TodoListItem {...item}
        return (
            <li><TodoListItem {...item}  /></li>      
        )
    })

    // return(
    //     <ul>
    //         <li><TodoListItem 
    //             lbl = {todos[0].lbl} 
    //             iportant = {todos[0].important} />
    //         </li>
    //         <li><TodoListItem 
    //             lbl = {todos[1].lbl} 
    //             important = {todos[1].important} />
    //         </li>
    //     </ul>
    // );
    return(
        <ul>
            {elements}
        </ul>
    )
};

export default TodoList;