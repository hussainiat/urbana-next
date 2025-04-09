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
            <div className="relative h-80 w-full mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/faculty/Ram-Tiwari.jpg" 
                alt="Ram Tiwari - Principal" 
                fill 
                className="object-contain object-top"
                priority
              />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-1 text-[#800020]">Ram Tiwari</h3>
            <p className="font-oswald text-sm uppercase tracking-wider text-gray-500 mb-4">Principal & Physics Faculty</p>
            
            {/* <div className="space-y-2 text-left">
              <p className="font-lato text-gray-600"><span className="font-semibold">Education:</span> M.Sc. in Physics, Ph.D. in Education</p>
              <p className="font-lato text-gray-600"><span className="font-semibold">Experience:</span> 15+ years in education</p>
              <p className="font-lato text-gray-600"><span className="font-semibold">Email:</span> principal@urbana.edu.np</p>
            </div> */}
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
                It is with great pleasure that I welcome you to Urbana School of Science. As the Principal and a Physics faculty member, I bring both administrative leadership and classroom experience to our institution, which has established itself as a center of academic excellence in science education.
              </p>
              <p>
                At Urbana, we believe that science education is not merely about memorizing facts and formulas, but about developing critical thinking, analytical skills, and a scientific temperament. Our approach focuses on preparing students for competitive examinations while also nurturing their curiosity and passion for scientific inquiry.
              </p>
              <p>
                Our dedicated faculty members, many of whom are specialists in their respective fields, are committed to providing a supportive and stimulating learning environment. We employ innovative teaching methodologies that bridge theoretical knowledge with practical applications, encouraging students to think beyond textbooks.
              </p>
              <p>
                In today&apos;s rapidly evolving world, scientific literacy and technological competence are more important than ever. Our comprehensive curriculum, well-equipped laboratories, and emphasis on both academic rigor and practical skills ensure that our students are well-prepared for future challenges in medical, engineering, and other scientific fields.
              </p>
              <p>
                I invite you to explore our website to learn more about our specialized programs, facilities, and achievements. Better yet, visit our campus to experience firsthand the dynamic learning environment that defines Urbana School of Science.
              </p>
              <p>
                Together, let us embark on this educational journey that will shape the future scientists, doctors, and engineers who will contribute to the advancement of our society and nation.
              </p>
              <p className="pt-4">
                Warm regards,
              </p>
              <div className="pt-2">
                <p className="font-semibold text-[#800020]">Ram Tiwari</p>
                <p>Principal & Physics Faculty, Urbana School of Science</p>
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
          Would you like to discuss your child&apos;s education or admission process with our Principal? Schedule a meeting to address your questions and concerns.
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