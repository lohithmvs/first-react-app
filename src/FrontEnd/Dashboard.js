import React, { useState } from 'react';
import Category from './Category';
function Dashboard({ data, addWidget, removeWidget }) {
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddWidget = (categoryId) => {
    const widget = {
      id: Date.now(),
      name: newWidgetName,
      text: newWidgetText
    };
    addWidget(categoryId, widget);
    setNewWidgetName('');
    setNewWidgetText('');
  };

  const filteredCategories = data.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div>
      <input
        type="text"
        placeholder="Search Widgets"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredCategories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div>
            {category.widgets.map(widget => (
              <div key={widget.id}>
                <h3>{widget.name}</h3>
                <p>{widget.text}</p>
                <button onClick={() => removeWidget(category.id, widget.id)}>Remove</button>
              </div>
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
      ))}
    </div>
  );
}

export default Dashboard;
