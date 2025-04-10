import { Building2, Award, Calendar, Users, BookOpen, Globe, CheckCircle } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function InstituteOverview() {
  const achievements = [
    { 
      title: "95%", 
      description: "Success rate in competitive exams",
      icon: <Award className="w-10 h-10 text-[#800020]" />
    },
    { 
      title: "25+", 
      description: "Years of educational excellence",
      icon: <Calendar className="w-10 h-10 text-[#800020]" />
    },
    { 
      title: "5000+", 
      description: "Alumni in prestigious institutions",
      icon: <Users className="w-10 h-10 text-[#800020]" />
    },
    { 
      title: "50+", 
      description: "Expert faculty members",
      icon: <BookOpen className="w-10 h-10 text-[#800020]" />
    }
  ];

  return (
    <AboutTemplate
      title="Institute Overview"
      description="Learn about our history, achievements, and educational philosophy"
      icon={<Building2 className="w-8 h-8 text-[#800020]" />}
    >
      {/* Hero section */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-[300px]">
        <Image 
          src="/images/urbana/homepage.JPEG" 
          alt="Urbana Campus" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white max-w-2xl px-8 md:px-12">
            <h1 className="font-montserrat text-3xl font-bold mb-3">Our Journey of Excellence</h1>
            <p className="font-lato text-lg">
              From humble beginnings to becoming a leading institution in science education
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Our History</h2>
          <p className="font-lato text-gray-600 mb-4">
            Founded in 1995, Urbana School of Science has grown from a small tutoring center to one of the most respected educational institutions in Nepal. Our journey began with a vision to provide quality science education that prepares students for academic excellence and future success.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            Over the years, we have expanded our facilities, enhanced our curriculum, and built a team of dedicated educators committed to nurturing the potential of every student. Our focus on science education has helped thousands of students achieve their dreams of entering medical, engineering, and other scientific fields.
          </p>
          <p className="font-lato text-gray-600">
            Today, Urbana stands as a beacon of educational excellence in Nepal, known for its innovative teaching methods, comprehensive curriculum, and consistent record of student achievements in competitive examinations.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/urbana/IMG_6919.JPEG" 
            alt="Urbana Campus" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="font-montserrat text-lg font-bold text-white">Our Modern Campus</p>
          </div>
        </div>
      </div>
      
      {/* Achievements section */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-8 text-[#800020] text-center">Our Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center bg-[#800020]/10 p-4 rounded-full mb-4">
                {achievement.icon}
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-2 text-[#800020]">{achievement.title}</h3>
              <p className="font-lato text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Key Milestones</h2>
        
        <div className="relative border-l-2 border-[#800020] ml-6 md:ml-12 pl-8 space-y-10">
          <div className="relative">
            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#800020] border-4 border-white"></div>
            <div className="font-oswald font-bold text-[#800020] text-xl mb-2">1995</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">Establishment</h3>
            <p className="font-lato text-gray-600">Urbana School of Science was founded with a mission to provide quality science education in Nepal.</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#800020] border-4 border-white"></div>
            <div className="font-oswald font-bold text-[#800020] text-xl mb-2">2000</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">Expansion</h3>
            <p className="font-lato text-gray-600">Expanded facilities to accommodate growing student enrollment and introduced specialized programs for medical and engineering entrance preparation.</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#800020] border-4 border-white"></div>
            <div className="font-oswald font-bold text-[#800020] text-xl mb-2">2005</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">Recognition</h3>
            <p className="font-lato text-gray-600">Received national recognition for academic excellence and innovative teaching methods in science education.</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#800020] border-4 border-white"></div>
            <div className="font-oswald font-bold text-[#800020] text-xl mb-2">2010</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">International Partnerships</h3>
            <p className="font-lato text-gray-600">Established partnerships with international educational institutions for student exchange programs and advanced learning opportunities.</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#800020] border-4 border-white"></div>
            <div className="font-oswald font-bold text-[#800020] text-xl mb-2">2015</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">Modern Campus</h3>
            <p className="font-lato text-gray-600">Inaugurated a state-of-the-art campus with advanced laboratories, smart classrooms, and technology integration.</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#800020] border-4 border-white"></div>
            <div className="font-oswald font-bold text-[#800020] text-xl mb-2">2020</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">Silver Jubilee</h3>
            <p className="font-lato text-gray-600">Celebrated 25 years of educational excellence and community service with a series of academic and cultural events.</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-[#800020]" />
          </div>
          <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Educational Philosophy</h3>
          <p className="font-lato text-gray-600 mb-4">
            We believe in a holistic approach to science education that nurtures intellectual curiosity, analytical thinking, and practical skills. Our teaching methodology encourages critical thinking, problem-solving, and a love for lifelong learning.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#800020] mr-2 mt-1 flex-shrink-0" />
              <span className="font-lato text-gray-600">Conceptual understanding over rote learning</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#800020] mr-2 mt-1 flex-shrink-0" />
              <span className="font-lato text-gray-600">Practical application of theoretical knowledge</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
            <Award className="w-8 h-8 text-[#800020]" />
          </div>
          <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Core Values</h3>
          <p className="font-lato text-gray-600 mb-4">
            Excellence, integrity, respect, and innovation form the foundation of our educational approach. We instill these values in our students to prepare them for success in a global society.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#800020] mr-2 mt-1 flex-shrink-0" />
              <span className="font-lato text-gray-600">Pursuit of excellence in all endeavors</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#800020] mr-2 mt-1 flex-shrink-0" />
              <span className="font-lato text-gray-600">Ethical conduct and personal integrity</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
            <Globe className="w-8 h-8 text-[#800020]" />
          </div>
          <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Community Engagement</h3>
          <p className="font-lato text-gray-600 mb-4">
            We actively engage with the community through science outreach programs, educational workshops, and collaborative initiatives that promote scientific literacy and social responsibility.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#800020] mr-2 mt-1 flex-shrink-0" />
              <span className="font-lato text-gray-600">Science awareness programs for local schools</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#800020] mr-2 mt-1 flex-shrink-0" />
              <span className="font-lato text-gray-600">Environmental and health education initiatives</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Final CTA section */}
      <div className="bg-[#800020] text-white rounded-xl p-8 text-center">
        <h2 className="font-montserrat text-2xl font-bold mb-4">Join Our Legacy</h2>
        <p className="font-lato text-lg mb-6 max-w-2xl mx-auto">
          Become part of Urbana&apos;s tradition of excellence and prepare for a successful future in science, medicine, or engineering.
        </p>
        <a 
          href="/admissions" 
          className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Apply Now
        </a>
      </div>
    </AboutTemplate>
  );
}