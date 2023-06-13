import { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {

  const [isHome, setIsHome] = useState(true)

  return (
    <>
      {
        isHome ?
        <Home
          isHome={isHome} 
          setIsHome={setIsHome}/>
        :
        <Dashboard />
      } 
    </>
  )
}

export default App;
