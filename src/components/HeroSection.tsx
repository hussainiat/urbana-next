import Image from "next/image";
import Link from "next/link";
import { Microscope, Beaker, Atom, Dna, Brain, GraduationCap, Star, Award, Sparkles } from "lucide-react";
import ClientScienceParticles from '@/components/ClientScienceParticles';

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-[800px] py-16 sm:py-20 md:py-24 overflow-hidden flex items-center">
      {/* Background with enhanced gradient and animated elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#8B0000] via-[#A52A2A] to-[#800020] overflow-hidden dark:from-deep-maroon dark:via-[#8B0000] dark:to-deep-maroon">
        {/* Improved morphing background shapes with more dynamic animation */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#A52A2A]/40 to-[#FF4500]/20 blur-3xl morph-background"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-[#A52A2A]/40 to-[#FF4500]/20 blur-3xl morph-background" style={{animationDelay: "2s"}}></div>
        
        {/* Additional background elements for depth */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none"></div>
      </div>
      
      {/* Enhanced Science Particles with higher density */}
      <ClientScienceParticles />
      
      {/* Decorative Elements - Enhanced with better positioning and effects */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        {/* Parallax floating elements with improved glow effects - adjusted for mobile */}
        <div className="absolute top-[15%] left-[5%] md:top-1/5 md:left-1/6 animate-float opacity-70 parallax-layer" data-depth="0.2">
          <Dna className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
        <div className="absolute bottom-[20%] right-[5%] md:bottom-1/4 md:right-1/5 animate-float-delayed opacity-70 parallax-layer" data-depth="0.4">
          <Atom className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
        <div className="absolute top-[65%] left-[10%] md:top-2/3 md:left-1/4 animate-float-slow opacity-70 parallax-layer" data-depth="0.3">
          <Brain className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
        
        {/* Enhanced light streaks with animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-70 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-0 w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
          
          {/* Additional diagonal light streaks */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent transform rotate-[15deg] origin-top"></div>
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent transform -rotate-[15deg] origin-top"></div>
          </div>
        </div>
      </div>
      
      {/* Content with improved layout and spacing */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content - Enhanced typography and animations */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 sm:mt-0">
            <div className="inline-block bg-gradient-to-r from-[#8B0000]/60 to-[#A52A2A]/60 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 font-oswald tracking-wider text-white text-xs sm:text-sm border border-white/30 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-1 sm:mr-2 animate-pulse" />
                <span>PREMIER +2 SCIENCE COLLEGE</span>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-oswald uppercase tracking-wider leading-tight text-shadow-lg">
              Discover <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Excellence</span> in <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 animate-gradient-x">Science Education</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-xl mx-auto md:mx-0 font-lato text-white/90 leading-relaxed">
            Urbana&apos;s +2 Science program combines academic rigor with hands-on laboratory experiences to shape tomorrow&apos;s scientists and innovators.
            </p>
            
            {/* Features - Enhanced with better hover effects and animations - improved for mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              {[
                { icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />, text: "Expert Faculty" },
                { icon: <Microscope className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />, text: "Modern Labs" },
                { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />, text: "98% Pass Rate" },
                { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />, text: "Top Results" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gradient-to-br from-[#8B0000]/40 to-[#A52A2A]/40 backdrop-blur-md p-2 sm:p-3 rounded-lg border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg group">
                  <div className="bg-gradient-to-br from-[#8B0000]/80 to-[#A52A2A]/80 p-1.5 sm:p-2 rounded-full shadow-inner group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-white/90 font-lato font-medium group-hover:text-white transition-colors duration-300">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA buttons with better hover effects - improved for mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link 
                href="/admissions" 
                className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-oswald uppercase tracking-wider font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 border border-white/20 hover:border-white/40 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center">
                  Apply Now
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link 
                href="/courses" 
                className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#8B0000] border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 md:px-8 md:py-4 rounded-md font-oswald uppercase tracking-wider font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 text-sm sm:text-base"
              >
                Explore Courses
              </Link>
            </div>
          </div>
          
          {/* Right Content - Enhanced 3D card with better effects - improved for mobile */}
          <div className="w-full md:w-1/2 relative mt-8 sm:mt-10 md:mt-0">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full perspective-1000">
              {/* Enhanced 3D card with better shadows and transforms */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/30 to-[#A52A2A]/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] transform rotate-y-3 rotate-x-2 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 float-card">
                {/* Enhanced glow effects */}
                <div className="absolute -right-20 -bottom-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#A52A2A]/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute -left-20 -top-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#A52A2A]/30 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none"></div>
                
                {/* Card content with improved spacing and animations */}
                <div className="relative h-full w-full p-3 sm:p-4 md:p-6 flex flex-col justify-between">
                  {/* Top Stats - Enhanced with better hover effects */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-4">
                    {[
                      { number: "98%", label: "Pass Rate" },
                      { number: "50+", label: "Expert Faculty" },
                      { number: "15+", label: "Years Experience" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-gradient-to-br from-[#8B0000]/40 to-[#A52A2A]/40 p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-md border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-white/30 group">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-100 transition-colors duration-300">{stat.number}</div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-white/90 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Center Image - Enhanced with better effects and vectors */}
                  <div className="relative h-36 sm:h-48 md:h-56 lg:h-60 w-full mx-auto my-2 sm:my-3 md:my-4 group">
                    {/* Enhanced background layer with better 3D effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/30 to-[#A52A2A]/30 backdrop-blur-md rounded-xl border border-white/20 transform transition-all duration-500 group-hover:scale-105 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
                    
                    {/* Enhanced image container with better shadows */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl border border-white/20 shadow-xl group-hover:border-white/30 transition-all duration-300">
                      <div className="relative w-full h-full">
                        <Image 
                          src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500&auto=format&fit=crop"
                          alt="Science Laboratory" 
                          fill
                          priority
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                          className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Enhanced overlay for better contrast with vectors */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/50 to-transparent pointer-events-none"></div>
                      </div>
                      
                      {/* Enhanced vectorized elements with better visibility and animations - adjusted for mobile */}
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        {/* Enhanced DNA Helix Vector */}
                        <svg className="absolute top-2 sm:top-4 left-2 sm:left-4 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.7)] animate-float-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4,2C3,5 2.5,8 2.5,12C2.5,16 3,19 4,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M20,2C21,5 21.5,8 21.5,12C21.5,16 21,19 20,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M4,2C7,2 17,4 20,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M4,22C7,22 17,20 20,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M4,6C7,6 17,8 20,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M4,18C7,18 17,16 20,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M4,10C7,10 17,12 20,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M4,14C7,14 17,16 20,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        
                        {/* Enhanced Molecular Structure Vector */}
                        <svg className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.7)] animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="2.5" fill="currentColor" className="animate-pulse-slow" />
                          <circle cx="6" cy="6" r="2" fill="currentColor" />
                          <circle cx="18" cy="18" r="2" fill="currentColor" />
                          <circle cx="18" cy="6" r="2" fill="currentColor" />
                          <circle cx="6" cy="18" r="2" fill="currentColor" />
                          <line x1="12" y1="10" x2="6" y2="6" stroke="currentColor" strokeWidth="1.2" />
                          <line x1="12" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="1.2" />
                          <line x1="14" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1.2" />
                          <line x1="10" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                        
                        {/* Enhanced Mathematical Formula */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#8B0000]/80 to-[#A52A2A]/80 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 md:py-2 rounded-lg border border-white/40 rotate-6 shadow-lg hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                          <span className="text-white text-[10px] sm:text-xs md:text-sm font-mono font-bold drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">E = mc²</span>
                        </div>
                        
                        {/* Enhanced Circuit Board Pattern - hidden on smallest screens */}
                        <svg className="absolute top-1/3 right-6 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.7)] animate-float-delayed hidden sm:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2,12 L22,12" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M12,2 L12,22" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M2,6 L6,6 L6,2" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18,2 L18,6 L22,6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M22,18 L18,18 L18,22" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6,22 L6,18 L2,18" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.75" className="animate-pulse" />
                        </svg>
                        
                        {/* Chemistry and Physics Formulas - hidden on mobile */}
                        <div className="absolute top-6 right-1/4 bg-gradient-to-br from-[#8B0000]/70 to-[#A52A2A]/70 backdrop-blur-sm px-2 py-1 rounded-md border border-white/30 -rotate-3 shadow-md hidden md:block animate-float-slow">
                          <span className="text-white text-xs font-mono drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]">H₂O</span>
                        </div>
                        
                        <div className="absolute bottom-6 left-1/4 bg-gradient-to-br from-[#8B0000]/70 to-[#A52A2A]/70 backdrop-blur-sm px-2 py-1 rounded-md border border-white/30 rotate-3 shadow-md hidden md:block animate-float-delayed">
                          <span className="text-white text-xs font-mono drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]">F=ma</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Microscope icon */}
                    <div className="absolute -right-1 sm:-right-2 -bottom-1 sm:-bottom-2 bg-gradient-to-br from-[#8B0000]/80 to-[#A52A2A]/80 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-full border border-white/40 shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 z-30 animate-float-slow">
                      <Microscope className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" />
                    </div>
                  </div>
                  
                  {/* Enhanced Bottom Feature */}
                  <div className="bg-gradient-to-br from-[#8B0000]/40 to-[#A52A2A]/40 p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group">
                    <div className="flex items-center">
                      <Beaker className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mr-1.5 sm:mr-2" />
                      <div className="text-sm sm:text-base md:text-lg font-bold text-white">State-of-the-art Laboratories</div>
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-white/90 mt-0.5 sm:mt-1">Modern facilities for Physics, Chemistry & Biology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
