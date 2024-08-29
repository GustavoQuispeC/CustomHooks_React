import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from './App.jsx'
import "./index.css";
//import TodoApp from "./useReducer/TodoApp";
// import CounterApp from "./useState/CounterApp.jsx";
// import CounterWithCustomHook from "./useState/CounterWithCustomHook.jsx";
// import SimpleForm from "./useEffect/SimpleForm.jsx";
// import FormWithCustomHook from "./useEffect/FormWithCustomHook.jsx";
// import MultipleCustomHook from "./examples/MultipleCustomHook.jsx";
// import FocusScreeen from "./useRef/FocusScreeen.jsx";
// import Memorize from "./Memo/Memorize.jsx";
// import MemoHook from "./Memo/MemoHook.jsx";
// import CallbackHook from "./Memo/CallbackHook.jsx";
// import { Padre } from "./tarea-memo/Padre.jsx";
// import './useReducer/intro-reducer'
import MainApp from "./useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/* <StrictMode> */}
    <MainApp />
    {/* <TodoApp />
    
    <Padre/>
    <br />
    <CallbackHook />
    <br />
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
    <FormWithCustomHook /> */}
  {/* </StrictMode> */}
  </BrowserRouter>
  
);
