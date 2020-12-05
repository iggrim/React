import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

function TodoList({ todos, onDeleted, onToggleImportant, onToggleDone, onEdit, searchText }) {  // пропсы от index.js
    // todos - это массив объектов - [{lbl: "Drink Koffe", important: false},....]
    
    //console.log(searchText);
    let newData = todos // создаем новый массив исходя из строки поска
                    .filter((el)=>{   
                    console.log(el.lbl.indexOf(searchText));                  
                    return el.lbl.indexOf(searchText)>=0;
                    });     
        
 
    const elements = newData.map((item, ind) => {
        console.log(item); 
        const {id, ...itemProps} = item // иззвлекаем id
           
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