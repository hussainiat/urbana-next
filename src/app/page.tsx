// Remove unused imports
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronRight, Star, Sparkles, GraduationCap, Trophy, Clock, Bell, Calendar, Newspaper } from "lucide-react";
import ParallaxEffect from '@/components/ParallaxEffect';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxEffect />
      
      {/* Hero Section Component */}
      <HeroSection />

      {/* News and Notice Section */}
      <section className="py-8 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Latest News - Left Side (3 columns) */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Newspaper className="w-5 h-5 text-[#800020] mr-2" />
                  <h3 className="font-oswald text-[#800020] text-xl uppercase tracking-wider">Latest News</h3>
                </div>
                <Link 
                  href="/news" 
                  className="inline-flex items-center text-[#800020] hover:text-[#e63946] text-sm font-oswald tracking-wider transition-colors"
                >
                  VIEW ALL
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    title: "Annual Science Exhibition",
                    date: "May 15, 2023",
                    excerpt: "Students showcased innovative projects at our annual science exhibition, impressing judges and visitors alike.",
                    image: "https://images.unsplash.com/photo-1712903911024-0503895511b0?q=80&w=800&auto=format&fit=crop",
                    category: "Events"
                  },
                  {
                    title: "National Debate Competition Winners",
                    date: "April 28, 2023",
                    excerpt: "Our debate team secured first place in the National Inter-School Debate Competition held in Kathmandu.",
                    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=800&auto=format&fit=crop",
                    category: "Achievements"
                  },
                  {
                    title: "New Computer Lab Inauguration",
                    date: "March 10, 2023",
                    excerpt: "State-of-the-art computer lab with 30 new workstations was inaugurated to enhance digital learning.",
                    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
                    category: "Facilities"
                  }
                ].map((news, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden">
                      <Image 
                        src={news.image} 
                        alt={news.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-[#800020] text-white text-xs px-2 py-1 rounded-full font-oswald tracking-wider">
                        {news.category}
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <div className="flex items-center text-xs text-gray-500 mb-2 font-lato">
                        <Calendar className="w-3 h-3 mr-1" />
                        {news.date}
                      </div>
                      <h3 className="font-montserrat text-base font-bold mb-2 text-[#800020] group-hover:text-[#e63946] transition-colors">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 font-lato line-clamp-2 flex-grow">{news.excerpt}</p>
                      <Link 
                        href="/news" 
                        className="inline-flex items-center text-[#800020] hover:text-[#e63946] font-oswald text-xs uppercase tracking-wider transition-colors mt-auto"
                      >
                        Read More
                        <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vertical Notice Board - Right Side (1 column) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="bg-gradient-to-r from-[#800020] to-[#e63946] py-3 px-4">
                  <div className="flex items-center">
                    <Bell className="w-4 h-4 text-white mr-2" />
                    <h3 className="font-oswald text-white text-base uppercase tracking-wider">Notice Board</h3>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100 overflow-y-auto flex-grow" style={{ maxHeight: '350px' }}>
                  {[
                    {
                      title: "Admission Open for 2023-24",
                      date: "June 15, 2023",
                      link: "/admissions",
                      category: "Admissions"
                    },
                    {
                      title: "Scholarship Test Registration",
                      date: "July 2, 2023",
                      link: "/scholarships",
                      category: "Scholarships"
                    },
                    {
                      title: "Annual Sports Meet Schedule",
                      date: "August 10, 2023",
                      link: "/events/sports-meet",
                      category: "Events"
                    },
                    {
                      title: "Parent-Teacher Meeting",
                      date: "July 25, 2023",
                      link: "/events/ptm",
                      category: "Meetings"
                    },
                    {
                      title: "Summer Vacation Notice",
                      date: "June 20, 2023",
                      link: "/notices/summer-vacation",
                      category: "Holidays"
                    }
                  ].map((notice, index) => (
                    <Link 
                      key={index} 
                      href={notice.link}
                      className="block py-3 px-4 hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-xs font-oswald uppercase tracking-wider text-[#e63946]">{notice.category}</span>
                      <h4 className="font-montserrat text-sm font-bold mb-1 text-gray-800 group-hover:text-[#800020] transition-colors">{notice.title}</h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {notice.date}
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-3 text-center border-t border-gray-100 mt-auto">
                  <Link 
                    href="/notices" 
                    className="inline-flex items-center text-[#800020] hover:text-[#e63946] text-sm font-oswald tracking-wider transition-colors"
                  >
                    VIEW ALL NOTICES
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Programs Section with enhanced UI */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#800020]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e63946]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block bg-[#800020]/10 px-3 py-1 rounded-full mb-3 font-oswald tracking-wider text-[#800020] text-xs sm:text-sm">
              <div className="flex items-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[#e63946]" />
                <span>EXCELLENCE IN EDUCATION</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-oswald uppercase tracking-wider text-[#800020] mb-3 sm:mb-4">
              OUR FEATURED PROGRAMS
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-lato">
              Specialized programs designed to prepare students for competitive exams and higher education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "+2 Science",
                description: "Comprehensive science curriculum with practical lab sessions and research opportunities.",
                icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#e63946]" />,
                stats: "98% Pass Rate",
                link: "/courses/plus-two-science",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
                badge: "Most Popular"
              },
              {
                title: "Medical Entrance",
                description: "Specialized coaching for MBBS, BDS, and other medical entrance examinations.",
                icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#e63946]" />,
                stats: "85% Success Rate",
                link: "/courses/medical-entrance",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
                badge: "High Demand"
              },
              {
                title: "Engineering Entrance",
                description: "Focused preparation for IOE and other engineering entrance examinations.",
                icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#e63946]" />,
                stats: "92% Success Rate",
                link: "/courses/engineering-entrance",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
                badge: "Top Rated"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-[#800020]/30">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image 
                    src={program.image} 
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-[#800020]/90 transition-colors duration-300"></div>
                  
                  {/* Badge */}
                  {program.badge && (
                    <div className="absolute top-2 right-2 bg-[#e63946] text-white text-xs font-bold px-2 py-0.5 rounded-full font-oswald tracking-wider flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {program.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-2 left-3 right-3">
                    <h3 className="text-lg sm:text-xl font-bold font-oswald text-white mb-0.5 group-hover:text-yellow-100 transition-colors duration-300">{program.title}</h3>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 text-white/80 mr-1" />
                      <span className="text-xs text-white/80 font-lato">2 Year Program</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#800020]/10 p-2 rounded-full mr-3 group-hover:bg-[#800020]/20 transition-colors duration-300">
                      {program.icon}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#800020]/80 font-oswald uppercase tracking-wider flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {program.stats}
                    </div>
                  </div>
                  <p className="mb-4 text-gray-600 font-lato text-sm">{program.description}</p>
                  <Link 
                    href={program.link} 
                    className="inline-flex items-center justify-center w-full bg-[#800020]/10 hover:bg-[#800020] hover:text-white text-[#800020] font-oswald uppercase tracking-wider text-xs sm:text-sm py-2.5 rounded transition-all duration-300 border border-[#800020]/20 hover:border-[#800020] group-hover:shadow-md"
                  >
                    LEARN MORE
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <Link 
              href="/courses" 
              className="inline-flex items-center bg-[#800020] hover:bg-[#e63946] text-white px-6 py-2.5 rounded font-oswald uppercase tracking-wider text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]"
            >
              VIEW ALL PROGRAMS
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced UI */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block bg-[#800020]/10 px-3 py-1 rounded-full mb-3 font-oswald tracking-wider text-[#800020] text-xs sm:text-sm">
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-500" />
                <span>STUDENT TESTIMONIALS</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-oswald uppercase tracking-wider text-[#800020] mb-3 sm:mb-4">
              SUCCESS STORIES
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-lato">
              Hear from our students who have achieved their dreams with our guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                name: "Ramesh Shrestha",
                role: "MBBS Student, TU Teaching Hospital",
                quote: "Urbana's medical entrance program gave me the edge I needed to secure my seat in medical school. The faculty's guidance was invaluable.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
                year: "2022"
              },
              {
                name: "Sita Gurung",
                role: "Engineering Student, Pulchowk Campus",
                quote: "The dedicated faculty and structured curriculum helped me crack the IOE entrance exam. I'm grateful for the personalized attention.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
                year: "2023"
              },
              {
                name: "Hari Basnet",
                role: "Scholarship Recipient, University of Texas",
                quote: "Thanks to Urbana's guidance, I received a full scholarship to study in the USA. Their international education counseling is exceptional.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                year: "2021"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#800020]/20 relative">
                {/* Quote mark */}
                <div className="absolute top-3 right-3 text-3xl text-gray-200 font-serif">❝</div>
                
                <div className="flex items-start mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 border-2 border-[#e63946] flex-shrink-0">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat text-[#800020] text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-lato mb-0.5">{testimonial.role}</p>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-500" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-1">Class of {testimonial.year}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic font-lato text-xs sm:text-sm">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <Link 
              href="/about/testimonials" 
              className="inline-flex items-center bg-[#800020] hover:bg-[#e63946] text-white px-6 py-2.5 rounded font-oswald uppercase tracking-wider text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]"
            >
              VIEW MORE SUCCESS STORIES
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action with Background - Enhanced UI */}
      <section className="py-12 sm:py-16 relative text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2000&auto=format&fit=crop"
            alt="Campus" 
            fill 
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/95 to-[#e63946]/90"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 font-oswald tracking-wider text-white text-xs sm:text-sm">
              <div className="flex items-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-300" />
                <span>BEGIN YOUR JOURNEY TO SUCCESS</span>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-oswald uppercase tracking-wider mb-4 sm:mb-6">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto font-lato">
              Join hundreds of students who have transformed their futures with Urbana. Our expert faculty and proven methodology ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#800020] hover:bg-[#e63946] text-white px-6 sm:px-8 py-2 sm:py-3 rounded font-oswald uppercase tracking-wider font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]"
              >
                CONTACT US
              </Link>
              <Link 
                href="/admissions" 
                className="border-2 border-white bg-transparent hover:bg-white hover:text-[#800020] px-6 sm:px-8 py-2 sm:py-3 rounded font-oswald uppercase tracking-wider font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}