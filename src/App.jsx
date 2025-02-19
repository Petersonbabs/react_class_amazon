import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import UserProfile from "./components/UserProfile"
import Landingpage from "./pages/Landingpage"
import Notfound from "./components/Notfound"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Toaster } from "sonner"
import Dashboard from "./pages/(protected)/Dashboard"

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Navbar />
        <Toaster richColors visibleToasts={1} position="top-right" closeButton />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<SingleProduct />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>

        {/* protected pages */}
        <Route path="/dashboard" element={<Dashboard />}/>


        <Route path="*" element={<Notfound />}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App