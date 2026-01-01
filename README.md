# Workflow Builder UI - Frontend Assignment

A complex, interactive workflow builder built with React. This application allows users to design dynamic logical flows using a visual tree-based interface.

## 🚀 Live Demo
**Link:** [https://emitrr-frontend-assignment.vercel.app/](https://emitrr-frontend-assignment.vercel.app/)

## 🛠️ Tech Stack & Architecture
- **React (Vite)**: Utilized functional components and custom hooks for reactive state management.
- **Pure CSS**: All layouts, connection lines, and transitions are built using native CSS (Flexbox/Absolute positioning) to meet the "No UI Library" requirement.
- **Recursive Data Modeling**: Designed a scalable JSON/JavaScript tree structure to represent complex hierarchies of nodes and branches.

## ✨ Core Features
- **Node Types**: 
  - **Action**: A single sequential task.
  - **Branch**: A decision point with multiple outgoing paths (e.g., True/False).
  - **End**: Terminal point of a workflow.
- **Dynamic Interactions**:
  - Add nodes at any point in the flow.
  - Edit node titles/labels in real-time.
  - **Smart Deletion**: When a node is deleted, its parent automatically reconnects to its direct children to maintain a continuous flow.
- **Bonus Implementation**:
  - **State History (Undo)**: Implemented a history stack to allow users to revert structural changes.
  - **Data Export**: A "Save to Console" feature that logs the current workflow JSON structure for debugging or persistence.

## 📁 Project Structure
- `src/App.jsx`: Main state controller and logic for tree manipulation.
- `src/components/Node.jsx`: A recursive component that renders the tree structure infinitely deep.
- `src/App.css`: Custom styling for node representation and connection lines.

## ⚙️ Local Setup
1. Clone the repository: `git clone https://github.com/Hsr19/Emitrr_Frontend_Assignment.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`