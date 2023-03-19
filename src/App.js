import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Login from './pages/Login';

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
          </Routes> 
        </div>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
