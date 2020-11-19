import React, {Component} from 'react';

import AppHeader from '../app-header'; // если не указано имя ффайла, то webpack пытется подключить файл index.js из этой папки
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

export default class App extends Component {

    // const isLoggedIn = true;
    // const loginBox = <span>введите логин</span> ; //---Элемент // можно передавать в JSX через {}
    // const welcomBox = 'завершить сеанс'; // -----------Строка // можно передавать в JSX через {}

    maxId = 10;

    state = {
      todoData: [
        {lbl: "Drink Koffe", important:false, done:false, id:1},
        {lbl: "Make Awesome App", important: false, done:false, id:2},
        {lbl: "Have a lanch", important:false, done:false, id:3}
      ]
    };

    deleteItem = (id) => {
      //this.setState((state)=>{ // ---функция--- setState принимает на вход другую функцию параметром которой по умолчанию является объект описываюзий предыдущее состояние
      this.setState(({todoData})=>{ // сразу дестриктурируем state
        //const idx = todoData.findIndex((el)=>el.id===id);
        // todoData.splice(idx, 1); // плохая практика, нельзя менять существующий стейт
        //console.log(idx);
        const newArray = todoData.filter((el)=>el.id !== id);
          return {
            todoData: newArray
          }
      })
    }

    itemAdded = (text) =>{
      ///console.log('Added', newItem);
      const newItem = {lbl:text, important:false, id:this.maxId++};
      
      this.setState(({todoData})=>{ // ---функция--- setState
        const newArr = [...todoData, newItem];
        return{
          todoData: newArr     
        }
      })  
    }

    onToggleImportant = (id) =>{
      console.log('Toggle important',id);
    
    }

    onToggleDone = (id) => {
      
      this.setState(({todoData})=>{
        const idx = todoData.findIndex((el)=>el.id === id)
        //const newArrayFilter = todoData.filter((el)=>el.id === id);
        //newArrayFilter[0].done = !newArrayFilter[0].done // так делать нельзя, хотя мы создаем новый массив но объект в новом массиве имеет связь с объектом в старом массиве, изменения одного отразятся на другом
    //console.log(newArray);
    //const newArray = [...todoData]; // делаем копию массива
    const oldItem = todoData[idx];
	//1. Изменяем в объекте значение свойства done
    const newItem = {...oldItem, done:!oldItem.done};

  //2. Изменяем массив
  const newArr = [...todoData]; // несвязанная копия предыдущего состояния
  newArr.splice(idx,1, newItem);		
  //console.log(todoData);
  //console.log(newArr);
        
        return{
            todoData:newArr
        }
      });
    };
    
    render(){
      return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <TodoList 
            todos={this.state.todoData} 
            onDeleted={this.deleteItem}
            onToggleImportant = {this.onToggleImportant}
            onToggleDone = {this.onToggleDone}/>

          <ItemAddForm itemAdded = {this.itemAdded}/>
        </div>
      );
    }
    
};

//export default App;