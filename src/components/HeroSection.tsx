import Link from "next/link";
import {GraduationCap, Award, Stethoscope, Atom, FlaskConical } from "lucide-react";
import ClientScienceParticles from '@/components/ClientScienceParticles';

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-[650px] py-16 sm:py-20 overflow-hidden flex items-center">
      {/* Clean background with education-themed color */}
      <div className="absolute inset-0 z-0 bg-[#800020] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      </div>
      
      <ClientScienceParticles />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-16">
          {/* Left column: Heading, paragraph, and CTA buttons */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full mb-4 sm:mb-5 font-oswald tracking-wider text-white text-xs sm:text-sm border border-white/20 shadow-sm">
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 text-white mr-2" />
                <span>PATHWAY TO MEDICAL & ENGINEERING CAREERS</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 font-oswald uppercase tracking-wider leading-tight">
              Building Future <span className="underline decoration-2 underline-offset-4">Doctors & Engineers</span>
            </h1>
            
            <p className="text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0 font-lato text-white/90 leading-relaxed">
              Urbana's specialized +2 Science program prepares students for success in medical, engineering, and scientific fields with advanced curriculum and practical training.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link 
                href="/admissions" 
                className="bg-white text-[#800020] px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-oswald uppercase tracking-wider font-bold transition-all duration-300 hover:bg-white/90 text-sm shadow-md"
              >
                <span className="flex items-center justify-center">
                  Apply for Admission
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link 
                href="/courses" 
                className="bg-transparent text-white border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-oswald uppercase tracking-wider font-bold transition-all duration-300 hover:bg-white/10 text-sm"
              >
                Explore Programs
              </Link>
            </div>
          </div>
          
          {/* Right column: Stats and features cards */}
          <div className="w-full md:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-white/10 shadow-lg">
              {/* Career-focused stats in a professional layout */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                {[
                  { number: "92%", label: "Medical College Admissions" },
                  { number: "88%", label: "Engineering Placements" },
                  { number: "95%", label: "STEM Field Success" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 py-3 sm:py-4 px-2 sm:px-3 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center shadow-sm">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-white/80 text-center">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Career path focused features */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: <Stethoscope className="w-5 h-5 text-white" />, text: "Medical Preparation" },
                  { icon: <Atom className="w-5 h-5 text-white" />, text: "Engineering Pathway" },
                  { icon: <FlaskConical className="w-5 h-5 text-white" />, text: "Advanced Labs" },
                  { icon: <Award className="w-5 h-5 text-white" />, text: "Entrance Exam Success" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 p-3 sm:p-4 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center shadow-sm">
                    <div className="bg-white/20 p-2 rounded-full mr-3 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-sm sm:text-base text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}