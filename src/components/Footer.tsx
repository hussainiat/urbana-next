import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and social media section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-200">
          <div className="mb-6 md:mb-0">
            <Image 
              src="/images/logo.png" 
              alt="Urbana School of Science" 
              width={180} 
              height={60} 
              className="h-auto transition-all"
            />
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
              <Youtube size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020]">About Urbana</h3>
            <p className="font-lato mb-4 text-gray-600">
              Urbana is dedicated to providing quality education and fostering academic excellence through innovative teaching methodologies and personalized learning experiences.
            </p>
            <Link href="/about" className="inline-flex items-center font-oswald text-[#800020] hover:text-[#e63946] transition-colors uppercase tracking-wider text-sm">
              Learn More 
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020]">Quick Links</h3>
            <ul className="space-y-2 font-lato grid grid-cols-1 sm:grid-cols-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/student-zone" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Student Zone
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-[#800020] transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020]">Contact Info</h3>
            <ul className="space-y-4 font-lato">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin size={18} className="text-[#800020]" />
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold">Address</p>
                  <p>Kathmandu, Putalisadak</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone size={18} className="text-[#800020]" />
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold">Phone</p>
                  <p>5321238, 5321239</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail size={18} className="text-[#800020]" />
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold">Email</p>
                  <a href="mailto:urbana.hss@gmail.com" className="hover:text-[#800020] transition-colors">
                    urbana.hss@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-lato text-gray-600 mb-2 md:mb-0">© {new Date().getFullYear()} Urbana School of Science. All rights reserved.</p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-[#800020]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#800020]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}