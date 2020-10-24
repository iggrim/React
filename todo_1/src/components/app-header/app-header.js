import React from 'react';

import './app-header.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;