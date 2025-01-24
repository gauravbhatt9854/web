import React from 'react'
import { Services } from './../../assets/assets';
import { Link } from 'react-router-dom';

const LowerNav = () => {
    return (
        <div className='flex justify-between items-center text-sm py-1 gap-4 mx-3 overflow-scroll'>
            {Services.map((item, index) => (
                <Link
                    onClick={() => scrollTo(0, 0)}
                    to={`/services/${item}`}
                    key={index}
                    className="hover:text-blue-500 transition-colors duration-300 flex items-center text-xs flex-shrink-0 font-medium"
                >
                    {item}
                </Link>
            ))}
        </div>
    )
}

export default LowerNav