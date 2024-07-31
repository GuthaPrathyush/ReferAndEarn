import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Refer from './components/Refer';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import NavHeader from './components/NavHeader';
import {Toaster} from 'react-hot-toast';



    function App() {
        return(
            <>
                <Toaster position="bottom-center" toastOptions={{style: {color: "#1A73E8"}}}/>
                <BrowserRouter>
                    <NavHeader/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/refer" element={<Refer/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </>
        );
    }

export default App
