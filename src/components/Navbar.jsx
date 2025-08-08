import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import MainIcon from "../assets/svg/Navbar/MainIcon.svg"
import UnitedKingdom from "../assets/svg/Navbar/UnitedKingdom.svg"
import Uzb from "../assets/images/Uzb.png"
import Russian from "../assets/images/Russian.png"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({ code: "ENG", flag: UnitedKingdom })

  const languages = [
    { code: "ENG", flag: UnitedKingdom, name: "English" },
    { code: "UZB", flag: Uzb, name: "Uzbek" },
    { code: "RUS", flag: Russian, name: "Russian" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const togglePrograms = () => setIsProgramsOpen(!isProgramsOpen)
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen)

  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  return (
    <div>
      <nav className="bg-white shadow-lg font-open-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={MainIcon || "/placeholder.svg"} alt="AL MUAMALAT Logo" className="w-10 h-10" />
              <div className="text-xl font-bold text-teal-600">AL MUAMALAT</div>
            </div>

            {/* Center menu */}
            <div className="flex-1 flex justify-center space-x-15">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </a>

              <div className="relative">
                <button
                  onClick={togglePrograms}
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <span>Programs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
                </button>

                {isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-md shadow-lg border border-gray-500">
                    <div className="divide-y divide-gray-400">
                      <Link
                        to="/InternationalPrograms"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 whitespace-nowrap"
                      >
                        International educational programs
                      </Link>
                      <Link
                        to="/SpecializedCourses"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 whitespace-nowrap"
                      >
                        Specialized courses
                      </Link>
                      <Link
                        to="/IslamicFinance"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 whitespace-nowrap"
                      >
                        Islamic Finance Literacy Course
                      </Link>
                      <Link
                        to="/Certification"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 whitespace-nowrap"
                      >
                        Certification program
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                Finance tools
              </a>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </div>

            {/* Right menu */}
            <div className="flex items-center space-x-10">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <img
                    src={selectedLanguage.flag || "/placeholder.svg"}
                    alt={`${selectedLanguage.name} Flag`}
                    className="w-5 h-4 object-cover"
                  />
                  <span className="text-sm font-medium">{selectedLanguage.code}</span>
                  <ChevronDown
                    className={`w-3 h-3 text-black transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => selectLanguage(language)}
                          className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            selectedLanguage.code === language.code ? "bg-blue-50 text-teal-600" : "text-gray-700"
                          }`}
                        >
                          <img
                            src={language.flag || "/placeholder.svg"}
                            alt={`${language.name} Flag`}
                            className="w-5 h-4 object-cover"
                          />
                          <span className="font-medium">{language.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <span className="text-gray-400">|</span>

              {/* Fixed sign-in button */}
              <button
                onClick={() => navigate("/Login")}
                className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors focus:outline-none"
              >
                Sign in
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black hover:text-black">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="py-2 space-y-1">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Home
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Programs
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Finance tools
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Contact
                </a>
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
  )
}

export default Navbar
