import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './styles/tailwind.css'
import './i18n'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
