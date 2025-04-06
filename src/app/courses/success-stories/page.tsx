import { Award } from 'lucide-react';
import Image from 'next/image';

export default function SuccessStories() {
  const successStories = [
    {
      name: "Aarav Sharma",
      achievement: "Secured 1st rank in National Medical Entrance Exam",
      quote: "The focused preparation and guidance from Urbana's faculty helped me achieve my dream of getting into a top medical college.",
      image: "/images/student1.jpg"
    },
    {
      name: "Priya Patel",
      achievement: "Selected for full scholarship at MIT",
      quote: "Urbana's US scholarship program provided me with comprehensive guidance that made my dream of studying at MIT a reality.",
      image: "/images/student2.jpg"
    },
    {
      name: "Rohan Gupta",
      achievement: "Topped the IOE Entrance Examination",
      quote: "The problem-solving techniques and regular practice tests at Urbana were instrumental in my success at the engineering entrance.",
      image: "/images/student3.jpg"
    },
    {
      name: "Neha Singh",
      achievement: "Secured admission to Harvard University",
      quote: "The personalized guidance for my application essays and interview preparation made all the difference in my Harvard acceptance.",
      image: "/images/student4.jpg"
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
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Our Achievements</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">500+</div>
            <p className="font-lato text-gray-600">Medical Entrance Selections</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">300+</div>
            <p className="font-lato text-gray-600">Engineering Entrance Selections</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">100+</div>
            <p className="font-lato text-gray-600">International Scholarships</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">95%</div>
            <p className="font-lato text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Testimonials from Parents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <blockquote className="font-lato text-gray-600 italic mb-4">
            &ldquo;The dedicated faculty at Urbana not only helped my daughter excel academically but also instilled important values and discipline that will benefit her throughout life.&rdquo;
            </blockquote>
            <p className="font-montserrat font-bold text-[#800020]">- Mrs. Sharma, Parent</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <blockquote className="font-lato text-gray-600 italic mb-4">
            &ldquo;We were impressed by the personalized attention given to each student. The regular updates on our son&apos;s progress helped us stay involved in his education journey.&rdquo;
            </blockquote>
            <p className="font-montserrat font-bold text-[#800020]">- Mr. Patel, Parent</p>
          </div>
        </div>
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