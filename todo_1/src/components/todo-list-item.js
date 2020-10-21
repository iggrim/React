import React from 'react';

const TodoListItem = ({ lbl, important }) => { // компонент
    
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return <span style = {style}>{lbl}</span>;
}

export default TodoListItem;