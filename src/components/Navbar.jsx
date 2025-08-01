import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import MainIcon from '../assets/svg/Navbar/MainIcon.svg';
import UnitedKingdom from '../assets/svg/Navbar/UnitedKingdom.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePrograms = () => setIsProgramsOpen(!isProgramsOpen);

  return (
    <div>
      <nav className="bg-white shadow-lg font-open-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={MainIcon} alt="AL MUAMALAT Logo" className="w-10 h-10" />
              <div className="text-xl font-bold text-teal-600">
                AL MUAMALAT
              </div>
            </div>

            <div className="flex-1 flex justify-center space-x-15">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
              
              <div className="relative">
                <button 
                  onClick={togglePrograms}
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <span>Programs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Islamic Banking</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Investment Plans</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Takaful Insurance</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Education Programs</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Finance tools</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 text-gray-700  transition-colors ">
                  <img src={UnitedKingdom} alt="UK Flag" className="w-5 h-4" />
                  <span className="text-sm">ENG</span>
                  <ChevronDown className="w-3 h-3 text-black" />
                </button>
              </div>
              <span className="text-gray-400">|</span> {/* Separator */}
              <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors focus:outline-none">
                Sign in
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black hover:text-black">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="py-2 space-y-1">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Programs</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Finance tools</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</a>
                <div className="px-4 py-2">
                  <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>  
  );
};

export default Navbar;