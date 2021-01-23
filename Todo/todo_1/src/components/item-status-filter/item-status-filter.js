import React from 'react';

import './item-status-filter.css';  // Webpack поддерживает импорт СSS файлов из JS модулей

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info">All</button>
      <button type="button"
              className="btn btn-outline-secondary">Active</button>
      <button type="button"
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;