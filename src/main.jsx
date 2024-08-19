import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import CounterApp from './useState/CounterApp.jsx'
import CounterWithCustomHook from './useState/CounterWithCustomHook.jsx'
import SimpleForm from './useEffect/SimpleForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
    <br />
    <CounterWithCustomHook />
    <br />
    <SimpleForm />
  </StrictMode>,
)
