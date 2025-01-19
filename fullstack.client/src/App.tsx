import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage/TodoPage';

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default App
