import { MessageCircle, Star } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function Testimonials() {
  const studentTestimonials = [
    {
      name: "Aarav Sharma",
      course: "Medical Entrance Program",
      year: "2023",
      quote: "The focused preparation and guidance from Urbana's faculty helped me achieve my dream of getting into a top medical college. The regular mock tests and personalized feedback were invaluable.",
      image: "/images/testimonials/student1.jpg",
      achievement: "Secured admission to AIIMS Delhi"
    },
    {
      name: "Priya Patel",
      course: "US Scholarship Program",
      year: "2022",
      quote: "Urbana's US scholarship program provided me with comprehensive guidance that made my dream of studying at MIT a reality. From test preparation to application essays, the support was exceptional.",
      image: "/images/testimonials/student2.jpg",
      achievement: "Full scholarship at MIT"
    },
    {
      name: "Rohan Gupta",
      course: "Engineering Entrance Program",
      year: "2023",
      quote: "The problem-solving techniques and regular practice tests at Urbana were instrumental in my success at the engineering entrance. The faculty's dedication and expertise made all the difference.",
      image: "/images/testimonials/student3.jpg",
      achievement: "Ranked 5th in IIT-JEE"
    },
    {
      name: "Neha Singh",
      course: "+2 Science",
      year: "2022",
      quote: "The strong foundation I received during my +2 Science at Urbana prepared me well for higher education. The practical approach to learning and supportive environment helped me excel.",
      image: "/images/testimonials/student4.jpg",
      achievement: "Scored 95% in board exams"
    }
  ];

  const parentTestimonials = [
    {
      name: "Mr. & Mrs. Sharma",
      relation: "Parents of Aarav Sharma",
      quote: "We are grateful to Urbana for nurturing our son's potential and helping him achieve his dream of becoming a doctor. The regular updates on his progress kept us involved in his educational journey.",
      image: "/images/testimonials/parent1.jpg"
    },
    {
      name: "Mr. Patel",
      relation: "Father of Priya Patel",
      quote: "The guidance provided by Urbana's US scholarship program was exceptional. The team's expertise and dedication helped my daughter secure a full scholarship at MIT, which would have been difficult without their support.",
      image: "/images/testimonials/parent2.jpg"
    },
    {
      name: "Mrs. Gupta",
      relation: "Mother of Rohan Gupta",
      quote: "Urbana's faculty not only helped my son excel academically but also instilled important values and discipline that will benefit him throughout life. We couldn't have asked for a better educational institution.",
      image: "/images/testimonials/parent3.jpg"
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
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Parent Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {parentTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="font-lato text-gray-600 italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-bold text-[#800020]">{testimonial.name}</h3>
                    <p className="font-oswald text-sm uppercase tracking-wider text-gray-500">{testimonial.relation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">What Our Alumni Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <blockquote className="font-lato text-gray-600 italic mb-4">
            &ldquo;The foundation I received at Urbana has been instrumental in my medical career. The emphasis on conceptual understanding rather than rote learning has helped me throughout my professional journey.&ldquo;
            </blockquote>
            <div>
              <h3 className="font-montserrat text-lg font-bold text-[#800020]">Dr. Vikram Mehta</h3>
              <p className="font-oswald text-sm uppercase tracking-wider text-gray-500">Batch of 2015, Cardiologist</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <blockquote className="font-lato text-gray-600 italic mb-4">
            &ldquo;Urbana not only prepared me for academic success but also instilled values that have guided me in my professional life. The mentorship I received from the faculty continues to influence my approach to challenges.&rdquo;
            </blockquote>
            <div>
              <h3 className="font-montserrat text-lg font-bold text-[#800020]">Anjali Desai</h3>
              <p className="font-oswald text-sm uppercase tracking-wider text-gray-500">Batch of 2016, Software Engineer at Google</p>
            </div>
          </div>
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