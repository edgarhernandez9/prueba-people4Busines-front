import React from 'react';
import {BlogProvider} from './context/BlogContext';
import ReactDOM from 'react-dom/client';
import './css/Global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
    
  </React.StrictMode>
);
