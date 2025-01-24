import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage/TodoPage';
import RegistPage from './pages/RegistPage/RegistPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar'
import Logout from './components/Logout/Logout'

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<TodoPage />}></Route>
                <Route path='/regist' element={<RegistPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
