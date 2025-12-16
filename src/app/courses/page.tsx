import { Book, Stethoscope, Cog, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "+2 Science",
      description: "Comprehensive science program for higher secondary education with focus on Physics, Chemistry, Biology, and Mathematics.",
      icon: <Book className="w-8 h-8 text-[#800020]" />,
      link: "/courses/plus-two-science",
      features: ["Expert faculty", "Well-equipped labs", "Regular assessments"]
    },
    {
      title: "Medical Entrance",
      description: "Specialized preparation for medical entrance examinations with comprehensive coverage and extensive practice.",
      icon: <Stethoscope className="w-8 h-8 text-[#800020]" />,
      link: "/courses/medical-entrance",
      features: ["Focused preparation", "Mock tests", "Personalized feedback"]
    },
    {
      title: "Engineering Entrance",
      description: "Focused program for engineering entrance examinations with emphasis on problem-solving techniques.",
      icon: <Cog className="w-8 h-8 text-[#800020]" />,
      link: "/courses/engineering-entrance",
      features: ["Problem-solving sessions", "Expert guidance", "Regular practice tests"]
    },
    {
      title: "US University Scholarships",
      description: "Comprehensive guidance for US university applications and securing scholarships for higher education.",
      icon: <GraduationCap className="w-8 h-8 text-[#800020]" />,
      link: "/courses/us-scholarships",
      features: ["University selection", "Test preparation", "Application support"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Our Courses</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Explore our specialized programs designed to provide comprehensive education and prepare students for academic excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="p-8">
              <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
                {course.icon}
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3 text-[#800020]">{course.title}</h3>
              <p className="font-lato mb-4 text-gray-600">{course.description}</p>
              
              <ul className="mb-6 space-y-2">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-[#800020] rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={course.link}
                className="inline-flex items-center font-oswald text-[#800020] hover:text-[#e63946] uppercase tracking-wider"
              >
                View Details 
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Why Choose Urbana</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Expert Faculty</h3>
            <p className="font-lato text-gray-600">Our faculty comprises experienced educators with expertise in their respective fields.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Modern Facilities</h3>
            <p className="font-lato text-gray-600">Well-equipped laboratories, library, and classrooms with modern teaching aids.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Proven Results</h3>
            <p className="font-lato text-gray-600">Consistent record of student achievements in examinations and university admissions.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Ready to Get Started?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Take the first step towards academic excellence. Apply now or contact us to learn more about our programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/admissions" 
            className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Apply Now
          </Link>
          <Link 
            href="/contact" 
            className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] border border-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}