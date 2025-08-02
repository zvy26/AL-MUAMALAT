import { Youtube, Facebook, Twitter, Instagram } from "lucide-react"
import FooterLogo from "../assets/images/FooterLogo.png"

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img src={FooterLogo} alt="Dior Design" className="h-16 w-auto scale-120" />
        </div>

        <nav className="flex justify-center space-x-10 mb-10">
          <a href="#home" className="text-white  hover:text-gray-200 transition-colors duration-200 font-medium">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium">
            About
          </a>
          <a href="#service" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium">
            Service
          </a>
          <a href="#contact" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium">
            Contact Us
          </a>
        </nav>

        <div className="flex justify-center space-x-6 mb-8 ">
          <a
            href="#youtube"
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="#facebook"
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#twitter"
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#instagram"
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-white mb-6"></div>

        <div className="text-center font-medium ">
          <p className="text-white/80 text-sm">Copyright Satyam Studio</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
