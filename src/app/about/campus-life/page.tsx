import { Activity } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function CampusLife() {
  const campusActivities = [
    {
      title: "Academic Excellence",
      description: "Our rigorous academic programs challenge students to excel in their studies and develop critical thinking skills.",
      image: "/images/campus-life/academics.jpg"
    },
    {
      title: "Sports & Athletics",
      description: "Students participate in various sports activities that promote physical fitness, teamwork, and sportsmanship.",
      image: "/images/campus-life/sports.jpg"
    },
    {
      title: "Cultural Events",
      description: "Regular cultural events celebrate diversity and provide opportunities for students to showcase their talents.",
      image: "/images/campus-life/cultural.jpg"
    },
    {
      title: "Science Exhibitions",
      description: "Annual science exhibitions encourage innovation and practical application of scientific concepts.",
      image: "/images/campus-life/science.jpg"
    },
    {
      title: "Community Service",
      description: "Students engage in community service projects that instill values of social responsibility and empathy.",
      image: "/images/campus-life/community.jpg"
    },
    {
      title: "Leadership Development",
      description: "Various leadership roles and activities help students develop essential leadership skills and confidence.",
      image: "/images/campus-life/leadership.jpg"
    }
  ];

  const studentTestimonials = [
    {
      name: "Aarav Sharma",
      grade: "Grade 12 Science",
      quote: "Life at Urbana is a perfect balance of academics and extracurricular activities. The supportive environment has helped me grow both academically and personally.",
      image: "/images/testimonials/student1.jpg"
    },
    {
      name: "Priya Patel",
      grade: "Medical Entrance Program",
      quote: "What I love most about Urbana is the sense of community. The faculty and students create a positive atmosphere that makes learning enjoyable and meaningful.",
      image: "/images/testimonials/student2.jpg"
    },
    {
      name: "Rohan Gupta",
      grade: "Engineering Entrance Program",
      quote: "The diverse range of activities at Urbana has allowed me to explore my interests beyond academics and develop a well-rounded personality.",
      image: "/images/testimonials/student3.jpg"
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
            At Urbana, we foster a vibrant campus culture that balances academic rigor with a rich array of extracurricular activities. Our campus buzzes with energy as students engage in various pursuits that complement their academic journey.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            We believe that learning extends beyond the classroom, and our diverse campus activities provide students with opportunities to discover their passions, develop new skills, and build lasting friendships.
          </p>
          <p className="font-lato text-gray-600">
            The supportive and inclusive environment at Urbana encourages students to step out of their comfort zones, take on new challenges, and grow into well-rounded individuals prepared for future success.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/campus-life/main.jpg" 
            alt="Campus Life at Urbana" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Campus Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
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
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Student Life</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Daily Schedule</h3>
            <p className="font-lato text-gray-600">Our structured daily schedule includes academic classes, practical sessions, and time for extracurricular activities, ensuring a balanced educational experience.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Student Clubs</h3>
            <p className="font-lato text-gray-600">Various student clubs cater to diverse interests, from science and technology to arts and literature, providing platforms for students to pursue their passions.</p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Events & Celebrations</h3>
            <p className="font-lato text-gray-600">Throughout the academic year, we celebrate various events, festivals, and achievements, creating a vibrant and engaging campus atmosphere.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Student Voices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Experience Urbana</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Want to experience life at Urbana firsthand? Schedule a campus visit to see our vibrant community in action.
        </p>
        <a 
          href="/contact" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Schedule a Visit
        </a>
      </div>
    </AboutTemplate>
  );
}