import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to='/' onClick={ clicked } className='font-semibold text-xl tracking-tight'>Woody's Fireworks</Link>
      </div>
      <div className="block">
        <button
          onClick={dropDown}
          className="flex items-center px-3 py-2 text-white border rounded
          border-red-700 hover:text-blue-600 hover:border-orange-900"
          >
            <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      { isVisible ? (<div className='w-full block flex-grow items-center'>
        <div className="text-sm lg:flex-grow">
          <Button className="p-3 m-5 bg-red-600 justify-center">
            <div>
              <Link to="/" className='flex place-items-center mt-4 lg:inline-block lg:mt-0
              text-white hover:text-blue-600 mr-0'>
                  Home
                </Link>
            </div>
          </Button>

          <Button className="p-3 m-5 bg-red-600 justify-center">
            <div>
              <Link to="/about" className='flex place-items-center mt-4 lg:inline-block lg:mt-0
              text-white hover:text-blue-600 mr-0'>
                  About
                </Link>
            </div>
          </Button>
        </div>
      </div>)
      : (<></>)}
    </nav>
  )
}

export default Navbar
