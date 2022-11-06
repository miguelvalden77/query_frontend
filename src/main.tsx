import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Paquetes externos
import {BrowserRouter} from "react-router-dom"

// Componentes & Páginas
import { AuthWrapper } from './context/auth.context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </BrowserRouter>
  </React.StrictMode>
)
