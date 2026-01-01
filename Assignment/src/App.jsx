import React, { useState } from 'react';
import Node from './components/Node';
import './App.css';

function App() {
  const [workflow, setWorkflow] = useState({
    id: 'root',
    type: 'Action',
    label: 'Start',
    children: []
  });

  const [history, setHistory] = useState([]);

  // Bonus: Save state for Undo 
  const saveToHistory = () => {
    setHistory([...history, JSON.stringify(workflow)]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const lastState = history[history.length - 1];
    setWorkflow(JSON.parse(lastState));
    setHistory(history.slice(0, -1));
  };

  const addNode = (parentId, type) => {
    saveToHistory();
    const newNode = {
      id: crypto.randomUUID(),
      type,
      label: `New ${type}`,
      children: []
    };

    const update = (node) => {
      if (node.id === parentId) return { ...node, children: [...node.children, newNode] };
      return { ...node, children: node.children.map(update) };
    };
    setWorkflow(update(workflow));
  };

  const deleteNode = (nodeId) => {
    saveToHistory();
    const remove = (node) => {
      const idx = node.children.findIndex(c => c.id === nodeId);
      if (idx !== -1) {
        const deleted = node.children[idx];
        const newChildren = [...node.children];
        // Requirement: Parent connects to deleted node's children
        newChildren.splice(idx, 1, ...deleted.children);
        return { ...node, children: newChildren };
      }
      return { ...node, children: node.children.map(remove) };
    };
    setWorkflow(remove(workflow));
  };

  const editNode = (id, label) => {
    const update = (node) => {
      if (node.id === id) return { ...node, label };
      return { ...node, children: node.children.map(update) };
    };
    setWorkflow(update(workflow));
  };

  return (
    <div className="canvas">
      <div className="toolbar">
        <button className="btn-add" onClick={undo} disabled={history.length === 0}>Undo</button>
        <button className="btn-add" style={{backgroundColor: '#2563eb', color: 'white'}} onClick={() => console.log(workflow)}>
          Save to Console
        </button>
      </div>

      <Node 
        data={workflow} 
        onAdd={addNode} 
        onDelete={deleteNode} 
        onEdit={editNode} 
        isRoot={true} 
      />
    </div>
  );
}

export default App;