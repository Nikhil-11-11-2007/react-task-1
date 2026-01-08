import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Error from './pages/Error';

const App = () => {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
