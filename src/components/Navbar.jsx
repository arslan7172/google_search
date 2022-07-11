import React from 'react'
import { Link} from 'react-router-dom';
import Search from './Search';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to='/' >
            <p className='text-2xl bg-blue-500 font-bold text-white pb-2 pt-2 px-6 rounded-3xl dark:bg-gray-50 dark:text-gray-900'>
              ama 🔎
            </p>
          </Link>
          <button type='button' onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? 'Dark 💡' : 'Light 🌙' }</button>
        </div>
        <Search />
    </div>
  )
}

export default Navbar