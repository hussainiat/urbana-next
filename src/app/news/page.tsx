'use client'

import { Newspaper, Calendar, User, ChevronRight, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const newsItems = [
    {
      id: 1,
      title: "Urbana Students Excel in National Science Olympiad",
      excerpt: "Our students secured top positions in the National Science Olympiad, demonstrating exceptional knowledge and problem-solving skills.",
      date: "June 15, 2023",
      author: "Admin",
      image: "/images/urbana/IMG_6920.JPEG",
      category: "Achievements"
    },
    {
      id: 2,
      title: "New Science Laboratory Inaugurated",
      excerpt: "State-of-the-art science laboratory with advanced equipment inaugurated to enhance practical learning experience for students.",
      date: "May 28, 2023",
      author: "Admin",
      image: "/images/urbana/IMG_6925.JPEG",
      category: "Facilities"
    },
    {
      id: 3,
      title: "Admissions Open for Academic Year 2023-2024",
      excerpt: "Applications are now being accepted for all programs for the upcoming academic year. Early applicants will receive priority consideration.",
      date: "April 10, 2023",
      author: "Admissions Office",
      image: "/images/urbana/IMG_6931.JPEG",
      category: "Admissions"
    },
    {
      id: 4,
      title: "Career Counseling Workshop for +2 Students",
      excerpt: "Renowned career counselors conducted a workshop to guide students about various career options after completing higher secondary education.",
      date: "March 22, 2023",
      author: "Student Affairs",
      image: "/images/urbana/IMG_6922.JPEG",
      category: "Events"
    },
    {
      id: 5,
      title: "Urbana Signs MOU with International Universities",
      excerpt: "Urbana has signed Memorandums of Understanding with several international universities to facilitate student exchange programs and scholarships.",
      date: "February 15, 2023",
      author: "International Relations",
      image: "/images/urbana/IMG_6923.JPEG",
      category: "Partnerships"
    },
    {
      id: 6,
      title: "Annual Sports Week Celebration",
      excerpt: "Students participated enthusiastically in various sports activities during the Annual Sports Week, promoting physical fitness and team spirit.",
      date: "January 25, 2023",
      author: "Sports Department",
      image: "/images/urbana/IMG_6919.JPEG",
      category: "Events"
    },
    {
      id: 7,
      title: "Urbana Hosts National Science Conference",
      excerpt: "Leading scientists and educators gathered at Urbana for the National Science Conference to discuss advancements in science education.",
      date: "December 12, 2022",
      author: "Academic Department",
      image: "/images/urbana/IMG_6930.JPEG",
      category: "Events"
    },
    {
      id: 8,
      title: "Scholarship Program for Underprivileged Students",
      excerpt: "Urbana announces a new scholarship program to support talented students from economically disadvantaged backgrounds.",
      date: "November 5, 2022",
      author: "Scholarship Committee",
      image: "/images/urbana/homepage.JPEG",
      category: "Scholarships"
    },
    {
      id: 9,
      title: "Urbana Alumni Reunion 2022",
      excerpt: "Former students gathered for the annual alumni reunion to reconnect and share their success stories with current students.",
      date: "October 18, 2022",
      author: "Alumni Association",
      image: "/images/urbana/IMG_6922.JPEG",
      category: "Alumni"
    }
  ];

  const categories = [
    "All",
    "Achievements",
    "Facilities",
    "Admissions",
    "Events",
    "Partnerships",
    "Scholarships",
    "Alumni"
  ];

  // Filter news items based on active category and search query
  const filteredNews = newsItems.filter(news => {
    const matchesCategory = activeCategory === "All" || news.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section - updated to match other pages */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
            <Newspaper className="w-8 h-8 text-[#800020]" />
          </div>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Latest News & Updates</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
            Stay updated with the latest news, events, and announcements from Urbana School of Science.
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search news..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition duration-150 ease-in-out sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-oswald tracking-wider">
              <Filter className="h-4 w-4 text-[#800020]" />
              <span>FILTER BY:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-3 py-1.5 rounded-full font-oswald text-xs uppercase tracking-wider transition-colors ${
                    activeCategory === category 
                      ? "bg-[#800020] text-white" 
                      : "bg-white text-[#800020] border border-[#800020] hover:bg-[#800020] hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-lato text-gray-600">
            Showing <span className="font-semibold">{filteredNews.length}</span> results
            {activeCategory !== "All" && <span> in <span className="text-[#800020] font-semibold">{activeCategory}</span></span>}
            {searchQuery && <span> for "<span className="text-[#800020] font-semibold">{searchQuery}</span>"</span>}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-oswald">SORT BY:</span>
            <select className="text-sm border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020]">
              <option>Latest First</option>
              <option>Oldest First</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>
        
        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredNews.map((news) => (
              <div key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#800020] text-white text-xs px-3 py-1 rounded-full font-oswald tracking-wider shadow-sm">
                    {news.category}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2 font-lato">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {news.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {news.author}
                    </div>
                  </div>
                  <h3 className="font-montserrat text-lg font-bold mb-2 text-gray-800 group-hover:text-[#800020] transition-colors line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-lato line-clamp-3 flex-grow">{news.excerpt}</p>
                  <Link 
                    href={`/news/${news.id}`} 
                    className="inline-flex items-center text-[#800020] hover:text-[#9a0026] font-oswald text-xs uppercase tracking-wider transition-colors mt-auto group"
                  >
                    Read More
                    <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
              <Search className="w-6 h-6 text-[#800020]" />
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-2 text-gray-800">No Results Found</h3>
            <p className="text-gray-600 font-lato mb-6">We couldn't find any news matching your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredNews.length > 0 && (
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#800020] border border-[#800020] transition-colors">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-colors">
                3
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 transition-colors">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}