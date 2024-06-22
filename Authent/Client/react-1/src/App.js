import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
function App() {
return(
  <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
)
}

export default App;
