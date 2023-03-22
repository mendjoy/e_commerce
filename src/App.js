import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watches from './pages/Watches';
import Sunglasses from './pages/Sunglasses';
import Bags from './pages/Bags';
import Shoes from './pages/Shoes';
import ProductInfo from './pages/ProductInfo';

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
            <Route path='/watches' element={<Watches/>}/>
            <Route path='/sunglasses' element={<Sunglasses/>}/>
            <Route path='/bags' element={<Bags/>}/>
            <Route path='/shoes' element={<Shoes/>}/>
            <Route path='/product/:id' element={<ProductInfo/>}/>
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
