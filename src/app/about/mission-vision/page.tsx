import { Target } from "lucide-react";
import AboutTemplate from "../AboutTemplate";

export default function MissionVision() {
  return (
    <AboutTemplate
      title="Mission & Vision"
      description="Discover our goals and commitment to educational excellence"
      icon={<Target className="w-8 h-8 text-[#800020]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col">
          <div className="bg-[#800020]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <h2 className="font-montserrat text-2xl font-bold text-[#800020]">M</h2>
          </div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Our Mission</h2>
          <p className="font-lato text-gray-600 mb-4">
            To provide quality education that empowers students with knowledge, skills, and values necessary for academic excellence and personal growth.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            We are committed to creating a supportive learning environment that fosters critical thinking, creativity, and a passion for lifelong learning.
          </p>
          <p className="font-lato text-gray-600">
            Through innovative teaching methods and personalized attention, we aim to help each student realize their full potential and prepare them for success in higher education and beyond.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col">
          <div className="bg-[#800020]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <h2 className="font-montserrat text-2xl font-bold text-[#800020]">V</h2>
          </div>
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Our Vision</h2>
          <p className="font-lato text-gray-600 mb-4">
            To be recognized as a leading educational institution that sets the standard for academic excellence and holistic development.
          </p>
          <p className="font-lato text-gray-600 mb-4">
            We envision a future where our students emerge as confident, responsible, and compassionate individuals who contribute positively to society.
          </p>
          <p className="font-lato text-gray-600">
            Our vision extends beyond academic achievements to nurturing ethical leaders and innovative thinkers who are equipped to address the challenges of a rapidly changing world.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Excellence</h3>
            <p className="font-lato text-gray-600">
              We strive for excellence in all aspects of education, encouraging students to aim high and achieve their best.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Integrity</h3>
            <p className="font-lato text-gray-600">
              We uphold the highest standards of honesty, ethics, and transparency in all our interactions and practices.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Respect</h3>
            <p className="font-lato text-gray-600">
              We foster a culture of mutual respect, embracing diversity and valuing the unique contributions of each individual.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Innovation</h3>
            <p className="font-lato text-gray-600">
              We embrace innovative approaches to teaching and learning, adapting to changing educational needs and technologies.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Collaboration</h3>
            <p className="font-lato text-gray-600">
              We believe in the power of collaboration, working together with students, parents, and the community to achieve shared goals.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">Responsibility</h3>
            <p className="font-lato text-gray-600">
              We instill a sense of responsibility in our students, encouraging them to be accountable for their actions and contribute positively to society.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Join Our Journey</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Be a part of our mission to provide quality education and shape the future of our students.
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
    </AboutTemplate>
  );
}