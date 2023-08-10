import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

export function renderApp(element: HTMLElement) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <div className="App">
      </div>
    </React.StrictMode>,
  );
}