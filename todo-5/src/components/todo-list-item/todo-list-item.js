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
    
    // onLabelClick() { // создаем функцию в прототипе класса
    //     console.log(`Done: ${this.props.lbl}`);     
    // }

    // state = {  // 2-й способ
    //     done: false,
    //     important: false
    // };

    // onLabelClick = () => { // (3-й способ) создаем функцию в прототипе класса
    //     //console.log(`Done: ${this.props.lbl}`);    
    //     // при каждом изменении стейта реакт запускает Reconciliation Algorithm (алгоритм согласования) и вызывается функция render для обновления ---только измененных--- параметров
    //     // ----setState работает асинхронно, поэтому когда новое состояние зависит от предыдущего в аргумент передаем функцию которая выполнится тогда, когда стейт будет иметь финальное состояние, иначе в setState можно сразу передать объект----
    //     this.setState((state)=>{ // setState принимает функцию возвращающую объект state, входящий параметр этой функции-объект state  с предыдущим состоянием
    //         return {
    //             done: !state.done
    //         }
    //     })
    // }
    
    // setState принимает только ту часть стейта, которая должна измениться
    // -----setState работает асинхронно-----
    // onMarkImportant = () => {         
    //     this.setState({
    //         important: true
    //     })
    // }

    // onMarkImportant = () => {         
    //     this.setState((state)=>{
    //         return {
    //             important: !state.important
    //         }
    //     })
    // }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();  
    };

    state = {
        editing: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        // Когда реф передаётся элементу в методе render, 
        // ссылка на данный узел доступна через свойство рефа current.
        const lbl = this.myRef.current.value;
        //console.log(lbl);
        this.props.onEdit(lbl);
        
        this.setState({editing: false})
    };

    renderDisplay = () =>{
        const { lbl, onDeleted,
            onToggleImportant, 
            onToggleDone,
            important,
            done } = this.props;  // пропсы от todo-list.js
        //const { done, important } = this.state;
        //console.log(this.props);
        
        
        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done'; // здесь важен пробел перед done
        }

        if(important){
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-left"
                    onClick={()=>this.setState({editing:true})}>
                    <i className="fa fa-pencil" aria-hidden="true" />
                </button>

                <span className='todo-list-item-label'
                    /*style = {style}*/
                    onClick = {onToggleDone}>
                    {lbl}
                </span>
    
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>{/*событие будет обрабатываться родительским компонентом*/}
                    <i className="fa fa-trash-o" />
                </button>
            </span>
            );
    };

    renderForm = () => {
        return (
            <form className="todo-edit-form" onSubmit={this.onSubmit}>
                <input type="text" ref={this.myRef} defaultValue={this.props.lbl} />
                <button
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-floppy-o" aria-hidden="true" />
                </button> 
            </form>
        );
    };

    // функция render() отображает компонент
    // render() не принимает на вход значения props
    // все свойств получаем через this.props внутри функции
    render(){ 
        

        // const style = {
        //     color: important ? 'green' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        //   };

        

        // В html, тег <span> предназначен для определения строчных элементов документа
        // Здесь кастомный стиль (style) перекрывает стиль bootstrup
        // (1-й способ) Если onClick = {this.onLabelClick.bind(this)}>, то каждый раз, за счет bind, при render создается новая функция
        // без bind потеря контекста
        return this.state.editing ? this.renderForm() : this.renderDisplay();
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