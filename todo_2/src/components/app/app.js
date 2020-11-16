import React from 'react';

import AppHeader from '../app-header'; // если не указано имя ффайла, то webpack пытется подключить файл index.js из этой папки
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

const App = () => {

    // const isLoggedIn = true;
    // const loginBox = <span>введите логин</span> ; //---Элемент // можно передавать в JSX через {}
    // const welcomBox = 'завершить сеанс'; // -----------Строка // можно передавать в JSX через {}

    const todoData = [
        {lbl: "Drink Koffe", important: false,id:1},
        {lbl: "Make Awesome App", important: true,id:2},
        {lbl: "Have a lanch", important: false,id:3}
    ]
    return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <TodoList todos={todoData} />
        </div>
      );
};

export default App;