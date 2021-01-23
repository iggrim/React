import React, {Component} from 'react';

import './todo-list-item.css'; // Webpack поддерживает импорт СSS файлов из JS модулей


// export default class TodoListItem extends React.Component{
export default class TodoListItem extends Component{
    
    // constructor(){
    //     super();
    //     this.onLabelClick = ()=> { // (2-ой способ) создаем функцию  в конструкторе класса
    //         console.log(`Done: ${this.props.lbl}`);     
    //     }
    // }
    
    // onLabelClick() { // создаем функцию на прототипе класса
    //     console.log(`Done: ${this.props.lbl}`);     
    // }

    onLabelClick = ()=> { // (3-й способ) создаем функцию на прототипе класса
        console.log(`Done: ${this.props.lbl}`);     
    }

    // функция render() отображает компонент
    // render() не принимает на вход значения props
    // все свойств получаем через this.props внутри функции
    render(){ 
        const { lbl, important } = this.props;  // пропсы от todo-list.js
        const style = {
            color: important ? 'green' : 'black',
            fontWeight: important ? 'bold' : 'normal'
          };
        // В html, тег <span> предназначен для определения строчных элементов документа
        // Здесь кастомный стиль (style) перекрывает стиль bootstrup
        // (1-й способ) Если onClick = {this.onLabelClick.bind(this)}>, то каждый раз, за счет bind, при render создается новая функция
        // без bind потеря контекста
        return (
            <span className='todo-list-item'>
                <span className='todo-list-item-label'
                    style = {style}
                    onClick = {this.onLabelClick}>
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
}

// const TodoListItemFunc = ({ lbl, important }) => { // пропсы от todo-list.js
    
//     const style = {
//         color: important ? 'green' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//       };
//     // В html тег <span> предназначен для определения строчных элементов документа
//     // Здесь кастомный стиль (style) перекрывает стиль bootstrup
//     return (
//         <span className='todo-list-item'>
//             <span className='todo-list-item-label'
//                 style = {style}>
//                 {lbl}
//             </span>

//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation" />
//             </button>

//             <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//         );
// }

// export default TodoListItem;