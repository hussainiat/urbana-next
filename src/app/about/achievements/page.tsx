import { Trophy } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";

export default function Achievements() {
  const latestAchievements2024 = [
    {
      category: "Medical Entrance - MBBS",
      title: "First Batch, First Success!",
      subtitle: "Future Doctors",
      achievers: [
        {
           name: "Ranvir Sah",
           achievement: "MBBS - Merit 65, CEE Entrance 2025",
           image: "/images/achievements/ranvir.png"
         },
         {
           name: "Anish Kumar Sah Teli",
           achievement: "MBBS - Bangladesh Scholarship MECEE 2025",
           image: "/images/achievements/anish.png"
         }
      ]
    },
    {
      category: "Engineering Entrance",
      title: "First Batch, First Success!",
      subtitle: "Future Engineers",
      achievers: [
        {
           name: "Raunak Karn",
           achievement: "Rank 107 - Indian Embassy COMPEX Scholarship",
           image: "/images/achievements/raunak.png"
         },
         {
           name: "Khagendra Neupane",
           achievement: "Rank 108 - IOE Engineering Entrance",
           image: "/images/achievements/khagendra.png"
         },
         {
           name: "Navaraj Bhandari",
           achievement: "Rank 145 - IOE Engineering Entrance",
           image: "/images/achievements/navraaj.png"
         }
      ]
    }
  ];

  return (
    <AboutTemplate
      title="Achievements"
      description="Celebrating our academic excellence and institutional recognition"
      icon={<Trophy className="w-8 h-8 text-[#800020]" />}
    >
      {/* 2024 Latest Achievements */}
      <div className="mb-20">
        
        {latestAchievements2024.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-montserrat text-3xl font-bold mb-4 text-[#800020]">{category.category}</h3>
              <div className="inline-flex items-center gap-2 bg-[#800020] text-white px-6 py-2 rounded-full font-oswald text-sm uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                {category.subtitle}
              </div>
            </div>
            
            <div className={`grid gap-8 ${category.achievers.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'} max-w-6xl mx-auto`}>
              {category.achievers.map((achiever, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  category.category === "Medical Entrance - MBBS" 
                    ? "transform hover:scale-105 shadow-xl border-2 border-[#800020]/20" 
                    : ""
                }`}>
                  <div className={`relative overflow-hidden ${
                    category.category === "Medical Entrance - MBBS" ? "h-96" : "h-80"
                  }`}>
                    {category.category === "Medical Entrance - MBBS" && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-[#800020] text-white px-3 py-1 rounded-full text-xs font-bold">
                          🏥 MBBS
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 ${
                      category.category === "Medical Entrance - MBBS" 
                        ? "bg-gradient-to-b from-transparent via-transparent to-[#800020]/10" 
                        : ""
                    }`}></div>
                    <Image 
                      src={achiever.image} 
                      alt={achiever.name} 
                      fill 
                      className="object-cover object-top hover:scale-110 transition-transform duration-500"
                      style={{
                        objectPosition: 'center top'
                      }}
                    />
                  </div>
                  
                  <div className={`p-6 ${
                    category.category === "Medical Entrance - MBBS" 
                      ? "bg-gradient-to-r from-white to-[#800020]/5" 
                      : ""
                  }`}>
                    <h4 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{achiever.name}</h4>
                    <p className="font-lato text-gray-700 text-sm mb-4">{achiever.achievement}</p>
                    <div className="inline-flex items-center gap-2 text-[#800020] font-oswald text-xs uppercase tracking-wider">
                      <Trophy className="w-3 h-3" />
                      <span>
                        {category.category === "Medical Entrance - MBBS" ? "Future Doctor 2024" : "Achiever 2024"}
                      </span>
                    </div>
                    {category.category === "Medical Entrance - MBBS" && (
                      <div className="mt-4 pt-4 border-t border-[#800020]/20">
                        <div className="flex items-center gap-2 text-[#800020] text-xs">
                          <div className="w-2 h-2 bg-[#800020] rounded-full"></div>
                          <span className="font-medium">Medical Excellence Program</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Key Statistics */}
      <div className="bg-gray-50 p-10 rounded-lg mb-16">
        <div className="text-center mb-10">
          <h2 className="font-montserrat text-3xl font-bold mb-3 text-[#800020]">Key Statistics</h2>
          <div className="w-20 h-1 bg-[#800020] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-5xl font-bold text-[#800020] mb-3">100%</div>
            <p className="font-lato text-gray-600">Medical Entrance Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-5xl font-bold text-[#800020] mb-3">100%</div>
            <p className="font-lato text-gray-600">Engineering Entrance Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-5xl font-bold text-[#800020] mb-3">5</div>
            <p className="font-lato text-gray-600">Top Rankers in First Batch</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-5xl font-bold text-[#800020] mb-3">3</div>
            <p className="font-lato text-gray-600">International Scholarships</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#800020] rounded-lg p-10 text-center text-white">
        <h2 className="font-montserrat text-3xl font-bold mb-4">Join Our Success Story</h2>
        <p className="font-lato mb-8 max-w-2xl mx-auto text-white/90 text-lg">
          Be a part of our legacy of excellence. Enroll in our programs and embark on a journey towards academic success with proven results.
        </p>
        <a 
          href="/admissions" 
          className="inline-flex items-center gap-2 font-oswald bg-white text-[#800020] hover:bg-gray-100 px-8 py-3 rounded-full uppercase tracking-wider transition-all duration-300 font-bold"
        >
          <Trophy className="w-4 h-4" />
          Apply Now
        </a>
      </div>
    </AboutTemplate>
  );
}