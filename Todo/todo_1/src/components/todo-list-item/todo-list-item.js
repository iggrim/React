import React from 'react';

import './todo-list-item.css'; // Webpack поддерживает импорт СSS файлов из JS модулей


const TodoListItem = ({ lbl, important }) => { // пропсы от todo-list.js
    
    const style = {
        color: important ? 'green' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      };
    // В html тег <span> предназначен для определения строчных элементов документа
    // Здесь кастомный стиль (style) перекрывает стиль bootstrup
    return (
        <span className='todo-list-item'>
            <span className='todo-list-item-label'
                style = {style}>
                {lbl}
            </span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
        );
}

export default TodoListItem;