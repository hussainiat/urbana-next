import { Building2 } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function InstituteOverview() {
  return (
    <AboutTemplate
      title="Institute Overview"
      description="Learn about our history, achievements, and educational philosophy"
      icon={<Building2 className="w-8 h-8 text-[#800020]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Our History</h2>
          <p className="font-lato text-gray-600 mb-4">
            Founded in 1995, Urbana Educational Institute has grown from a small tutoring center to one of the most respected educational institutions in the region. Our journey began with a vision to provide quality education that prepares students for academic excellence and future success.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            Over the years, we have expanded our facilities, enhanced our curriculum, and built a team of dedicated educators committed to nurturing the potential of every student.
          </p>
          <p className="font-lato text-gray-600">
            Today, Urbana stands as a beacon of educational excellence, known for its innovative teaching methods, comprehensive curriculum, and consistent record of student achievements.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/campus-main.jpg" 
            alt="Urbana Campus" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Key Milestones</h2>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="w-24 flex-shrink-0 font-oswald font-bold text-[#800020]">1995</div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-1">Establishment</h3>
              <p className="font-lato text-gray-600">Urbana Educational Institute was founded with a mission to provide quality education.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-24 flex-shrink-0 font-oswald font-bold text-[#800020]">2000</div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-1">Expansion</h3>
              <p className="font-lato text-gray-600">Expanded facilities to accommodate growing student enrollment and introduced new programs.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-24 flex-shrink-0 font-oswald font-bold text-[#800020]">2005</div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-1">Recognition</h3>
              <p className="font-lato text-gray-600">Received national recognition for academic excellence and innovative teaching methods.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-24 flex-shrink-0 font-oswald font-bold text-[#800020]">2010</div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-1">International Partnerships</h3>
              <p className="font-lato text-gray-600">Established partnerships with international educational institutions for student exchange programs.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-24 flex-shrink-0 font-oswald font-bold text-[#800020]">2015</div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-1">Modern Campus</h3>
              <p className="font-lato text-gray-600">Inaugurated a state-of-the-art campus with advanced facilities and technology integration.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-24 flex-shrink-0 font-oswald font-bold text-[#800020]">2020</div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-1">Silver Jubilee</h3>
              <p className="font-lato text-gray-600">Celebrated 25 years of educational excellence and community service.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Educational Philosophy</h3>
          <p className="font-lato text-gray-600">
            We believe in a holistic approach to education that nurtures intellectual, physical, and emotional development. Our teaching methodology encourages critical thinking, creativity, and a love for lifelong learning.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Core Values</h3>
          <p className="font-lato text-gray-600">
            Excellence, integrity, respect, and innovation form the foundation of our educational approach. We instill these values in our students to prepare them for success in a global society.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Community Engagement</h3>
          <p className="font-lato text-gray-600">
            We actively engage with the community through outreach programs, educational workshops, and collaborative initiatives that promote learning and social responsibility.
          </p>
        </div>
      </div>
    </AboutTemplate>
  );
}