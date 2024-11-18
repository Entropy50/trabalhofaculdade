import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/utility.css'
import Home from './pages/Home'
import Header from './components/header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />    
    <Home />
    <Footer />
  </StrictMode>,
)
