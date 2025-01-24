import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // You can install react-icons
import { images } from '../assets/assets';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-200 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={images.logo} alt="Logo" className="h-12 w-auto" />
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-gray-500 hover:text-blue-600  hover:translate-y-[-5px] transition-all duration-500" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-gray-500 hover:text-blue-400 hover:translate-y-[-5px] transition-all duration-500" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-gray-500 hover:text-blue-700 hover:translate-y-[-5px] transition-all duration-500" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-gray-500 hover:text-pink-600 hover:translate-y-[-5px] transition-all duration-500" />
                    </a>
                </div>
            </div>

            {/* Footer Text */}
            <div className="text-center mt-4 text-sm text-gray-600">
                <p>&copy; {currentYear} Work Hive. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;