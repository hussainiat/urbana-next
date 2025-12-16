import { Activity, ChevronRight } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CampusLife() {
  const campusActivities = [
    {
      title: "Academic Excellence",
      description: "Our rigorous academic programs challenge students to excel in their studies and develop critical thinking skills through interactive learning environments.",
      image: "/images/urbana/IMG_6920.JPEG"
    },
    {
      title: "Modern Laboratory Facilities",
      description: "Students gain hands-on experience in our well-equipped science laboratories, enhancing their practical understanding of scientific concepts.",
      image: "/images/urbana/IMG_6922.JPEG"
    },
    {
      title: "Collaborative Learning",
      description: "Our teaching methodology encourages group discussions and collaborative problem-solving, preparing students for real-world teamwork.",
      image: "/images/urbana/IMG_6923.JPEG"
    },
    {
      title: "Science Exhibitions",
      description: "Annual science exhibitions encourage innovation and practical application of scientific concepts through student-led projects and demonstrations.",
      image: "/images/urbana/IMG_6925.JPEG"
    },
    {
      title: "Technology Integration",
      description: "Modern technology is integrated throughout our campus, providing students with the digital skills necessary for future academic and career success.",
      image: "/images/urbana/IMG_6926.JPEG"
    },
    {
      title: "Personalized Guidance",
      description: "Our faculty provides individualized attention and mentorship to help students navigate their academic journey and achieve their goals.",
      image: "/images/urbana/IMG_6927.JPEG"
    }
  ];

  const studentTestimonials = [
    {
      name: "Ranvir Sah",
      grade: "Medical Entrance Program",
      quote: "Life at Urbana is a perfect balance of academics and practical learning. The modern laboratory facilities have helped me develop a deeper understanding of scientific concepts.",
      image: "/images/achievements/ranvir.png"
    },
    {
      name: "Anish Kumar Sah Teli",
      grade: "Medical Entrance Program",
      quote: "What I love most about Urbana is the personalized guidance from teachers. Their support has been instrumental in my preparation for medical entrance exams.",
      image: "/images/achievements/anish.png"
    },
    {
      name: "Raunak Karn",
      grade: "Engineering Entrance Program",
      quote: "The collaborative learning environment at Urbana has taught me the importance of teamwork and communication, skills that will be valuable in my engineering career.",
      image: "/images/achievements/raunak.png"
    },
    {
      name: "Khagendra Neupane",
      grade: "Engineering Entrance Program",
      quote: "The problem-solving approach and regular assessments at Urbana helped me build confidence for the IOE entrance examination.",
      image: "/images/achievements/khagendra.png"
    },
    {
      name: "Navaraj Bhandari",
      grade: "Engineering Entrance Program",
      quote: "Urbana's comprehensive study materials and dedicated faculty support made my engineering entrance preparation effective and successful.",
      image: "/images/achievements/navraaj.png"
    }
  ];

  return (
    <AboutTemplate
      title="Life at Urbana"
      description="Experience the vibrant student life and campus culture"
      icon={<Activity className="w-8 h-8 text-[#800020]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Campus Culture</h2>
          <p className="font-lato text-gray-600 mb-4">
            At Urbana School of Science, we foster a vibrant campus culture that balances academic rigor with practical, hands-on learning experiences. Our modern facilities and technology-integrated classrooms create an environment where students can thrive in their scientific pursuits.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            We believe that learning extends beyond textbooks, which is why our campus is equipped with state-of-the-art laboratories where students can experiment, discover, and apply theoretical knowledge to real-world scenarios.
          </p>
          <p className="font-lato text-gray-600">
            The supportive and collaborative environment at Urbana encourages students to engage in scientific inquiry, critical thinking, and problem-solving – essential skills for future doctors, engineers, and scientists.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/urbana/IMG_6919.JPEG" 
            alt="Campus Life at Urbana" 
            fill 
            className="object-cover object-center"
          />
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Campus Facilities & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={activity.image} 
                  alt={activity.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{activity.title}</h3>
                <p className="font-lato text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Academic Environment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Structured Learning</h3>
            <p className="font-lato text-gray-600">Our curriculum follows a structured approach with theory classes, practical laboratory sessions, and regular assessments to ensure comprehensive learning and academic progress.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Science Focus</h3>
            <p className="font-lato text-gray-600">As a specialized science institution, we place particular emphasis on physics, chemistry, biology, and mathematics, with dedicated laboratories for each subject area.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Exam Preparation</h3>
            <p className="font-lato text-gray-600">Our specialized programs prepare students for competitive entrance examinations for medical, engineering, and other science-based higher education opportunities.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Student Voices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg font-bold text-[#800020]">{testimonial.name}</h3>
                  <p className="font-oswald text-sm uppercase tracking-wider text-gray-500">{testimonial.grade}</p>
                </div>
              </div>
              <blockquote className="font-lato text-gray-600 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-lg mb-12">
        <div className="relative h-[300px] w-full">
          <Image 
            src="/images/urbana/IMG_6931.JPEG" 
            alt="Urbana School Campus" 
            fill 
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/80 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-xl">
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">State-of-the-Art Facilities</h2>
              <p className="font-lato mb-6">
                Our campus features modern classrooms, well-equipped laboratories, and technology-integrated learning spaces designed to provide an optimal environment for scientific education.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Experience Urbana</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Want to experience our modern facilities and vibrant learning environment firsthand? Schedule a campus visit to see our science-focused community in action.
        </p>
        <Button variant="primary" size="primary" asChild>
              <Link href="/contact">
                Schedule A Visit
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
      </div>
    </AboutTemplate>
  );
}