import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import CounterApp from './useState/CounterApp.jsx'
import CounterWithCustomHook from './useState/CounterWithCustomHook.jsx'
import SimpleForm from './useEffect/SimpleForm.jsx'
import FormWithCustomHook from './useEffect/FormWithCustomHook.jsx'
import MultipleCustomHook from './examples/MultipleCustomHook.jsx'
import FocusScreeen from './useRef/FocusScreeen.jsx'
import Memorize from './Memo/Memorize.jsx'
import MemoHook from './Memo/MemoHook.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoHook />
    <br />
    <Memorize />
    <br />
    <FocusScreeen />
    <br />
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
