import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
