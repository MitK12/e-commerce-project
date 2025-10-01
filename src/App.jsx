import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Cart from './pages/Cart'

import Checkout  from './pages/Checkout'
import Confirmation from './pages/Confirmation'




const App = () => {
  return (
   <div>
    <Navbar />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 min-h-[80vh] flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={< Products/>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/about'element= {< About/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />

        </Routes>
      </main>
    <Footer />
    
   </div>
  )
}

export default App