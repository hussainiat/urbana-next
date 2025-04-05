import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-rich-blue dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and social media section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          <div className="mb-6 md:mb-0">
            <Image 
              src="/images/logo.png" 
              alt="Urbana School of Science" 
              width={180} 
              height={60} 
              className="h-auto transition-all block dark:hidden"
            />
            <Image 
              src="/images/logo-dark.png" 
              alt="Urbana School of Science" 
              width={180} 
              height={60} 
              className="h-auto transition-all hidden dark:block"
            />
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#4267B2] hover:text-white transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors duration-300">
              <Youtube size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-deep-maroon dark:text-bright-red">About Urbana</h3>
            <p className="font-lato mb-4 text-gray-600 dark:text-gray-300">
              Urbana is dedicated to providing quality education and fostering academic excellence through innovative teaching methodologies.
            </p>
            <Link href="/about" className="inline-flex items-center font-oswald text-bright-red hover:text-deep-maroon dark:hover:text-white transition-colors uppercase tracking-wider text-sm">
              Learn More 
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-deep-maroon dark:text-bright-red">Quick Links</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-bright-red dark:hover:text-bright-red transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-bright-red dark:hover:text-bright-red transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 dark:text-gray-300 hover:text-bright-red dark:hover:text-bright-red transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-600 dark:text-gray-300 hover:text-bright-red dark:hover:text-bright-red transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/student-zone" className="text-gray-600 dark:text-gray-300 hover:text-bright-red dark:hover:text-bright-red transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Student Zone
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-bright-red dark:hover:text-bright-red transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-deep-maroon dark:text-bright-red">Contact Info</h3>
            <ul className="space-y-4 font-lato">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin size={18} className="text-bright-red" />
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-semibold">Address</p>
                  <p>Kathmandu, Putalisadak</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone size={18} className="text-bright-red" />
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-semibold">Phone</p>
                  <p>5321238, 5321239</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail size={18} className="text-bright-red" />
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-semibold">Email</p>
                  <a href="mailto:urbana.hss@gmail.com" className="hover:text-bright-red transition-colors">
                    urbana.hss@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-deep-maroon dark:text-bright-red">Newsletter</h3>
            <p className="font-lato mb-4 text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 w-full text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-t-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-bright-red"
              />
              <button 
                type="submit" 
                className="bg-bright-red hover:bg-deep-maroon text-white px-4 py-3 rounded-b-md sm:rounded-r-md sm:rounded-l-none font-oswald uppercase tracking-wider transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center">
          <p className="font-lato text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Urbana School of Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}