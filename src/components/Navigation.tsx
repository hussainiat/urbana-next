"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Building, Users, Award, MessageSquare, Book, Video, Newspaper, FileText, GraduationCap } from "lucide-react";
import { NavLink } from "./navigation/types";
import { AboutDropdown } from "./navigation/AboutDropdown";
import { CoursesDropdown } from "./navigation/CoursesDropdown";

// Logo component
const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link href="/" className="flex items-center">
    <div className="relative">
      <Image 
        src="/images/logo.png" 
        alt="Urbana School of Science" 
        width={isScrolled ? 150 : 180} 
        height={isScrolled ? 50 : 60} 
        className="h-auto transition-all"
        priority
      />
    </div>
  </Link>
);

// Main Navigation component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const coursesDropdownRef = useRef<HTMLDivElement>(null);

  // Navigation data
  const navLinks: NavLink[] = [
    { name: "About Us", path: "/about", hasDropdown: true, dropdownType: 'about' },
    { name: "Courses", path: "/courses", hasDropdown: true, dropdownType: 'courses' },
    { name: "Admissions", path: "/admissions" },
    { name: "Student Zone", path: "/student-zone" },
    { name: "Contact", path: "/contact" },
  ];

  // Event handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    if (coursesDropdownOpen) setCoursesDropdownOpen(false);
  };
  const toggleCoursesDropdown = () => {
    setCoursesDropdownOpen(!coursesDropdownOpen);
    if (aboutDropdownOpen) setAboutDropdownOpen(false);
  };
  const closeDropdowns = () => {
    setAboutDropdownOpen(false);
    setCoursesDropdownOpen(false);
    setIsMenuOpen(false);
  };

  // Handle scroll event to detect when to shrink the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper function to get link classes
  const getLinkClasses = (path: string, isMobile = false) => {
    const baseClasses = "font-oswald tracking-wider transition-colors";
    const mobileClasses = isMobile ? "block text-base" : "text-sm";
    const paddingClasses = isMobile ? "px-3 py-2" : isScrolled ? "px-3 py-1" : "px-3 py-2";
    const activeClasses = pathname.startsWith(path)
      ? "text-bright-red font-bold"
      : "text-rich-blue hover:text-bright-red";
    
    return `${baseClasses} ${mobileClasses} ${paddingClasses} rounded-md uppercase ${activeClasses}`;
  };

  return (
    <nav className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center">
            <Logo isScrolled={isScrolled} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.path} 
                  className="relative" 
                  ref={link.dropdownType === 'about' ? aboutDropdownRef : coursesDropdownRef}
                >
                  <button
                    onClick={link.dropdownType === 'about' ? toggleAboutDropdown : toggleCoursesDropdown}
                    className={`${getLinkClasses(link.path)} flex items-center`}
                  >
                    {link.name}
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform ${
                        (link.dropdownType === 'about' && aboutDropdownOpen) || 
                        (link.dropdownType === 'courses' && coursesDropdownOpen) 
                          ? 'rotate-180' 
                          : ''
                      }`} 
                    />
                  </button>
                  
                  {link.dropdownType === 'about' ? (
                    <AboutDropdown 
                      isOpen={aboutDropdownOpen} 
                      onClose={() => setAboutDropdownOpen(false)} 
                    />
                  ) : (
                    <CoursesDropdown 
                      isOpen={coursesDropdownOpen} 
                      onClose={() => setCoursesDropdownOpen(false)} 
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={getLinkClasses(link.path)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-rich-blue hover:text-bright-red focus:outline-none transition-colors"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[80vh] shadow-lg border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {/* Main Navigation Links */}
          <div className="py-2">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown ? (
                  <div className="py-1">
                    <button
                      onClick={link.dropdownType === 'about' ? toggleAboutDropdown : toggleCoursesDropdown}
                      className={`${getLinkClasses(link.path, true)} w-full text-left flex items-center justify-between`}
                    >
                      {link.name}
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform ${
                          (link.dropdownType === 'about' && aboutDropdownOpen) || 
                          (link.dropdownType === 'courses' && coursesDropdownOpen) 
                            ? 'rotate-180' 
                            : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Dropdown Content */}
                    <div 
                      className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                        (link.dropdownType === 'about' && aboutDropdownOpen) || 
                        (link.dropdownType === 'courses' && coursesDropdownOpen)
                          ? 'max-h-96' 
                          : 'max-h-0'
                      }`}
                    >
                      {link.dropdownType === 'about' ? (
                        <>
                          {aboutMenuItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.path}
                              className="flex items-center gap-2 p-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                              onClick={closeDropdowns}
                            >
                              <div className="h-4 w-4 text-[#800020]">{item.icon}</div>
                              <span>{item.title}</span>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <>
                          {coursesMenuItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.path}
                              className="flex items-center gap-2 p-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                              onClick={closeDropdowns}
                            >
                              <div className="h-4 w-4 text-[#800020]">{item.icon}</div>
                              <span>{item.title}</span>
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={`${getLinkClasses(link.path, true)} block py-2`}
                    onClick={closeDropdowns}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Quick Links Section removed */}
        </div>
      </div>
    </nav>
  );
};

// Import the menu items from the dropdown components
import { aboutMenuItems } from "./navigation/AboutDropdown";
import { coursesMenuItems } from "./navigation/CoursesDropdown";

// Remove the aboutUsLinks array as we're now using aboutMenuItems from the imported file
export default Navigation;