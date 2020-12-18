import React, { Component } from 'react';

import './item-status-filter.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

export default class ItemStatusFilter extends Component{

  render(){
    const {onActive,classParam} = this.props;
    let classAll ='btn btn-info';
    let classDone = 'btn btn-outline-secondary';
    let classAct = 'btn btn-outline-secondary';

    if(classParam === 'active'){
        classAct = 'btn btn-info';
        classDone = 'btn btn-outline-secondary';
        classAll ='btn btn-outline-secondary';
    } else if(classParam === 'done'){
        classDone = 'btn btn-info';
        classAll ='btn btn-outline-secondary';
        classAct = 'btn btn-outline-secondary';
    } 
    //let classNames = 'btn-info';
    return (
      <div className="btn-group">
        <button type="button"
                className={classAll}
                onClick={()=>onActive('all')}>All</button>
        <button type="button"
                className={classAct}
                onClick={()=>onActive('active')}>Active</button>
        <button type="button"
                className={classDone}
                onClick={()=>onActive('done')}>Done</button>
      </div>
    );
  };
}

// const ItemStatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button"
//               className="btn btn-info">All</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Active</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Done</button>
//     </div>
//   );
// };

// export default ItemStatusFilter;