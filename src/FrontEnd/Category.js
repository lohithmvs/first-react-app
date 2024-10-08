import React from 'react';
import Widget from './Widget';

function Category({
  category, 
  removeWidget, 
  handleAddWidget, 
  newWidgetName, 
  setNewWidgetName, 
  newWidgetText, 
  setNewWidgetText 
}) {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget 
            key={widget.id} 
            widget={widget} 
            removeWidget={() => removeWidget(category.id, widget.id)} 
          />
        ))}
      </div>
      <input
        type="text"
        placeholder="Widget Name"
        value={newWidgetName}
        onChange={(e) => setNewWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={newWidgetText}
        onChange={(e) => setNewWidgetText(e.target.value)}
      />
      <button onClick={() => handleAddWidget(category.id)}>Add Widget</button>
    </div>
  );
}

export default Category;
