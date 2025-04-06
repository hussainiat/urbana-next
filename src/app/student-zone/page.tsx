import { Book, Monitor, BookOpen, Calendar, PenTool, Users, ArrowRight } from "lucide-react";

export default function StudentZone() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Student Zone</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Access resources, information, and services designed to enhance your learning experience at Urbana.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { 
            title: "Learning Resources", 
            icon: Book,
            description: "Access study materials, lecture notes, and supplementary resources to support your academic journey."
          },
          { 
            title: "Student Portal", 
            icon: Monitor,
            description: "View your grades, attendance records, and course schedules through our comprehensive student portal."
          },
          { 
            title: "Library Access", 
            icon: BookOpen,
            description: "Explore our extensive collection of books, journals, and digital resources available in our library."
          },
          { 
            title: "Academic Calendar", 
            icon: Calendar,
            description: "Stay updated with important dates, events, and deadlines throughout the academic year."
          },
          { 
            title: "Exam Schedule", 
            icon: PenTool,
            description: "View upcoming examination dates, times, and venues for all your enrolled courses."
          },
          { 
            title: "Student Support", 
            icon: Users,
            description: "Connect with our dedicated support team for academic guidance, counseling, and assistance."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="text-[#800020] mb-4">
              <item.icon size={40} />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{item.title}</h3>
            <p className="font-lato mb-4 text-gray-600">{item.description}</p>
            <button className="font-oswald text-[#800020] hover:text-[#e63946] uppercase tracking-wider flex items-center">
              Access Now 
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Need Assistance?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Our student support team is available to help you with any questions or concerns you may have.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/contact" 
            className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Contact Support
          </a>
          <a 
            href="/faq" 
            className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] border border-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            View FAQs
          </a>
        </div>
      </div>
    </div>
  );
}