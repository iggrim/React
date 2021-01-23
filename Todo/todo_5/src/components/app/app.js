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


    onItemAdded = (text) =>{
      ///console.log('Added', newItem);
      const newItem = {lbl:text, important:false, done: false, id:this.maxId++};
      
      this.setState(({todoData})=>{ // ---функция--- setState
        const newArr = [...todoData, newItem];
        return{
          todoData: newArr     
        }
      })  
    }


    onEdit = (id,lbl)=>{
      this.setState(({todoData})=>{
        const idx = todoData.findIndex((el)=>el.id === id)
        const oldItem = todoData[idx];
        //console.log(lbl);
        const newItem = {...oldItem, lbl};
         //2. Изменяем массив
         const newArr = [...todoData]; // копия массива
         newArr.splice(idx, 1, newItem);		
                 
         return{
             todoData:newArr
         }
      });
    };


    onToggleProp = (id,item) => {
      this.setState(({todoData})=>{
        const idx = todoData.findIndex((el)=>el.id === id)
        //const newArrayFilter = todoData.filter((el)=>el.id === id);
        //console.log(newArray);
        const oldItem = todoData[idx];
	      //1. Изменяем в объекте значение свойства done
        const newItem = {...oldItem, [item]:!oldItem[item]};

        //2. Изменяем массив
        const newArr = [...todoData]; // копия массива
        newArr.splice(idx, 1, newItem);		
                 
        return{
            todoData:newArr
        }
      });
    };


    onToggleImportant = (id) =>{
      this.onToggleProp(id,'important');
    };


    onToggleDone = (id) => {
      this.onToggleProp(id,'done');
    };


    searchText = ''; // строка поиска для TodoList

    onSearch = (text) => { // функция для SearchPanel
      console.log(text);
        this.searchText = text;
        //console.log(this.searchText);
        this.setState(({todoData}) => { // обновление состояния 
          return{todoData}
        });
    };


    activeStateBtn = '';
    
    onActive = (param)=>{
      this.activeStateBtn = param;
      this.setState(({todoData}) => { // обновление состояния 
          return{todoData}
        });
    };
   
    
    render(){
      //console.log(this.state.todoData);
      const countDown = this.state.todoData
                    .filter((el)=>el.done).length;
      const todoCount =  this.state.todoData.length - countDown  ;         
      //console.log(countDown); 
      return (
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={countDown} />
          <div className="top-panel d-flex">
            <SearchPanel onSearch={this.onSearch}/>
            <ItemStatusFilter onActive={this.onActive} classParam={this.activeStateBtn}/>
          </div>
    
          <TodoList 
            searchText = {this.searchText}
            activeStateBtn = {this.activeStateBtn}
            todos={this.state.todoData} 
            onDeleted={this.deleteItem}
            onToggleImportant = {this.onToggleImportant}
            onToggleDone = {this.onToggleDone}
            onEdit = {this.onEdit}/>

          <ItemAddForm onItemAdded = {this.onItemAdded}/>
        </div>
      );
    }
    
};

//export default App;