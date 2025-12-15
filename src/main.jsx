import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { config } from './config.js'

document.title = config.title;
const link = document.querySelector("link[rel~='icon']");
if (link) link.href = config.logo;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
