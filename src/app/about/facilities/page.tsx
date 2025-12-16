import { School, CheckCircle, ArrowRight } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";
import Link from "next/link";

export default function Facilities() {
  const facilities = [
    {
      title: "Science Laboratories",
      description: "State-of-the-art laboratories for Physics, Chemistry, and Biology equipped with modern apparatus and safety features.",
      image: "/images/urbana/IMG_6922.JPEG",
      features: ["Modern equipment", "Safety protocols", "Hands-on experiments"]
    },
    {
      title: "Computer Lab",
      description: "Advanced computer laboratory with high-speed internet and the latest software for computer science education and research.",
      image: "/images/urbana/IMG_6923.JPEG",
      features: ["High-speed internet", "Latest software", "Individual workstations"]
    },
    {
      title: "Library",
      description: "Comprehensive library with a vast collection of books, journals, and digital resources to support learning and research.",
      image: "/images/urbana/IMG_6927.JPEG",
      features: ["Extensive book collection", "Digital resources", "Quiet study areas"]
    },
    {
      title: "Classrooms",
      description: "Spacious, well-ventilated classrooms equipped with modern teaching aids and comfortable seating arrangements.",
      image: "/images/urbana/IMG_6925.JPEG",
      features: ["Smart boards", "Comfortable seating", "Optimal learning environment"]
    },
    {
      title: "Auditorium",
      description: "Multi-purpose auditorium for academic events, cultural programs, and guest lectures with advanced audio-visual systems.",
      image: "/images/urbana/IMG_6926.JPEG",
      features: ["Advanced AV system", "Seating for 200+", "Multi-purpose space"]
    },
    {
      title: "Sports Facilities",
      description: "Comprehensive sports facilities including a playground, indoor games area, and equipment for various sports activities.",
      image: "/images/urbana/IMG_6928.JPEG",
      features: ["Outdoor playground", "Indoor games", "Fitness equipment"]
    }
  ];

  return (
    <AboutTemplate
      title="Infrastructure & Facilities"
      description="Explore our state-of-the-art campus and learning facilities"
      icon={<School className="w-8 h-8 text-[#800020]" />}
    >
      {/* Hero section with improved styling */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-[300px]">
        <Image 
          src="/images/urbana/IMG_6919.JPEG" 
          alt="Urbana Campus" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white max-w-2xl px-8 md:px-12">
            <h1 className="font-montserrat text-3xl font-bold mb-3">World-Class Facilities</h1>
            <p className="font-lato text-lg">
              Creating an optimal environment for learning, innovation, and growth
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Our Campus</h2>
          <p className="font-lato text-gray-600 mb-4">
            Urbana&apos;s campus is designed to provide an optimal learning environment that combines modern infrastructure with a serene atmosphere conducive to academic pursuits.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            Spread across a spacious area, our campus features modern buildings, green spaces, and state-of-the-art facilities that support both academic and extracurricular activities.
          </p>
          <p className="font-lato text-gray-600 mb-6">
            Every aspect of our infrastructure is designed with student comfort and safety in mind, creating an environment where students can focus on their studies and personal growth.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800020]">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Campus Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#800020] mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-lato text-gray-600">Modern architecture designed for optimal learning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#800020] mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-lato text-gray-600">Eco-friendly campus with green spaces</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#800020] mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-lato text-gray-600">Comprehensive security and safety measures</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/urbana/IMG_6931.JPEG" 
            alt="Urbana Campus" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="font-montserrat text-lg font-bold text-white">Modern Campus Infrastructure</p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-2 text-[#800020] text-center">Our Facilities</h2>
        <p className="font-lato text-gray-600 text-center max-w-3xl mx-auto mb-8">
          We provide state-of-the-art facilities to ensure our students have access to the best resources for their academic and personal development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image 
                  src={facility.image} 
                  alt={facility.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="font-montserrat text-xl font-bold p-4 text-white">{facility.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="font-lato text-gray-600 mb-4">{facility.description}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#800020] mr-2 flex-shrink-0" />
                      <span className="font-lato text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Technology Integration</h2>
        
        <p className="font-lato text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          We integrate modern technology into our teaching and learning processes to enhance the educational experience and prepare students for a technology-driven world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg border-t-4 border-[#800020] hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg font-bold mb-3 text-[#800020]">Smart Classrooms</h3>
            <p className="font-lato text-gray-600 mb-4">Interactive whiteboards, projectors, and digital learning tools to enhance classroom instruction.</p>
            <div className="flex items-center text-[#800020] font-oswald text-sm uppercase tracking-wider">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg border-t-4 border-[#800020] hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg font-bold mb-3 text-[#800020]">Digital Library</h3>
            <p className="font-lato text-gray-600 mb-4">Access to e-books, online journals, and digital resources to support research and learning.</p>
            <div className="flex items-center text-[#800020] font-oswald text-sm uppercase tracking-wider">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg border-t-4 border-[#800020] hover:shadow-md transition-shadow">
            <h3 className="font-montserrat text-lg font-bold mb-3 text-[#800020]">Learning Management System</h3>
            <p className="font-lato text-gray-600 mb-4">Online platform for course materials, assignments, and communication between students and teachers.</p>
            <div className="flex items-center text-[#800020] font-oswald text-sm uppercase tracking-wider">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative rounded-xl overflow-hidden mb-12">
        <Image 
          src="/images/urbana/IMG_6930.JPEG" 
          alt="Student Activities" 
          width={1200}
          height={400}
          className="object-cover w-full h-[300px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/90 to-transparent flex items-center">
          <div className="text-white max-w-2xl px-8 md:px-12">
            <h2 className="font-montserrat text-2xl font-bold mb-4">Visit Our Campus</h2>
            <p className="font-lato text-lg mb-6">
              Experience our facilities firsthand. Schedule a campus tour to see our infrastructure and learn more about our programs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </AboutTemplate>
  );
}