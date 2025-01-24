import React, { useState } from 'react';
import { images } from './../../assets/assets';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import LowerNav from './LowerNav';
import { FaUserCircle, FaCog, FaSignOutAlt, FaArrowRight, FaCodeBranch, FaFacebookMessenger } from 'react-icons/fa'; // Importing login, settings, and logout icons

const NavBar = () => {
  // sign in
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // logic for signin
  const checkLoggedIn = () => {
    // logic
  }
  const Navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(''); // State to manage input value

  // Handler for input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Add logic for search functionality here
  };

  return (
    <div>
      {/* upper part */}
      <div className='flex justify-between items-center text-sm py-4 mb-3 border-b border-b-gray-300 lg:gap-2 w-full sticky right-0 left-0 '>
        {/* left part */}
        <div className='flex justify-between items-center text-sm py-1 gap-2 mx-[1rem]'>
          <NavLink to={'/'}>
            <img className='w-[8rem] h-[2.3rem] cursor-pointer' src={images.logo} alt="" />
          </NavLink>
          <ul className='hidden md:flex items-center gap-5 font-medium'>
            <NavLink to={'/about'}>
              <li className='py-1'>About us</li>
              <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden' />
            </NavLink>

            <NavLink to={'/contact'}>
              <li className='py-1'>Contact us</li>
              <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden' />
            </NavLink>

            <NavLink to={'/how it works'}>
              <li className='py-1'>How it works ?</li>
              <hr className='border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden' />
            </NavLink>
            {isLoggedIn &&
              <div className='flex items-center gap-2 group cursor-pointer relative'>
                {/* Profile Image */}
                <img
                  className='w-8 h-8 rounded-full border border-gray-300'
                  src={images.profile}
                  alt="Profile"
                />

                {/* Dropdown Icon */}
                <img
                  className='w-2.5 transform transition-transform group-hover:rotate-180'
                  src={images.dropdown}
                  alt="Dropdown Icon"
                />

                {/* Dropdown Menu */}
                <div className='absolute top-0 right-0 pt-12 px-5 py-5 text-sm font-medium text-gray-600 hidden group-hover:block z-30 rounded-lg'>
                  <div className='bg-blue-50 shadow-lg rounded-lg p-4 w-64 border border-gray-200 '>

                    {/* Business Plus Section */}
                    <div onClick={() => Navigate('/business plus')} className='mb-4 text-center border-b px-2 py-2.5 border border-gray-400 shadow-glow bg-blue-100 rounded-lg'>
                      <h1 className='text-lg font-bold text-gray-800'>
                        Try Business Plus
                        <FaArrowRight size={20} className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300 inline-block ml-1" />
                      </h1>
                      <p className='text-gray-500 text-[11px]'>Get the best experience every time</p>
                      <p className='text-[11px] text-blue-500 font-medium'>Upgrade with no up-front costs</p>
                    </div>

                    {/* Action Links */}
                    <div className='flex flex-col gap-3'>
                      <p
                        onClick={() => Navigate('/profile')}
                        className='hover:text-blue-600 cursor-pointer transition ml-2'>
                        <FaUserCircle size={20} className='inline mr-1' />
                        My Profile
                      </p>
                      <p
                        onClick={() => Navigate('/dashboard/proposals')}
                        className='hover:text-blue-600 cursor-pointer transition ml-2'>
                        <FaCodeBranch size={20} className='inline mr-1' />
                        My Proposals
                      </p>
                      <p
                        onClick={() => Navigate('/dashboard')}
                        className='hover:text-blue-600 cursor-pointer transition ml-2'>
                        <FaCodeBranch size={20} className='inline mr-1' />
                        Dashboard
                      </p>
                      <p
                        onClick={() => Navigate('/profile/settings')}
                        className='hover:text-gray-700 cursor-pointer transition ml-2'>
                        <FaCog size={20} className='inline mr-1' />
                        Settings
                      </p>
                      <p
                        onClick={() => { setIsLoggedIn(false) }}
                        className='hover:text-red-600 cursor-pointer transition ml-2'>
                        <FaSignOutAlt size={20} className='inline mr-1' />
                        Logout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }

          </ul>
        </div>


        {/* right part */}
        <div className='hidden md:flex gap-2 mr-2'>
          {/* search bar */}
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-md"
            >
              {/* Search Input */}
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="What are you looking for?"
                className="w-[14.5rem] py-3 pl-4 pr-10 text-gray-700 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-gray-500/50"
              />

              {/* Search Button with Hover Effect */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-300 hover:bg-blue-600 text-white rounded-full p-2 transition-all duration-500 shadow-md"
              >
                🔍
              </button>
            </form>
            <div className='ml-2' onClick={() => Navigate("/chat")}><FaFacebookMessenger size={45} color='black' /></div>
          </div>

          {/* login */}
          <div className='z-20'>
            {
              !isLoggedIn &&
              <div className='flex items-center gap-1 bottom-1 border-black mr-1'>
                <button onClick={() => Navigate('/login')}
                  className="text-black px-6 py-2 cursor-pointer rounded-tl-lg rounded-tr-lg rounded-br-lg border-2 border-black hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out transform hover:scale-[1.12] hover:shadow-lg hover:shadow-gray-500/50">
                  logIn
                </button>
              </div>
            }
          </div>

        </div>
      </div >

      {/* lower part */}
      < LowerNav />
    </div >
  )
}

export default NavBar