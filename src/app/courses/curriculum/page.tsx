import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Curriculum() {
  const courses = [
    {
      title: "+2 Science",
      description: "Comprehensive science program for higher secondary education",
      path: "/courses/plus-two-science"
    },
    {
      title: "Medical Entrance",
      description: "Specialized preparation for medical entrance examinations",
      path: "/courses/medical-entrance"
    },
    {
      title: "Engineering Entrance",
      description: "Focused preparation for engineering entrance examinations",
      path: "/courses/engineering-entrance"
    },
    {
      title: "US University Scholarships",
      description: "Guidance for US university applications and scholarships",
      path: "/courses/us-scholarships"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
          <BookOpen className="w-8 h-8 text-[#800020]" />
        </div>
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Course Curriculum</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Explore our comprehensive curriculum designed to provide students with the knowledge and skills needed for academic excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {courses.map((course, index) => (
          <Link 
            href={course.path} 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all"
          >
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{course.title}</h3>
            <p className="font-lato text-gray-600 mb-4">{course.description}</p>
            <span className="font-oswald text-[#800020] hover:text-[#e63946] uppercase tracking-wider flex items-center">
              View Curriculum
            </span>
          </Link>
        ))}
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Our Teaching Methodology</h2>
        <p className="font-lato text-gray-600 mb-6">
          At Urbana, we believe in a holistic approach to education that combines theoretical knowledge with practical applications. Our teaching methodology is designed to foster critical thinking, problem-solving skills, and a deep understanding of concepts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Interactive Learning</h3>
            <p className="font-lato text-gray-600">Engaging classroom sessions that encourage active participation and discussion.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Practical Application</h3>
            <p className="font-lato text-gray-600">Hands-on activities and laboratory work to reinforce theoretical concepts.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Regular Assessment</h3>
            <p className="font-lato text-gray-600">Continuous evaluation through tests and assignments with detailed feedback.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Have Questions?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Our academic counselors are available to provide detailed information about our curriculum and help you choose the right program.
        </p>
        <Link 
          href="/contact" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Contact Academic Counselor
        </Link>
      </div>
    </div>
  );
}