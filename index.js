import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for createRoot

const head = React.createElement('h1', { className: 'heading' }, 'Hello World');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(head);