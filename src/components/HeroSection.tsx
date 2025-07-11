import Link from "next/link";
import { GraduationCap, Microscope, Building2, ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="hidden md:block space-y-8">
            <div className="inline-block bg-[#800020]/10 px-4 py-2 rounded-full mb-2">
              <span className="text-[#800020] font-medium text-sm flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                NEB Affiliated College
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-oswald tracking-tight leading-none">
              +2 Science <span className="text-[#800020]">Education</span> for Future Doctors & Engineers
            </h1>
            
            <p className="text-gray-600 text-lg max-w-xl font-lato leading-relaxed">
              A versatile educational program for aspiring medical and engineering students, 
              simplifying the preparation process and managing the entire academic journey.
            </p>

            <div className="bg-[#800020] text-white p-4 rounded-lg mt-4 mb-4">
              <h2 className="text-xl font-bold mb-2">ADMISSION ONGOING</h2>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">Entrance Exam: Ashar 29 | Sunday</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium">Time: 11:30 AM</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Contact: 01-5321238 / 5321239</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary" size="primary" asChild>
                <Link href="/admissions">Enroll Now</Link>
              </Button>
              
              <Button variant="secondary" size="primary" asChild>
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Education Card Style Element */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Top education icons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#800020] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#800020]/80 flex items-center justify-center">
                  <Microscope className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="absolute top-6 left-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center text-white font-bold text-xl">
                  U
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-[#800020]">URBANA</h3>
                  <p className="text-xs text-gray-500">SCHOOL OF SCIENCE</p>
                </div>
              </div>
              
              {/* Student Image */}
              <div className="pt-24 px-6 pb-6">
                <div className="bg-gray-100 rounded-xl overflow-hidden h-64 relative">
                  <Image 
                    src="/images/urbana/homepage.JPEG" 
                    alt="Students studying in laboratory" 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Academic Info Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 mt-4 border border-gray-200">
                  <div className="flex items-start">
                    <div className="bg-[#800020] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">+2 Science Program</h3>
                      <p className="text-gray-500 text-sm">NEB Affiliated</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">KEY SUBJECTS</p>
                    <div className="flex flex-wrap gap-2">
                      {["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"].map((subject) => (
                        <span key={subject} className="bg-gray-100 text-xs px-2 py-1 rounded">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-[#800020]/10 p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-medium text-[#800020]">SUCCESS RATE</p>
                      <p className="font-bold text-[#800020]">92%</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div className="bg-[#800020] h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-[#800020] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span className="font-bold">+2</span>
                      </div>
                      <span className="text-sm font-medium">SCIENCE</span>
                    </div>
                    <Link href="/admissions" className="text-[#800020] text-sm font-medium hover:underline flex items-center">
                      <span>Admission Details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12">
          {[
            { href: "/courses/medical-entrance", icon: <Microscope className="w-5 h-5 mr-3 text-[#800020]" />, text: "Medical Pathway", bgClass: "bg-[#e9ffe9] hover:bg-[#d0ffd0]" },
            { href: "/courses/engineering-entrance", icon: <Building2 className="w-5 h-5 mr-3 text-[#800020]" />, text: "Engineering Pathway", bgClass: "bg-[#f0e6ff] hover:bg-[#e5d4ff]" },
            { href: "/courses/success-stories", icon: <GraduationCap className="w-5 h-5 mr-3 text-[#800020]" />, text: "Success Stories", bgClass: "bg-[#fff8e6] hover:bg-[#ffe8b3]" }
          ].map((pill, index) => (
            <Link 
              key={index}
              href={pill.href} 
              className={`group ${pill.bgClass} text-black rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300`}
            >
              <div className="flex items-center">
                {pill.icon}
                <span className="font-medium">{pill.text}</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}