import { Trophy } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function Achievements() {
  const academicAchievements = [
    {
      year: "2023",
      title: "National Science Olympiad",
      description: "5 students ranked in the top 10 nationally, with Aarav Sharma securing the 1st position.",
      image: "/images/achievements/science-olympiad.jpg"
    },
    {
      year: "2022",
      title: "International Mathematics Competition",
      description: "Team Urbana won the gold medal, competing against 50 international schools.",
      image: "/images/achievements/math-competition.jpg"
    },
    {
      year: "2022",
      title: "Medical Entrance Success",
      description: "95% of our medical entrance students secured admissions in top medical colleges.",
      image: "/images/achievements/medical-entrance.jpg"
    },
    {
      year: "2021",
      title: "Engineering Entrance Results",
      description: "Top 3 ranks in the regional engineering entrance examination secured by our students.",
      image: "/images/achievements/engineering-entrance.jpg"
    }
  ];

  const institutionalAwards = [
    {
      year: "2023",
      title: "Best Educational Institute",
      description: "Awarded by the National Education Council for excellence in science education.",
      image: "/images/achievements/best-institute.jpg"
    },
    {
      year: "2022",
      title: "Innovation in Education",
      description: "Recognized for implementing innovative teaching methodologies and technology integration.",
      image: "/images/achievements/innovation-award.jpg"
    },
    {
      year: "2021",
      title: "Green Campus Award",
      description: "Recognized for sustainable practices and environmental consciousness in campus management.",
      image: "/images/achievements/green-campus.jpg"
    }
  ];

  return (
    <AboutTemplate
      title="Achievements"
      description="Celebrating our academic excellence and institutional recognition"
      icon={<Trophy className="w-8 h-8 text-[#800020]" />}
    >
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Academic Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicAchievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image 
                  src={achievement.image} 
                  alt={achievement.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#800020] text-white px-3 py-1 text-sm font-oswald">
                  {achievement.year}
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{achievement.title}</h3>
                <p className="font-lato text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Institutional Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {institutionalAwards.map((award, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image 
                  src={award.image} 
                  alt={award.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#800020] text-white px-3 py-1 text-sm font-oswald">
                  {award.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{award.title}</h3>
                <p className="font-lato text-gray-600">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Key Statistics</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">95%</div>
            <p className="font-lato text-gray-600">Success Rate in Medical Entrance</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">90%</div>
            <p className="font-lato text-gray-600">Success Rate in Engineering Entrance</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">50+</div>
            <p className="font-lato text-gray-600">National & International Awards</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-[#800020] mb-2">100+</div>
            <p className="font-lato text-gray-600">Scholarships Secured</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Join Our Success Story</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Be a part of our legacy of excellence. Enroll in our programs and embark on a journey towards academic success.
        </p>
        <a 
          href="/admissions" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Apply Now
        </a>
      </div>
    </AboutTemplate>
  );
}