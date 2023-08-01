
import './App.css';
import Navbaar from './components/Navbar/Navbaar.js';
import Newnav from './components/Newnav/Newnav.js';
import Maincomponent from './components/home/Maincomponent.js';
import Footer from './components/footer/Footer';
import SignIn from './components/signUp signIn/SignIn';
import SignUp from './components/signUp signIn/SignUp';
import {Routes,Route} from "react-router-dom";
import Cart from "./components/cart/Cart"
import Buynow from "./components/buynow/Buynow"

function App() {
  return (
    <>

      <Navbaar />
      <Newnav />
      <Routes>
        <Route path='/' element={<Maincomponent/>} />
        <Route path='/login' element={<SignIn/>} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/getproductsone/:id' element={<Cart/>} />
        <Route path='buynow' element={<Buynow/>}/>
      </Routes>
      {/* <Maincomponent/>  this is not needed becuase of routing*/}
      <Footer/>
    </>
  );
}

export default App;
