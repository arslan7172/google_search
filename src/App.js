import React,{useState} from 'react'

import Footer  from "./components/Footer";
import  Routes  from "./components/Routes";
import  Navbar  from "./components/Navbar";


const App = () => {

  const [darkTheme,setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''} >
      <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App