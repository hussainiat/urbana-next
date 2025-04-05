import Image from "next/image";
import Link from "next/link";
import { BookOpen, MapPin, GraduationCap, Users, Target, Award, Clock, ChevronRight, Calendar, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Using a more reliable image source */}
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
              alt="Campus" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-maroon/90 to-bright-red/80"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-oswald uppercase tracking-wider">
            Excellence in Science Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-lato">
            Preparing the next generation of scientists, doctors, and engineers through innovative teaching and mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/admissions" 
              className="bg-white text-deep-maroon hover:bg-gray-100 px-8 py-4 rounded-md font-oswald uppercase tracking-wider font-bold transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              href="/courses" 
              className="border-2 border-white text-white hover:bg-white hover:text-deep-maroon px-8 py-4 rounded-md font-oswald uppercase tracking-wider font-bold transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with animations */}
      <section className="py-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "98%", label: "Pass Rate", icon: <Star className="w-6 h-6 text-bright-red mx-auto mb-2" /> },
              { number: "15+", label: "Years Experience", icon: <Calendar className="w-6 h-6 text-bright-red mx-auto mb-2" /> },
              { number: "50+", label: "Expert Faculty", icon: <Users className="w-6 h-6 text-bright-red mx-auto mb-2" /> },
              { number: "1000+", label: "Success Stories", icon: <Award className="w-6 h-6 text-bright-red mx-auto mb-2" /> }
            ].map((stat, index) => (
              <div key={index} className="p-4 hover:transform hover:scale-105 transition-transform duration-300">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold text-bright-red font-montserrat mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-oswald uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section with Images - Fixed images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-oswald uppercase tracking-wider text-deep-maroon dark:text-bright-red mb-4">
              Our Featured Programs
            </h2>
            <div className="w-20 h-1 bg-bright-red mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-lato">
              Specialized programs designed to prepare students for competitive exams and higher education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "+2 Science",
                description: "Comprehensive science curriculum with practical lab sessions and research opportunities.",
                icon: <BookOpen className="w-8 h-8 text-bright-red" />,
                stats: "98% Pass Rate",
                link: "/courses/plus-two-science",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Medical Entrance",
                description: "Specialized coaching for MBBS, BDS, and other medical entrance examinations.",
                icon: <BookOpen className="w-8 h-8 text-bright-red" />,
                stats: "85% Success Rate",
                link: "/courses/medical-entrance",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Engineering Entrance",
                description: "Focused preparation for IOE and other engineering entrance examinations.",
                icon: <BookOpen className="w-8 h-8 text-bright-red" />,
                stats: "92% Success Rate",
                link: "/courses/engineering-entrance",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={program.image} 
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-deep-maroon/10 dark:bg-bright-red/10 p-3 rounded-full mr-4">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold font-montserrat text-deep-maroon dark:text-bright-red">{program.title}</h3>
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 font-lato">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400 font-oswald uppercase tracking-wider">{program.stats}</span>
                    <Link 
                      href={program.link} 
                      className="text-bright-red hover:text-deep-maroon dark:hover:text-white font-oswald uppercase tracking-wider text-sm transition-colors flex items-center"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fixed images */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-oswald uppercase tracking-wider text-deep-maroon dark:text-bright-red mb-4">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-bright-red mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-lato">
              Hear from our students who have achieved their dreams with our guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Shrestha",
                role: "MBBS Student, TU Teaching Hospital",
                quote: "Urbana's medical entrance program gave me the edge I needed to secure my seat in medical school. The faculty's guidance was invaluable.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Sita Gurung",
                role: "Engineering Student, Pulchowk Campus",
                quote: "The dedicated faculty and structured curriculum helped me crack the IOE entrance exam. I'm grateful for the personalized attention.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Hari Basnet",
                role: "Scholarship Recipient, University of Texas",
                quote: "Thanks to Urbana's guidance, I received a full scholarship to study in the USA. Their international education counseling is exceptional.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-bright-red">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat text-deep-maroon dark:text-bright-red text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-lato">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic font-lato text-center">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about/testimonials" 
              className="inline-flex items-center bg-bright-red hover:bg-deep-maroon text-white px-6 py-3 rounded-md font-oswald uppercase tracking-wider font-bold transition-colors"
            >
              View More Success Stories
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action with Background - Fixed image */}
      <section className="py-16 relative text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2000&auto=format&fit=crop"
            alt="Campus" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-maroon/90"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-oswald uppercase tracking-wider mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-lato">
            Join hundreds of students who have transformed their futures with Urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-bright-red hover:bg-white hover:text-deep-maroon px-8 py-4 rounded-md font-oswald uppercase tracking-wider font-bold transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/admissions" 
              className="border-2 border-white hover:bg-white hover:text-deep-maroon px-8 py-4 rounded-md font-oswald uppercase tracking-wider font-bold transition-colors"
            >
              Admission Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
