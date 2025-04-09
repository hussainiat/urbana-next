import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Linkedin, Instagram, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        {/* Logo and social media section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-10 border-b border-gray-200">
          <div className="mb-8 md:mb-0">
            <Image 
              src="/images/logo.png" 
              alt="Urbana School of Science" 
              width={200} 
              height={70} 
              className="h-auto transition-all"
            />
          </div>
          
          <div className="flex space-x-5">
            {[
              { icon: <Twitter size={18} />, href: "#" },
              { icon: <Facebook size={18} />, href: "#" },
              { icon: <Instagram size={18} />, href: "#" },
              { icon: <Youtube size={18} />, href: "#" },
              { icon: <Linkedin size={18} />, href: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <div className="space-y-5">
            <h3 className="font-montserrat text-xl font-bold mb-5 text-[#800020] relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-[#800020]/30 after:bottom-0 after:left-0 pb-2">
              About Urbana
            </h3>
            <p className="font-lato mb-5 text-gray-600 leading-relaxed">
              Urbana is dedicated to providing quality education and fostering academic excellence through innovative teaching methodologies and personalized learning experiences.
            </p>
            <Link href="/about" className="inline-flex items-center font-oswald text-[#800020] hover:text-[#e63946] transition-colors uppercase tracking-wider text-sm group">
              Learn More 
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-montserrat text-xl font-bold mb-5 text-[#800020] relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-[#800020]/30 after:bottom-0 after:left-0 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 font-lato grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Admissions", href: "/admissions" },
                { name: "Student Zone", href: "/student-zone" },
                { name: "Contact", href: "/contact" },
                { name: "Gallery", href: "/about/gallery" },
                { name: "News & Events", href: "/news" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#800020] transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 text-[#800020]/70 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="font-montserrat text-xl font-bold mb-5 text-[#800020] relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-[#800020]/30 after:bottom-0 after:left-0 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-5 font-lato w-full">
              {[
                { icon: <MapPin size={18} className="text-[#800020]" />, title: "Address", content: "Kathmandu, Putalisadak", href: null },
                { icon: <Phone size={18} className="text-[#800020]" />, title: "Phone", content: "5321238, 5321239", href: "tel:+9775321238" },
                { icon: <Mail size={18} className="text-[#800020]" />, title: "Email", content: "urbana.hss@gmail.com", href: "mailto:urbana.hss@gmail.com" }
              ].map((item, index) => (
                <li key={index} className="flex items-start w-full">
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center mr-6 flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="text-gray-600 flex-grow pl-2">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="hover:text-[#800020] transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-lato text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} Urbana School of Science. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-[#800020] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#800020] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}