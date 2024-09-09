import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/utility.css'
import Home from './styles/Home'
import Header from './pages/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />    
    <Home />
  </StrictMode>,
)
