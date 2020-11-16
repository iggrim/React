import React, {Component} from 'react';

import './todo-list-item.css'; // Webpack поддерживает импорт СSS файлов из JS модулей


// export default class TodoListItem extends React.Component{
export default class TodoListItem extends Component{
    // Вне конструктора ссылка super упрощает доступ к прототипу объекта
    // super — это указатель на текущий прототип объекта, фактически это значение Object.getPrototypeOf(this)
    // В конструкторе ключевое слово super() используется как функция, вызывающая родительский конструктор. 
    // Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. Ключевое слово super также может быть использовано для вызова функций родительского объекта. 
    // constructor(){ 
    //     super();
    //     this.state = { // 1-й способ
    //         done: false
    //     };
    // }
    
    // constructor(){
    //     super();
    //     this.onLabelClick = ()=> { // (2-ой способ) создаем функцию  в конструкторе класса
    //         console.log(`Done: ${this.props.lbl}`);     
    //     }
    // }
    
    // onLabelClick() { // создаем функцию на прототипе класса
    //     console.log(`Done: ${this.props.lbl}`);     
    // }

    state = {  // 2-й способ
        done: false,
        important: false
    };

    onLabelClick = () => { // (3-й способ) создаем функцию на прототипе класса
        //console.log(`Done: ${this.props.lbl}`);    
        // при каждом изменении стейта реакт запускает Reconciliation Algorithm (алгоритм согласования) и вызывается функция render для обновления ---только измененных--- параметров
        // ----setState работает асинхронно, поэтому когда новое состояние зависит от предыдущего в аргумент передаем функцию которая выполнится тогда, когда стейт будет иметь финальное состояние, иначе в setState можно сразу передать объект----
        this.setState((state)=>{
            return {
                done: !state.done
            }
        })
    }
    
    // setState принимает только ту часть стейта, которая должна измениться
    // -----setState работает асинхронно-----
    // onMarkImportant = () => {         
    //     this.setState({
    //         important: true
    //     })
    // }

    onMarkImportant = () => {         
        this.setState((state)=>{
            return {
                important: !state.important
            }
        })
    }



    // функция render() отображает компонент
    // render() не принимает на вход значения props
    // все свойств получаем через this.props внутри функции
    render(){ 
        const { lbl, onDeleted } = this.props;  // пропсы от todo-list.js
        const { done, important } = this.state;
        
        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done'; // здесь важен пробел перед done
        }

        // const style = {
        //     color: important ? 'green' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        //   };

        if(important){
            classNames += ' important';
        }

        // В html, тег <span> предназначен для определения строчных элементов документа
        // Здесь кастомный стиль (style) перекрывает стиль bootstrup
        // (1-й способ) Если onClick = {this.onLabelClick.bind(this)}>, то каждый раз, за счет bind, при render создается новая функция
        // без bind потеря контекста
        return (
            <span className={classNames}>
                <span className='todo-list-item-label'
                    /*style = {style}*/
                    onClick = {this.onLabelClick}>
                    {lbl}
                </span>
    
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>{/*событие будет обрабатываться родительским компонентом*/}
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