import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import CounterApp from './useState/CounterApp.jsx'
import CounterWithCustomHook from './useState/CounterWithCustomHook.jsx'
import SimpleForm from './useEffect/SimpleForm.jsx'
import FormWithCustomHook from './useEffect/FormWithCustomHook.jsx'
import MultipleCustomHook from './examples/MultipleCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHook />
    <br />
    <CounterApp />
    <br />
    <CounterWithCustomHook />
    <br />
    <SimpleForm />
    <br />
    <FormWithCustomHook />
  </StrictMode>,
)
