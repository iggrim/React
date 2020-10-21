import React from 'react';

import TodoListItem from './todo-list-item'

const TodoList = ({todos}) => { // дестректурируем пропсы от App (index.js)
    // todos - это массив объектов - [{lbl: "Drink Koffe", important: false},....]
    const elements = todos.map((item, ind) => {
        //const {id, ...itemProps} = item
        
        // JSX поддерживает spread оператор для объектов. Когда имена,
        // свойств компонента совпадают с именами свойств объекта
        // то можно заменить, например у нас, блок кода lbl = {todos[0].lbl} на
        // <TodoListItem lbl = {todos[0].lbl} /> на <TodoListItem {...item}
        // т.е. взять каждое свойство из объекта item и передать его в качестве
        // атрибута вместе со значением в клмпонент
        // можно так:
        // return (
        //     <li key={ind}><TodoListItem {...itemProps}  /></li>      
        // )
        // а можно так
        return (
            <li key={ind}><TodoListItem {...item}  /></li>      
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