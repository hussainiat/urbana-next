import { Users } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function FacultyStaff() {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Principal",
      department: "Administration",
      education: "Ph.D. in Education, Harvard University",
      experience: "25+ years",
      image: "/images/faculty/principal.jpg"
    },
    {
      name: "Dr. Priya Patel",
      position: "Head of Science Department",
      department: "Physics",
      education: "Ph.D. in Physics, MIT",
      experience: "18 years",
      image: "/images/faculty/science-head.jpg"
    },
    {
      name: "Prof. Anand Kumar",
      position: "Senior Faculty",
      department: "Mathematics",
      education: "M.Sc. in Mathematics, IIT Delhi",
      experience: "20 years",
      image: "/images/faculty/math-faculty.jpg"
    },
    {
      name: "Dr. Meera Singh",
      position: "Senior Faculty",
      department: "Chemistry",
      education: "Ph.D. in Chemistry, University of Cambridge",
      experience: "15 years",
      image: "/images/faculty/chemistry-faculty.jpg"
    },
    {
      name: "Prof. Sanjay Gupta",
      position: "Senior Faculty",
      department: "Biology",
      education: "M.Sc. in Biology, Delhi University",
      experience: "12 years",
      image: "/images/faculty/biology-faculty.jpg"
    },
    {
      name: "Ms. Neha Verma",
      position: "Counselor",
      department: "Student Support",
      education: "M.A. in Psychology, University of Mumbai",
      experience: "10 years",
      image: "/images/faculty/counselor.jpg"
    }
  ];

  const departments = [
    "Administration",
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "English",
    "Student Support"
  ];

  return (
    <AboutTemplate
      title="Faculty & Staff"
      description="Meet our experienced team of educators and administrators"
      icon={<Users className="w-8 h-8 text-[#800020]" />}
    >
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-4 py-2 rounded-full font-oswald text-sm uppercase tracking-wider bg-[#800020] text-white">
            All
          </button>
          {departments.map((dept, index) => (
            <button 
              key={index}
              className="px-4 py-2 rounded-full font-oswald text-sm uppercase tracking-wider bg-white text-[#800020] border border-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
            >
              {dept}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-64 w-full">
                <Image 
                  src={faculty.image} 
                  alt={faculty.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold mb-1 text-[#800020]">{faculty.name}</h3>
                <p className="font-oswald text-sm uppercase tracking-wider text-gray-500 mb-3">{faculty.position}</p>
                <div className="space-y-2 font-lato text-gray-600">
                  <p><span className="font-semibold">Department:</span> {faculty.department}</p>
                  <p><span className="font-semibold">Education:</span> {faculty.education}</p>
                  <p><span className="font-semibold">Experience:</span> {faculty.experience}</p>
                </div>
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