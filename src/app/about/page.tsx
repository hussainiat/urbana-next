import Image from "next/image";
import Link from "next/link";
import { Building2, Target, Users, School, MessageCircle, User, Activity, Image as LucideIcon, ChevronRight, Trophy, Lightbulb, Scale,} from "lucide-react";

export default function About() {
  const aboutSections = [
    {
      icon: <Building2 className="w-8 h-8 text-[#800020]" />,
      title: "Institute Overview",
      description: "Learn about our history, achievements, and educational philosophy",
      path: "/about/overview"
    },
    {
      icon: <Target className="w-8 h-8 text-[#800020]" />,
      title: "Mission & Vision",
      description: "Discover our goals and commitment to educational excellence",
      path: "/about/mission-vision"
    },
    {
      icon: <Users className="w-8 h-8 text-[#800020]" />,
      title: "Faculty & Staff",
      description: "Meet our experienced team of educators and administrators",
      path: "/about/faculty"
    },
    {
      icon: <School className="w-8 h-8 text-[#800020]" />,
      title: "Infrastructure & Facilities",
      description: "Explore our state-of-the-art campus and learning facilities",
      path: "/about/facilities"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#800020]" />,
      title: "Testimonials",
      description: "Read success stories from our students and alumni",
      path: "/about/testimonials"
    },
    {
      icon: <User className="w-8 h-8 text-[#800020]" />,
      title: "Message from Principal",
      description: "Read a personal message from our school's leadership",
      path: "/about/principal-message"
    },
    {
      icon: <Activity className="w-8 h-8 text-[#800020]" />,
      title: "Life at Urbana",
      description: "Experience the vibrant student life and campus culture",
      path: "/about/campus-life"
    },
    {
      icon: <LucideIcon className="w-8 h-8 text-[#800020]" />,
      title: "Gallery",
      description: "Browse photos from our campus events and activities",
      path: "/about/gallery"
    }
  ];

  const values = [
    { 
      title: "Excellence", 
      description: "Striving for the highest standards in all our endeavors",
      icon: <Trophy className="w-10 h-10 text-[#800020]" />
    },
    { 
      title: "Innovation", 
      description: "Embracing new ideas and approaches to education",
      icon: <Lightbulb className="w-10 h-10 text-[#800020]" />
    },
    { 
      title: "Integrity", 
      description: "Upholding honesty, ethics, and transparency in all actions",
      icon: <Scale className="w-10 h-10 text-[#800020]" />
    },
    { 
      title: "Inclusivity", 
      description: "Creating a diverse and welcoming community for all",
      icon: <Users className="w-10 h-10 text-[#800020]" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section with improved styling */}
      <div className="relative rounded-xl overflow-hidden mb-16 h-[400px] md:h-[500px]">
        <Image 
          src="/images/urbana/homepage.JPEG" 
          alt="Urbana Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white max-w-2xl px-8 md:px-12">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">About Urbana</h1>
            <div className="w-24 h-1 bg-white mb-6"></div>
            <p className="font-lato text-lg mb-8">
              Discover our rich history, values, and the people who make Urbana a center of scientific educational excellence
            </p>
            <Link 
              href="#explore" 
              className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Our Story section with card styling */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="font-montserrat text-3xl font-bold mb-6 text-[#800020]">Our Story</h2>
            <p className="font-lato text-lg mb-4 text-gray-600">
              Urbana School of Science is a premier educational institution dedicated to providing quality science education and fostering academic excellence. Founded with a vision to nurture future scientists, doctors, and engineers, we have been at the forefront of innovative teaching methodologies and holistic development.
            </p>
            <p className="font-lato text-lg mb-4 text-gray-600">
              Our mission is to empower students with scientific knowledge, practical skills, and values that prepare them for the challenges of the future. We believe in nurturing not just academic brilliance but also critical thinking, problem-solving abilities, and social responsibility.
            </p>
            <p className="font-lato text-lg text-gray-600">
              With state-of-the-art laboratories, modern classrooms, and a team of dedicated educators, Urbana provides an environment where learning is engaging, meaningful, and transformative.
            </p>
          </div>
          <div className="relative h-[400px] md:h-auto">
            <Image 
              src="/images/urbana/IMG_6919.JPEG" 
              alt="Urbana School Building"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="font-oswald text-sm uppercase tracking-wider mb-1 text-white">Excellence in Science Education</p>
              <h3 className="font-montserrat text-2xl font-bold text-white">Shaping Future Scientists</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Academic Excellence section */}
      <div className="mb-16">
        <h2 className="font-montserrat text-3xl font-bold mb-8 text-[#800020] text-center">Academic Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/urbana/IMG_6922.JPEG" 
                alt="Laboratory Facilities"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Modern Laboratories</h3>
            <p className="font-lato text-gray-600">Our well-equipped laboratories provide students with hands-on experience in physics, chemistry, and biology, enhancing their practical understanding of scientific concepts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/urbana/IMG_6923.JPEG" 
                alt="Classroom Teaching"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Expert Faculty</h3>
            <p className="font-lato text-gray-600">Our experienced teachers employ innovative teaching methodologies to make complex scientific concepts accessible and engaging for students at all levels.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/urbana/IMG_6927.JPEG" 
                alt="Student Guidance"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Personalized Guidance</h3>
            <p className="font-lato text-gray-600">We provide individualized attention to each student, identifying their strengths and areas for improvement to help them achieve their academic goals.</p>
          </div>
        </div>
      </div>
      
      {/* Core Values section with improved icons */}
      <div className="mb-16">
        <h2 className="font-montserrat text-3xl font-bold mb-8 text-[#800020] text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center bg-[#800020]/10 p-4 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">{value.title}</h3>
              <p className="font-lato text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Student Success section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-auto">
            <Image 
              src="/images/urbana/IMG_6930.JPEG" 
              alt="Student Success"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <h2 className="font-montserrat text-3xl font-bold mb-6 text-[#800020]">Student Success</h2>
            <p className="font-lato text-lg mb-4 text-gray-600">
              At Urbana, we take pride in our students&apos; achievements in various competitive examinations and their admissions to prestigious institutions for higher education.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Medical Entrance</h3>
                <p className="font-lato text-gray-600">Exceptional success rate in medical entrance examinations</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Engineering</h3>
                <p className="font-lato text-gray-600">Top ranks in engineering entrance examinations</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Science Olympiads</h3>
                <p className="font-lato text-gray-600">National and international recognition in science competitions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">Board Exams</h3>
                <p className="font-lato text-gray-600">Consistently outstanding results in board examinations</p>
              </div>
            </div>
            <Link 
              href="/about/testimonials" 
              className="inline-flex items-center font-oswald text-[#800020] uppercase tracking-wider hover:translate-x-1 transition-transform"
            >
              Read Success Stories
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Explore More section with improved card design */}
      <div className="mb-16" id="explore">
        <h2 className="font-montserrat text-3xl font-bold mb-8 text-[#800020] text-center">Explore More About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutSections.map((section, index) => (
            <Link 
              key={index} 
              href={section.path}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[#800020]/30 transition-all flex flex-col h-full group"
            >
              <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4 group-hover:bg-[#800020]/20 transition-colors">
                {section.icon}
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{section.title}</h3>
              <p className="font-lato text-gray-600 mb-4">{section.description}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center font-oswald text-[#800020] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* CTA section with improved design */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <Image 
          src="/images/urbana/IMG_6931.JPEG" 
          alt="Urbana Campus"
          width={1200}
          height={400}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/90 to-transparent flex items-center">
          <div className="text-white max-w-2xl px-8 md:px-12">
            <h2 className="font-montserrat text-3xl font-bold mb-4">Join Urbana</h2>
            <p className="font-lato text-lg mb-6">
              Take the first step towards a successful career in science, medicine, or engineering. Apply for admission or schedule a campus visit today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/admissions" 
                className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
              >
                Apply Now
              </Link>
              <Link 
                href="/contact" 
                className="inline-block font-oswald bg-transparent hover:bg-white/20 text-white border border-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
              >
                Visit Campus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}