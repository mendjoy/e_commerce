import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watches from './pages/Watches';
import Sunglasses from './pages/Sunglasses';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bags from './pages/Bags';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/watches' element={<Watches/>}/>
            <Route path='/sunglasses' element={<Sunglasses/>}/>
            <Route path='/bags' element={<Bags/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes> 
        </div>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
