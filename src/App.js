import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './components/ContextReducer';
import MyOrder from './components/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route exact path='/login' element={<Login></Login>} />
          <Route exact path='/signup' element={<Signup></Signup>} />
          <Route exact path='/myorder' element={<MyOrder></MyOrder>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
