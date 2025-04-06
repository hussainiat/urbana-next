import { User } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <AboutTemplate
      title="Message from Principal"
      description="Read a personal message from our school's leadership"
      icon={<User className="w-8 h-8 text-[#800020]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/principal.jpg" 
                alt="Dr. Rajesh Sharma - Principal" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-1 text-[#800020]">Dr. Rajesh Sharma</h3>
            <p className="font-oswald text-sm uppercase tracking-wider text-gray-500 mb-4">Principal</p>
            
            <div className="space-y-2 text-left">
              <p className="font-lato text-gray-600"><span className="font-semibold">Education:</span> Ph.D. in Education, Harvard University</p>
              <p className="font-lato text-gray-600"><span className="font-semibold">Experience:</span> 25+ years in education</p>
              <p className="font-lato text-gray-600"><span className="font-semibold">Email:</span> principal@urbana.edu.np</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Principal&apos;s Message</h2>
            
            <div className="space-y-4 font-lato text-gray-600">
              <p>
                Dear Students, Parents, and Visitors,
              </p>
              <p>
                It is with great pleasure that I welcome you to Urbana Educational Institute. As the Principal, I am honored to lead an institution that has established itself as a center of academic excellence and holistic development.
              </p>
              <p>
                At Urbana, we believe that education is not merely about acquiring knowledge but about nurturing young minds to become responsible, compassionate, and innovative individuals who can contribute positively to society. Our approach to education is holistic, focusing on academic excellence while also developing essential life skills, values, and character.
              </p>
              <p>
                Our dedicated faculty members are committed to providing a supportive and stimulating learning environment where each student can discover and develop their unique potential. We employ innovative teaching methodologies that encourage critical thinking, creativity, and a love for lifelong learning.
              </p>
              <p>
                The world is rapidly changing, and we are preparing our students to navigate this dynamic landscape with confidence and adaptability. Our comprehensive curriculum, state-of-the-art facilities, and emphasis on both academic and extracurricular activities ensure that our students are well-equipped for future challenges.
              </p>
              <p>
                I invite you to explore our website to learn more about our programs, facilities, and achievements. Better yet, visit our campus to experience firsthand the vibrant learning environment that defines Urbana.
              </p>
              <p>
                Together, let us embark on this educational journey that will shape the future of our students and, through them, the future of our society.
              </p>
              <p className="pt-4">
                Warm regards,
              </p>
              <div className="pt-2">
                <p className="font-semibold text-[#800020]">Dr. Rajesh Sharma</p>
                <p>Principal, Urbana Educational Institute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Our Educational Philosophy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Student-Centered Approach</h3>
            <p className="font-lato text-gray-600">We place students at the center of the learning process, recognizing and respecting their individual needs, interests, and learning styles.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Excellence in Education</h3>
            <p className="font-lato text-gray-600">We strive for excellence in all aspects of education, encouraging students to aim high and achieve their best in academics and beyond.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Holistic Development</h3>
            <p className="font-lato text-gray-600">We focus on the intellectual, physical, emotional, and social development of our students, preparing them for success in all areas of life.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Schedule a Meeting</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Would you like to discuss your child&apos;s education with our Principal? Schedule a meeting to address your questions and concerns.
        </p>
        <a 
          href="/contact" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Request an Appointment
        </a>
      </div>
    </AboutTemplate>
  );
}