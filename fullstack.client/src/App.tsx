import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage/TodoPage';
import Navbar from './components/Navbar/Navbar'

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<TodoPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
