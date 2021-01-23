import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';  // если не указано имя ффайла, то webpack пытется подключить файл index.js из этой папки

// import AppHeader from './components/app-header/'; // если не указано имя ффайла, то webpack пытется подключить файл index.js из этой папки
// import SearchPanel from './components/search-panel/';
// import TodoList from './components/todo-list/';
// import ItemStatusFilter from './components/item-status-filter/';

// import './index.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

// const el = (
//     <div>
//         <h1>Мой список дел</h1>
//         <input placeholder ='search' />
//         <ul>
//             <li>Learn React</li>
//             <li>Build Awesom App </li>
//         </ul>
//     </div> 
// );

/*
const el = <h1>Мой список дел</h1>
// Блок JSX кода создает реакт-элемент, который преобразуется в вызов функции обычного Javascript
React.createElement(h1, null, 'Мой список дел')
console.log(el);

"$$typeof": Symbol(react.element)  // ---для защиты от XSS атаки //---благодаря этому свойству скрипт не выполнится и отобразится как строка---------)
​_owner: null
​_self: null
​_source: Object { fileName: "F:\\Temp\\React\\Udemy\\pro-master-Bura\\todo_m\\src\\index.js", lineNumber: 4, columnNumber: 12 }
​_store: Object { … }
​key: null
​props: Object { children: "Мой список дел" }
​ref: null
​type: "h1"
​<prototype>: Object { … }

Почему у React элементов есть свойство $$typeof?
https://habr.com/ru/post/432350/

Свойству innerHTML в DOM браузера соответствует dangerouslySetInnerHTML в React. Как правило, вставка HTML из кода рискованна, так как можно случайно подвергнуть ваших пользователей атаке межсайтового скриптинга. Таким образом, вы можете вставить HTML непосредственно из React используя dangerouslySetInnerHTML и передать объект с ключом __html, чтобы напомнить себе, что это небезопасно

React 0.13 уязвим для подобной XSS атаки, но начиная с версии 0.14 каждый элемент помечается символом: $$typeof: Symbol.for('react.element'),

Подобная защита работает, потому что символы не являются валидным значением JSON. Поэтому, даже если сервер имеет потенциальную уязвимость и возвращает JSON вместо текста, JSON не может содержать Symbol.for('response.element'). React проверяет элемент на наличие element.$$typeof и откажется обрабатывать элемент, если он отсутствует или недействителен.
*/

// const TodoList = () => { // компонент
//     const items = ['1 Learn React','2 Build Awesom App'];
//     return(
//         <ul>
//             <li>{items[0]}</li>
//             <li>{items[1]}</li>
//         </ul>
//     );
// };

// const AppHeader = () => { // компонент
//     return <h1>Мой список дел</h1>;
// };

// const SearchPanel = () => { // компонент
//     return <input placeholder ='search' />;
// };

// Блок JSX кода создает реакт-элемент, который преобразуется в вызов функцииобычного Javascript - React.createElement(...)
// const el = ( // элемент
//     <div>
//         <AppHeader />
//         <SearchPanel />
//         <TodoList />
//     </div> 
// );  // <TodoList /> используем как отдельный кастомный html-тег (с большой буквы)

//ReactDOM.render(el, document.getElementById('root'));

// const App = () => {

//     // const isLoggedIn = true;
//     // const loginBox = <span>введите логин</span> ; //---Элемент // можно передавать в JSX через {}
//     // const welcomBox = 'завершить сеанс'; // -----------Строка // можно передавать в JSX через {}

//     const todoData = [
//         {lbl: "Drink Water", important: false,id:1},
//         {lbl: "Make Awesome App", important: true,id:2},
//         {lbl: "Have a lanch", important: false,id:3}
//     ]
//     return (
//         <div className="todo-app">
//           <AppHeader toDo={1} done={3} />
//           <div className="top-panel d-flex">
//             <SearchPanel />
//             <ItemStatusFilter />
//           </div>
    
//           <TodoList todos={todoData} />
//         </div>
//       );
// };

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render превращает React элементы в обычные браузерные DOM элементы и рендерит их на странице
