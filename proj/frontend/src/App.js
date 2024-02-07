
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Home } from './components/Home';
import {Price} from './components/Price';
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/price' element={<Price/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
     </BrowserRouter>

     
  );
}

export default App;
