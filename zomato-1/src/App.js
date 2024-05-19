// import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { ZomatoHome } from './ZomatoHome';
import AddRestraw from './AddRestraw';
import Login from './Login';


const App = () => {
function click(){
  console.log(2+2);
}
  return (
    <>
   <Routes>
    <Route path='/' element={<ZomatoHome/>}/>
    <Route path='/add' element={<AddRestraw/>}/>
    <Route path='/log'  element={<Login/>}/>
   </Routes>
  
  
      </>
  )
}

export default App