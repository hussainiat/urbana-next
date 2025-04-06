import { School } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function Facilities() {
  const facilities = [
    {
      title: "Science Laboratories",
      description: "State-of-the-art laboratories for Physics, Chemistry, and Biology equipped with modern apparatus and safety features.",
      image: "/images/facilities/science-lab.jpg"
    },
    {
      title: "Computer Lab",
      description: "Advanced computer laboratory with high-speed internet and the latest software for computer science education and research.",
      image: "/images/facilities/computer-lab.jpg"
    },
    {
      title: "Library",
      description: "Comprehensive library with a vast collection of books, journals, and digital resources to support learning and research.",
      image: "/images/facilities/library.jpg"
    },
    {
      title: "Classrooms",
      description: "Spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable seating arrangements.",
      image: "/images/facilities/classroom.jpg"
    },
    {
      title: "Auditorium",
      description: "Multi-purpose auditorium for academic events, cultural programs, and guest lectures with advanced audio-visual systems.",
      image: "/images/facilities/auditorium.jpg"
    },
    {
      title: "Sports Facilities",
      description: "Comprehensive sports facilities including a playground, indoor games area, and equipment for various sports activities.",
      image: "/images/facilities/sports.jpg"
    }
  ];

  return (
    <AboutTemplate
      title="Infrastructure & Facilities"
      description="Explore our state-of-the-art campus and learning facilities"
      icon={<School className="w-8 h-8 text-[#800020]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Our Campus</h2>
          <p className="font-lato text-gray-600 mb-4">
            Urbana&apos;s campus is designed to provide an optimal learning environment that combines modern infrastructure with a serene atmosphere conducive to academic pursuits.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            Spread across 5 acres, our campus features modern buildings, green spaces, and state-of-the-art facilities that support both academic and extracurricular activities.
          </p>
          <p className="font-lato text-gray-600">
            Every aspect of our infrastructure is designed with student comfort and safety in mind, creating an environment where students can focus on their studies and personal growth.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/facilities/campus-overview.jpg" 
            alt="Urbana Campus" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Our Facilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48 w-full">
                <Image 
                  src={facility.image} 
                  alt={facility.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{facility.title}</h3>
                <p className="font-lato text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Technology Integration</h2>
        
        <p className="font-lato text-gray-600 mb-6 text-center max-w-3xl mx-auto">
          We integrate modern technology into our teaching and learning processes to enhance the educational experience and prepare students for a technology-driven world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Smart Classrooms</h3>
            <p className="font-lato text-gray-600">Interactive whiteboards, projectors, and digital learning tools to enhance classroom instruction.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Digital Library</h3>
            <p className="font-lato text-gray-600">Access to e-books, online journals, and digital resources to support research and learning.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Learning Management System</h3>
            <p className="font-lato text-gray-600">Online platform for course materials, assignments, and communication between students and teachers.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Visit Our Campus</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Experience our facilities firsthand. Schedule a campus tour to see our infrastructure and learn more about our programs.
        </p>
        <a 
          href="/contact" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Schedule a Tour
        </a>
      </div>
    </AboutTemplate>
  );
}