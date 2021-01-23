import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

function TodoList({ todos, onDeleted, onToggleImportant, onToggleDone, onEdit }) {  // пропсы от index.js
    // todos - это массив объектов - [{lbl: "Drink Koffe", important: false},....]
    
    //console.log(searchText);
            
	// const elements = todos.map((item, ind) => {
    //    const {id, ...itemProps} = item // иззвлекаем id
	
    const elements = todos.map((item, ind) => {
        // 
        const {id, ...itemProps} = item // извлекаем id
           
        // JSX поддерживает spread оператор для объектов. Когда имена,
        // свойств компонента совпадают с именами свойств объекта
        // то можно, например, у нас по ходу итерации массива, заменить блок кода 
        // <TodoListItem lbl = {todos[0].lbl} important = {todos[0].important} и т.д. /> 
        // на <TodoListItem {...item} 
        // т.е. взять каждое свойство из объекта item и передать его в качестве
        // атрибута вместе со значением в компонент
        //
        // return (
        //     <li key={id}><TodoListItem {...itemProps}  /></li>      
        // )
        // 
        return (
            /*<li key={ind} className='list-group-item'><TodoListItem {...item} /></li>*/
            <li key={id} className='list-group-item'>
                <TodoListItem 
                    {...itemProps} 
                    
                    onDeleted={()=>onDeleted(id)/*событие вызовет функцию onDeleted в родительскои компоненте */}
                    onToggleImportant = {()=>onToggleImportant(id)} 
                    onToggleDone = {()=>onToggleDone(id)}
                    onEdit = {(lbl)=>onEdit(id,lbl)}
                    />
            </li>
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