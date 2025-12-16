import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Linkedin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Contact Us</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          We&apos;re here to help! Reach out to us with any questions, feedback, or inquiries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-[#800020] text-white p-6">
            <h2 className="font-montserrat text-2xl font-bold">Contact Information</h2>
            <p className="font-lato mt-2 opacity-80">Get in touch with us directly</p>
          </div>
          
          <div className="p-8">
            <div className="mb-6 flex items-start">
              <div className="bg-gray-50 p-3 rounded-full text-[#800020] mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-lg uppercase mb-1 text-[#800020]">Address</h3>
                <p className="font-lato text-gray-700">Kathmandu, Putalisadak</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="bg-gray-50 p-3 rounded-full text-[#800020] mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-lg uppercase mb-1 text-[#800020]">Phone</h3>
                <p className="font-lato text-gray-700">5321238, 5321239</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="bg-gray-50 p-3 rounded-full text-[#800020] mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-lg uppercase mb-1 text-[#800020]">Email</h3>
                <p className="font-lato text-gray-700">
                  <a href="mailto:urbana.hss@gmail.com" className="hover:text-[#e63946] transition-colors">
                    urbana.hss@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mb-8 flex items-start">
              <div className="bg-gray-50 p-3 rounded-full text-[#800020] mr-4">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-lg uppercase mb-1 text-[#800020]">Office Hours</h3>
                <p className="font-lato text-gray-700">Every day: 7:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020]">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#800020] hover:bg-[#800020] hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#800020] hover:bg-[#800020] hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#800020] hover:bg-[#800020] hover:text-white transition-colors duration-300">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#800020] hover:bg-[#800020] hover:text-white transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-[#800020] text-white p-6">
            <h2 className="font-montserrat text-2xl font-bold">Our Location</h2>
            <p className="font-lato mt-2 opacity-80">Visit us at our campus</p>
          </div>
          
          <div className="p-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28260.257036414143!2d85.320883!3d27.700852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190525b85187%3A0x3d33ffe1b924d499!2sURBANA%20School%20of%20Science!5e0!3m2!1sen!2snp!4v1743731022793!5m2!1sen!2snp" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px]"
              title="Urbana Location Map"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Ready to Join Urbana?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Take the first step towards a bright future. Visit our campus or contact us today to learn more about our programs.
        </p>
        <a 
          href="/admissions" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
