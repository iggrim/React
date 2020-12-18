import React, { Component } from 'react';

import './item-status-filter.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

const nameBtn = [{name:'All'},
                  {name:'Active'}, 
                  {name:'Done'}]

export default class ItemStatusFilter extends Component{
  
  render(){
    const {nameFilter, filterBtn} =this.props
    console.log(filterBtn);

    const btn = nameBtn.map((item,id) =>{
      let clsName =
            (item.name===filterBtn) ? 'btn btn-info' :'btn btn-outline-secondary';
      return(
        <button key={item.name} type="button"
                className={clsName}
                onClick={()=>nameFilter(item.name)}>{item.name}</button>
      );
    });
    // return (
    //   <div className="btn-group">
    //     <button type="button"
    //             className='btn btn-info'>All</button>
                
    //     <button type="button"
    //             className='btn btn-outline-secondary'>Active</button>
    //     <button type="button"
    //             className='btn btn-outline-secondary'>Done</button>
    //   </div>
    // );
    return(
      <div className="btn-group">
        {btn}
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