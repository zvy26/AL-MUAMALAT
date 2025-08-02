import React, { useState, useEffect } from 'react'
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import Expert1 from '../assets/images/Expert1.png'
import Expert2 from '../assets/images/Expert2.png'
import Expert3 from '../assets/images/Expert3.png'

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mezbah Uddin Ahmed",
      image: Expert1,
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      social: {
        email: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Sarah Abdullah",
      image: Expert2,
      description: "With over 15 years of experience in Islamic banking and finance, Dr. Sarah brings deep expertise in Shariah-compliant investment strategies and ethical financial management.",
      social: {
        email: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Prof. Omar Hassan",
      image: Expert3,
      description: "A renowned scholar in Islamic finance with expertise in sukuk markets and Islamic capital market development. He has consulted for major financial institutions worldwide.",
      social: {
        email: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our team consists of seasoned professionals with extensive experience<br/>
            in Islamic finance and management. Each member brings a unique set of<br/>
            skills and expertise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-30 top-8 w-50 h-64 bg-[#D2E6E4] md:h-[350px]  rounded-lg hidden lg:block cursor-pointer transition-all duration-300 hover:brightness-110 opacity-40 hover:opacity-80">
            <img
              src={teamMembers[(currentIndex + 2) % teamMembers.length].image}
              alt={teamMembers[(currentIndex + 2) % teamMembers.length].name}
              className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-90 transition-opacity duration-300"
              onClick={() => setCurrentIndex((currentIndex + 2) % teamMembers.length)}
            />
          </div>
          
          <div className="absolute -right-30 top-8 w-50 h-64 md:h-[350px] bg-[#D2E6E4] rounded-lg hidden lg:block cursor-pointer transition-all duration-300 hover:brightness-110 opacity-40 hover:opacity-80">
            <img
              src={teamMembers[(currentIndex + 1) % teamMembers.length].image}
              alt={teamMembers[(currentIndex + 1) % teamMembers.length].name}
              className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-90 transition-opacity duration-300"
              onClick={() => setCurrentIndex((currentIndex + 1) % teamMembers.length)}
            />
          </div>
          
          <div className="bg-[#D2E6E4] rounded-2xl h-full md:h-[400px] p-8 lg:p-12 mx-auto max-w-5xl relative z-10 transition-all duration-500 ease-in-out">
            <div className="flex flex-col h-full lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-48 h-48 lg:w-70 lg:h-75 rounded-lg object-cover transition-opacity duration-500"
                />
              </div>
              
              <div className=" relative top-10 flex-1 md:h-[400px] text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 transition-all duration-500">
                  {currentMember.name}
                </h3>
                
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 transition-all duration-500">
                  {currentMember.description}
                </p>
                
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a 
                    href={currentMember.social.email} 
                    className="p-2 bg-[#D2E6E4]   transition-shadow duration-200 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                  <a 
                    href={currentMember.social.instagram} 
                    className="p-2 bg-[#D2E6E4]  transition-shadow duration-200 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                  <a 
                    href={currentMember.social.facebook} 
                    className="p-2  bg-[#D2E6E4]   transition-shadow duration-200 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                  <a 
                    href={currentMember.social.twitter} 
                    className="p-2 bg-[#D2E6E4]  transition-shadow duration-200 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-6 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-600 w-8' 
                    : 'bg-gray-200 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team