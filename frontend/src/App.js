
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Home } from './components/Home';
import {Price} from './components/Price';
import { Contact } from "./components/Contact";
import { Signup } from "./components/Signup";
import { Trekkersignup } from "./components/Trekkersignup";
import { Guidesignup } from "./components/Guidesignup";
import { Booking } from "./components/Booking";
import { TrekDetails } from "./components/TrekDetails";
// import { Card } from "./components/Card";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/price' element={<Price/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signup/trekker' element={<Trekkersignup/>}/>
         <Route path='/signup/guide' element={<Guidesignup/>}/>
         <Route path='/booking/:id' element={<Booking/>}/>
         <Route path='/trekdetails/:id' element={<TrekDetails/>}/>
         {/* <Route path='/' element={<Card/>}/> */}
       </Routes>
     </BrowserRouter>

     
  );
}

export default App;
