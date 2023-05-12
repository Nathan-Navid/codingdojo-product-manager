import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ProductForm from './Components/ProductForm';
import Home from './Components/Home';
import Navigate from './Components/Navigate';
import ProductDetails from './Components/ProductDetails';
import ProductUpdate from './Components/ProductUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ProductDetails/>} />
          <Route path='/new' element={<ProductForm />} />
          <Route path='/edit/:id' element={<ProductUpdate/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
