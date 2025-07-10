import { Award } from 'lucide-react';
import Image from 'next/image';

export default function SuccessStories() {
  const successStories = [
    {
      name: "Ranvir Sah",
      achievement: "MBBS - Merit 65, CEE Entrance 2024",
      quote: "The focused preparation and guidance from Urbana's faculty helped me achieve my dream of getting into a top medical college.",
      image: "/images/achievements/ranvir.png"
    },
    {
      name: "Anish Kumar Sah Teli",
      achievement: "MBBS - Bangladesh Scholarship MECEE 2024",
      quote: "Urbana's international scholarship program provided me with comprehensive guidance that made my dream of studying abroad a reality.",
      image: "/images/achievements/anish.png"
    },
    {
      name: "Raunak Karn",
      achievement: "Rank 107 - Indian Embassy COMPEX Scholarship",
      quote: "The problem-solving techniques and regular practice tests at Urbana were instrumental in my success at the engineering entrance.",
      image: "/images/achievements/raunak.png"
    },
    {
      name: "Khagendra Neupane",
      achievement: "Rank 108 - IOE Engineering Entrance",
      quote: "The personalized guidance and comprehensive study materials at Urbana made all the difference in my IOE entrance success.",
      image: "/images/achievements/khagendra.png"
    },
    {
      name: "Navaraj Bhandari",
      achievement: "Rank 145 - IOE Engineering Entrance",
      quote: "Urbana's dedicated faculty and structured approach helped me achieve my goal of getting into IOE for engineering studies.",
      image: "/images/achievements/navraaj.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
          <Award className="w-8 h-8 text-[#800020]" />
        </div>
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Success Stories</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Celebrating the achievements of our students who have excelled in various competitive examinations and secured admissions to prestigious institutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {successStories.map((story, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative w-full h-40 md:h-full rounded-lg overflow-hidden">
                <Image 
                  src={story.image} 
                  alt={story.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="font-montserrat text-xl font-bold mb-1 text-[#800020]">{story.name}</h3>
              <p className="font-oswald text-sm uppercase tracking-wider text-gray-500 mb-3">{story.achievement}</p>
              <blockquote className="font-lato text-gray-600 italic border-l-4 border-[#800020] pl-4">
              &ldquo;{story.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Join Our Success Story</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Take the first step towards academic excellence and a bright future. Enroll in our programs today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/admissions" 
            className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Apply Now
          </a>
          <a 
            href="/contact" 
            className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] border border-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}