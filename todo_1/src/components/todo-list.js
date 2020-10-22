import React from 'react';

import TodoListItem from './todo-list-item';

import './todo-list.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

function TodoList({ todos }) {  // пропсы от index.js
    // todos - это массив объектов - [{lbl: "Drink Koffe", important: false},....]
    const elements = todos.map((item, ind) => {
        //const {id, ...itemProps} = item // иззвлекаем id

        // JSX поддерживает spread оператор для объектов. Когда имена,
        // свойств компонента совпадают с именами свойств объекта
        // то можно, например у нас по ходу итерации массива, заменить блок кода 
        // <TodoListItem lbl = {todos[0].lbl} /> на <TodoListItem {...item} и т.д.
        // т.е. взять каждое свойство из объекта item и передать его в качестве
        // атрибута вместе со значением в клмпонент
        // можно и так:
        // return (
        //     <li key={id}><TodoListItem {...itemProps}  /></li>      
        // )
        // а можно так
        return (
            <li key={ind} className='list-group-item'><TodoListItem {...item} /></li>
        );
    });

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
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    ); // в файле css сначала кастомный класс .todo-list затем класс bootsrup .list-group-item
}

export default TodoList;