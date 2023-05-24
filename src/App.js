import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import FinalCart from './Pages/Cart/FinalCart';
import AboutUs from './Pages/About Us/AboutUs';
import PrivacyPolicy from './Pages/Privacy Policy/PrivacyPolicy';
import SignIn from './Components/SignIn/SignIn';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Components/Signup/Signup';
import AddOns from './Pages/AddOns/AddOns';
import Header from './Components/Header/Header';
import Profile from './Pages/Profile/Profile';
import MyOrders from './Pages/MyOrders/MyOrders';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<FinalCart />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addons' element={<AddOns />} />
          <Route path='/header' element={<Header />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme='colored' />
    </div>
  );
}

export default App;
