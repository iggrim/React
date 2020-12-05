import React, {Component} from 'react';

import './search-panel.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

export default class TodoSearchPanel extends Component{
  

  onSearchCange = (e) => {
    const {onSearch} = this.props;
    
    onSearch(e.target.value);
  };

  render(){
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search" 
                onChange={this.onSearchCange}/>
      );
    };
  };
