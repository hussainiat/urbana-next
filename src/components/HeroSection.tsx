import Link from "next/link";
import { GraduationCap, Microscope, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-black py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="inline-block bg-[#800020]/10 px-3 py-2 sm:px-4 rounded-full mb-2">
              <span className="text-[#800020] font-medium text-xs sm:text-sm flex items-center">
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                NEB Affiliated College
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-oswald tracking-tight leading-tight">
              +2 Science <span className="text-[#800020]">Education</span> for Future Doctors & Engineers
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl font-lato leading-relaxed">
              A versatile educational program for aspiring medical and engineering students, 
              simplifying the preparation process and managing the entire academic journey.
            </p>

            
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button variant="primary" size="primary" asChild className="w-full sm:w-auto">
                <Link href="/admissions">Enroll Now</Link>
              </Button>
              
              <Button variant="secondary" size="primary" asChild className="w-full sm:w-auto">
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Education Card Style Element */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Top education icons */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2 z-10">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800020] flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#800020]/80 flex items-center justify-center shadow-sm">
                  <Microscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
              
              <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex items-center z-10">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#800020] flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-sm">
                  U
                </div>
                <div className="ml-2 sm:ml-3">
                  <h3 className="font-bold text-[#800020] text-sm sm:text-base">URBANA</h3>
                  <p className="text-xs text-gray-500 hidden xs:block">SCHOOL OF SCIENCE</p>
                </div>
              </div>
              
              {/* Student Image */}
              <div className="pt-14 sm:pt-24 px-3 sm:px-6 pb-3 sm:pb-6">
                <div className="bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden h-40 xs:h-48 sm:h-64 relative">
                  <Image 
                    src="/images/urbana/homepage.JPEG" 
                    alt="Students studying in laboratory" 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 480px) 95vw, (max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                </div>
                
                {/* Academic Info Card */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 xs:p-4 sm:p-6 mt-3 sm:mt-4 border border-gray-200">
                  <div className="flex items-start mb-3 sm:mb-0">
                    <div className="bg-[#800020] text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm xs:text-base sm:text-lg leading-tight">+2 Science Program</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">NEB Affiliated</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-medium mb-2">KEY SUBJECTS</p>
                    <div className="grid grid-cols-2 xs:flex xs:flex-wrap gap-1 sm:gap-2">
                      {["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"].map((subject) => (
                        <span key={subject} className="bg-gray-100 text-xs px-2 py-1 rounded text-center xs:text-left whitespace-nowrap">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 bg-[#800020]/10 p-2.5 sm:p-3 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs font-medium text-[#800020]">SUCCESS RATE</p>
                      <p className="font-bold text-[#800020] text-sm sm:text-base">92%</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-[#800020] h-2 rounded-full transition-all duration-500" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-[#800020] text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2">
                        <span className="font-bold text-xs sm:text-sm">+2</span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium">SCIENCE</span>
                    </div>
                    <Link href="/admissions" className="text-[#800020] text-xs sm:text-sm font-medium hover:underline flex items-center group">
                      <span className="hidden xs:inline sm:hidden">Apply</span>
                      <span className="hidden sm:inline">Admission Details</span>
                      <span className="xs:hidden">Join</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 sm:mt-12">
          {[
            { href: "/courses/medical-entrance", icon: <Microscope className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#800020] flex-shrink-0" />, text: "Medical Pathway", bgClass: "bg-[#e9ffe9] hover:bg-[#d0ffd0]" },
            { href: "/courses/engineering-entrance", icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#800020] flex-shrink-0" />, text: "Engineering Pathway", bgClass: "bg-[#f0e6ff] hover:bg-[#e5d4ff]" },
            { href: "/courses/success-stories", icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#800020] flex-shrink-0" />, text: "Success Stories", bgClass: "bg-[#fff8e6] hover:bg-[#ffe8b3]" }
          ].map((pill, index) => (
            <Link 
              key={index}
              href={pill.href} 
              className={`group ${pill.bgClass} text-black rounded-full py-3 px-4 sm:px-6 flex items-center justify-between transition-all duration-300`}
            >
              <div className="flex items-center min-w-0">
                {pill.icon}
                <span className="font-medium text-sm sm:text-base truncate">{pill.text}</span>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}