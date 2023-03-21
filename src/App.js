import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
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
