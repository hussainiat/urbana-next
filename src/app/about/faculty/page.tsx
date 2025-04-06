'use client'

import { Users } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";
import { useState } from "react";

export default function FacultyStaff() {
  const [activeTab, setActiveTab] = useState("All");

  const facultyMembers = [
    {
      name: "Rabindra Sharma",
      position: "Principal",
      department: "Administration",
      education: "Ph.D. in Education, Harvard University",
      experience: "25+ years",
      image: "/images/faculty/principal.jpg"
    },
    {
      name: "Rejina Rai",
      position: "Vice Principal",
      department: "Administration",
      education: "Ph.D. in Education, Harvard University",
      experience: "25+ years",
      image: "/images/faculty/principal.jpg"
    },
    {
      name: "Ram S Dani",
      position: "Academic Director",
      department: "Administration",
      education: "Ph.D. in Education, Harvard University",
      experience: "25+ years",
      image: "/images/faculty/principal.jpg"
    },
    // Physics faculty from the image
    {
      name: "Ram Tiwari",
      position: "Faculty",
      department: "Physics",
      education: "M.Sc. in Physics",
      experience: "10+ years",
      image: "/images/faculty/ram-tiwari.jpg"
    },
    {
      name: "Michael Dhungana",
      position: "Faculty",
      department: "Physics",
      education: "M.Sc. in Physics",
      experience: "8+ years",
      image: "/images/faculty/MichealDhungana.jpg"
    },
    {
      name: "Sambhu Sah",
      position: "Faculty",
      department: "Physics",
      education: "M.Sc. in Physics",
      experience: "7+ years",
      image: "/images/faculty/sambhu-sah.jpg"
    },
    {
      name: "SS Mandal",
      position: "Faculty",
      department: "Physics",
      education: "M.Sc. in Physics",
      experience: "9+ years",
      image: "/images/faculty/ss-mandal.jpg"
    },
    {
      name: "Binod Baral",
      position: "Faculty",
      department: "Physics",
      education: "M.Sc. in Physics",
      experience: "6+ years",
      image: "/images/faculty/binod-baral.jpg"
    },
    // Original faculty members
    

  
    
    // Chemistry faculty from the image
    {
      name: "Bibek Bhattarai",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "8+ years",
      image: "/images/faculty/bibek-bhattarai.jpg"
    },
    {
      name: "Birendra Thapa",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "9+ years",
      image: "/images/faculty/birendra-thapa.jpg"
    },
    {
      name: "Manoj Sah",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "7+ years",
      image: "/images/faculty/manoj-sah.jpg"
    },
    {
      name: "Binod Yadav",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "8+ years",
      image: "/images/faculty/binod-yadav.jpg"
    },
    {
      name: "Mahesh Poudel",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "6+ years",
      image: "/images/faculty/mahesh.jpg"
    },
    {
      name: "Rajesh Shah",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "7+ years",
      image: "/images/faculty/rajesh-jga.jpg"
    },
    {
      name: "Santosh Lamichhane",
      position: "Faculty",
      department: "Chemistry",
      education: "M.Sc. in Chemistry",
      experience: "8+ years",
      image: "/images/faculty/santosh-lamichhane.jpg"
    },
    {
      name: "Rakesh Bhagat",
      position: "Faculty",
      department: "Biology",
      education: "M.Sc. in Zoology",
      experience: "9+ years",
      image: "/images/faculty/bhagat-sir.jpg"
    },
    {
      name: "Dr Madhav Rijal",
      position: "Faculty",
      department: "Biology",
      education: "Ph.D. in Zoology",
      experience: "10+ years",
      image: "/images/faculty/dr-madhav-rijal.jpg"
    },
    {
      name: "Kamal Nepal",
      position: "Faculty",
      department: "Biology",
      education: "M.Sc. in Zoology",
      experience: "7+ years",
      image: "/images/faculty/kamal-nepal.jpg"
    },
    {
      name: "Mahendra Yadav",
      position: "Faculty",
      department: "Biology",
      education: "M.Sc. in Zoology",
      experience: "8+ years",
      image: "/images/faculty/mahendra-yadav.jpg"
    },
    // Botany faculty from the image
    {
      name: "Dr Ravi Bikram",
      position: "Faculty",
      department: "Biology",
      education: "Ph.D. in Botany",
      experience: "12+ years",
      image: "/images/faculty/dr-ravi-bikram.jpg"
    },
    {
      name: "Dr Kabir Pokhrel",
      position: "Faculty",
      department: "Biology",
      education: "Ph.D. in Botany",
      experience: "10+ years",
      image: "/images/faculty/kabir-pokhrel.jpg"
    },
    // Mathematics faculty
    {
      name: "Jyoti Mishra",
      position: "Faculty",
      department: "Mathematics",
      education: "M.Sc. in Mathematics",
      experience: "8+ years",
      image: "/images/faculty/jyoti-maam.jpg"
    },
    {
      name: "Yam Pokhrel",
      position: "Faculty",
      department: "Mathematics",
      education: "M.Sc. in Mathematics",
      experience: "9+ years",
      image: "/images/faculty/yam-pokhrel.jpg"
    },
    // English faculty
    {
      name: "Deepak Shrestha",
      position: "Faculty",
      department: "English",
      education: "M.A. in English",
      experience: "7+ years",
      image: "/images/faculty/deepak-shrestha.jpg"
    },
    // Computer Science faculty
    {
      name: "Sahodhar Dhungel",
      position: "Faculty",
      department: "Computer Science",
      education: "M.Sc. in Computer Science",
      experience: "8+ years",
      image: "/images/faculty/sahodhar.jpg"
    },
  ];

  const departments = [
    "All",
    "Administration",
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "English",
    "Computer Science",
  ];

  // Filter faculty members based on active tab
  const filteredFaculty = activeTab === "All" 
    ? facultyMembers 
    : facultyMembers.filter(faculty => faculty.department === activeTab);

  return (
    <AboutTemplate
      title="Faculty & Staff"
      description="Meet our experienced team of educators and administrators"
      icon={<Users className="w-8 h-8 text-[#800020]" />}
    >
      <div className="mb-12">
        {/* Department filter buttons - keeping existing code */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {departments.map((dept, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-full font-oswald text-sm uppercase tracking-wider ${
                activeTab === dept 
                  ? "bg-[#800020] text-white" 
                  : "bg-white text-[#800020] border border-[#800020] hover:bg-[#800020] hover:text-white"
              } transition-colors`}
              onClick={() => setActiveTab(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
        
        {/* Improved faculty cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculty.map((faculty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              {/* Improved image container with overlay effect */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={faculty.image} 
                  alt={faculty.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Improved card content */}
              <div className="p-5 relative">
                {/* Department badge */}
                <div className="absolute -top-4 right-4 bg-[#800020] text-white text-xs font-medium py-1 px-3 rounded-full shadow-sm">
                  {faculty.department}
                </div>
                
                <h3 className="font-montserrat text-xl font-bold mb-1 text-[#800020]">{faculty.name}</h3>
                <p className="font-oswald text-sm uppercase tracking-wider text-gray-500">{faculty.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Our Teaching Philosophy</h2>
        
        <p className="font-lato text-gray-600 mb-6 text-center max-w-3xl mx-auto">
          At Urbana, our faculty members are committed to providing a supportive and stimulating learning environment. We believe in a student-centered approach that encourages active participation, critical thinking, and a love for learning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Personalized Attention</h3>
            <p className="font-lato text-gray-600">Our low student-to-teacher ratio allows for personalized attention and support for each student.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Continuous Learning</h3>
            <p className="font-lato text-gray-600">Our faculty regularly participates in professional development to stay updated with the latest teaching methodologies.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Mentorship</h3>
            <p className="font-lato text-gray-600">We believe in mentoring students beyond academics to help them develop into well-rounded individuals.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Join Our Team</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          We are always looking for passionate educators to join our team. If you are interested in making a difference in students&apos; lives, we&apos;d love to hear from you.
        </p>
        <a 
          href="/careers" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          View Opportunities
        </a>
      </div>
    </AboutTemplate>
  );
}