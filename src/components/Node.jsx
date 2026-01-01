import React from 'react';

const Node = ({ data, onAdd, onDelete, onEdit, isRoot }) => {
  return (
    <div className="node-container">
      {/* Node Box [cite: 19, 21, 22] */}
      <div className={`node-card ${data.type.toLowerCase()}`}>
        <input 
          className="node-input"
          value={data.label}
          onChange={(e) => onEdit(data.id, e.target.value)}
        />
        <div className="node-type-label">{data.type}</div>

        <div className="node-actions">
          {/* Requirement[cite: 36, 38]: Logic for Action/Branch nodes */}
          {data.type !== 'End' && (
            <>
              <button className="btn-add" onClick={() => onAdd(data.id, 'Action')}>+ Action</button>
              <button className="btn-add" onClick={() => onAdd(data.id, 'Branch')}>+ Branch</button>
              <button className="btn-add" onClick={() => onAdd(data.id, 'End')}>+ End</button>
            </>
          )}
          {!isRoot && (
            <button className="btn-add btn-del" onClick={() => onDelete(data.id)}>Delete</button>
          )}
        </div>
      </div>

      {/* Show connection line if children exist  */}
      {data.children.length > 0 && <div className="line-vertical" />}

      {/* Recursive Rendering [cite: 5] */}
      {data.children.length > 0 && (
        <div className="children-container">
          {data.children.map((child) => (
            <div key={child.id} className="node-container">
              {/* Branch vertical line */}
              <div className="line-vertical" style={{position: 'absolute', top: '-40px'}} />
              <Node 
                data={child} 
                onAdd={onAdd} 
                onDelete={onDelete} 
                onEdit={onEdit} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Node;