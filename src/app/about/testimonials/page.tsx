import { MessageCircle, Star } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function Testimonials() {
  const studentTestimonials = [
    {
      name: "Ranvir Sah",
      course: "Medical Entrance Program",
      year: "2025",
      quote: "The focused preparation and guidance from Urbana's faculty helped me achieve my dream of getting into a top medical college. The regular mock tests and personalized feedback were invaluable for my MBBS entrance exam.",
      image: "/images/achievements/ranvir.png",
      achievement: "MBBS Student - Merit 65, CEE Entrance 2024"
    },
    {
      name: "Anish Kumar Sah Teli",
      course: "Medical Entrance Program",
      year: "2025",
      quote: "Urbana's international scholarship program provided me with comprehensive guidance that made my dream of studying abroad a reality. From test preparation to application essays, the support was exceptional.",
      image: "/images/achievements/anish.png",
      achievement: "MBBS Student - Bangladesh Scholarship MECEE 2024"
    },
    {
      name: "Raunak Karn",
      course: "Engineering Entrance Program",
      year: "2025",
      quote: "Thanks to Urbana's guidance, I received a scholarship to study engineering. Their international education counseling and application support were exceptional.",
      image: "/images/achievements/raunak.png",
      achievement: "Engineering Student - Rank 107, Indian Embassy COMPEX Scholarship"
    },
    {
      name: "Khagendra Neupane",
      course: "Engineering Entrance Program",
      year: "2025",
      quote: "The problem-solving techniques and regular practice tests at Urbana were instrumental in my success at the engineering entrance examination.",
      image: "/images/achievements/khagendra.png",
      achievement: "Engineering Student - Rank 108, IOE"
    },
    {
      name: "Navaraj Bhandari",
      course: "Engineering Entrance Program",
      year: "2025",
      quote: "Urbana's dedicated faculty and comprehensive study materials helped me achieve my goal of getting into IOE. The support was incredible.",
      image: "/images/achievements/navraaj.png",
      achievement: "Engineering Student - Rank 145, IOE"
    }
  ];

  

  return (
    <AboutTemplate
      title="Testimonials"
      description="Hear from our students and parents about their experiences at Urbana"
      icon={<MessageCircle className="w-8 h-8 text-[#800020]" />}
    >
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Student Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="font-lato text-gray-600 italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <h3 className="font-montserrat text-lg font-bold text-[#800020]">{testimonial.name}</h3>
                  <p className="font-oswald text-sm uppercase tracking-wider text-gray-500">{testimonial.course}, {testimonial.year}</p>
                  <p className="font-lato text-sm text-[#800020] mt-2">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      

      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Share Your Story</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Are you a former student or parent? We&apos;d love to hear about your experience at Urbana.
        </p>
        <a 
          href="/contact" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Submit Your Testimonial
        </a>
      </div>
    </AboutTemplate>
  );
}