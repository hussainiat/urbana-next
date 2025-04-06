import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      title: "Urbana Students Excel in National Science Olympiad",
      excerpt: "Our students secured top positions in the National Science Olympiad, demonstrating exceptional knowledge and problem-solving skills.",
      date: "June 15, 2023",
      author: "Admin",
      image: "/images/news1.jpg",
      category: "Achievements"
    },
    {
      id: 2,
      title: "New Science Laboratory Inaugurated",
      excerpt: "State-of-the-art science laboratory with advanced equipment inaugurated to enhance practical learning experience for students.",
      date: "May 28, 2023",
      author: "Admin",
      image: "/images/news2.jpg",
      category: "Facilities"
    },
    {
      id: 3,
      title: "Admissions Open for Academic Year 2023-2024",
      excerpt: "Applications are now being accepted for all programs for the upcoming academic year. Early applicants will receive priority consideration.",
      date: "April 10, 2023",
      author: "Admissions Office",
      image: "/images/news3.jpg",
      category: "Admissions"
    },
    {
      id: 4,
      title: "Career Counseling Workshop for +2 Students",
      excerpt: "Renowned career counselors conducted a workshop to guide students about various career options after completing higher secondary education.",
      date: "March 22, 2023",
      author: "Student Affairs",
      image: "/images/news4.jpg",
      category: "Events"
    },
    {
      id: 5,
      title: "Urbana Signs MOU with International Universities",
      excerpt: "Urbana has signed Memorandums of Understanding with several international universities to facilitate student exchange programs and scholarships.",
      date: "February 15, 2023",
      author: "International Relations",
      image: "/images/news5.jpg",
      category: "Partnerships"
    },
    {
      id: 6,
      title: "Annual Sports Week Celebration",
      excerpt: "Students participated enthusiastically in various sports activities during the Annual Sports Week, promoting physical fitness and team spirit.",
      date: "January 25, 2023",
      author: "Sports Department",
      image: "/images/news6.jpg",
      category: "Events"
    }
  ];

  const categories = [
    "All",
    "Achievements",
    "Facilities",
    "Admissions",
    "Events",
    "Partnerships"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
          <Newspaper className="w-8 h-8 text-[#800020]" />
        </div>
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Latest News</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Stay updated with the latest news, events, and announcements from Urbana.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`px-4 py-2 rounded-full font-oswald text-sm uppercase tracking-wider transition-colors ${
              index === 0 
                ? "bg-[#800020] text-white" 
                : "bg-white text-[#800020] border border-[#800020] hover:bg-[#800020] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {newsItems.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col">
            <div className="relative h-48 w-full">
              <Image 
                src={news.image} 
                alt={news.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-0 right-0 bg-[#800020] text-white px-3 py-1 text-sm font-oswald">
                {news.category}
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="font-montserrat text-xl font-bold mb-2 text-[#800020]">{news.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <div className="flex items-center mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{news.author}</span>
                </div>
              </div>
              <p className="font-lato text-gray-600 mb-4">{news.excerpt}</p>
            </div>
            <div className="px-6 pb-6">
              <Link 
                href={`/news/${news.id}`}
                className="inline-flex items-center font-oswald text-[#800020] hover:text-[#e63946] uppercase tracking-wider"
              >
                Read More 
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <div className="inline-flex rounded-md shadow-sm">
          <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100">
            Previous
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#800020] border border-[#800020]">
            1
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100">
            3
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}