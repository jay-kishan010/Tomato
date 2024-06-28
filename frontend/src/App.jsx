
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
// import Sample from './pages/sample'
function App() {
 

  return (
    <>

    <div className="app">
      <Navbar/>
      <Routes>
      
        <Route path="/"  element={<Home/>}/>
        {/* <Route path="/"  element={<Sample/>}/> */}
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/order"  element={<PlaceOrder/>}/>
      </Routes>

    </div>
    <Footer/>

    </>
  )
}

export default App
