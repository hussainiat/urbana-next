"use client";

import { Image as LucideIcon, Video, ChevronRight } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Gallery() {
  const categories = ["All", "Campus", "Laboratory", "Classroom", "Students", "Videos"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const galleryImages = [
  
    {
      src: "/images/urbana/IMG_6919.JPEG",
      alt: "Campus Building",
      category: "Campus"
    },
  
    {
      src: "/images/urbana/IMG_6921.JPEG",
      alt: "Student Experiments",
      category: "Laboratory"
    },
    {
      src: "/images/urbana/IMG_6922.JPEG",
      alt: "Chemistry Lab Work",
      category: "Laboratory"
    },
    {
      src: "/images/urbana/IMG_6923.JPEG",
      alt: "Classroom Learning",
      category: "Classroom"
    },
    {
      src: "/images/urbana/IMG_6925.JPEG",
      alt: "Interactive Teaching",
      category: "Classroom"
    },
    {
      src: "/images/urbana/IMG_6926.JPEG",
      alt: "Group Discussion",
      category: "Classroom"
    },
    {
      src: "/images/urbana/IMG_6927.JPEG",
      alt: "Faculty Guidance",
      category: "Classroom"
    },
    {
      src: "/images/urbana/IMG_6928.JPEG",
      alt: "Student Activities",
      category: "Students"
    },
    {
      src: "/images/urbana/IMG_6929.JPEG",
      alt: "Student Collaboration",
      category: "Students"
    },
    {
      src: "/images/urbana/IMG_6930.JPEG",
      alt: "Student Projects",
      category: "Students"
    },
    {
      src: "/images/urbana/IMG_6931.JPEG",
      alt: "Campus Facilities",
      category: "Campus"
    }
  ];

  const videoGallery = [
    {
      id: "EY_8JvOFaro",
      title: "Urbana School Science Exhibition",
      thumbnail: `https://img.youtube.com/vi/EY_8JvOFaro/maxresdefault.jpg`,
      category: "Videos"
    },
    {
      id: "bN5qVsyDtV8",
      title: "Laboratory Experiments at Urbana",
      thumbnail: `https://img.youtube.com/vi/bN5qVsyDtV8/maxresdefault.jpg`,
      category: "Videos"
    },
    {
      id: "ZY9oK-SpoxM",
      title: "Student Success Stories",
      thumbnail: `https://img.youtube.com/vi/ZY9oK-SpoxM/maxresdefault.jpg`,
      category: "Videos"
    }
  ];

  const allMedia = [...galleryImages, ...videoGallery];
  
  const filteredMedia = activeCategory === "All" 
    ? allMedia 
    : allMedia.filter(item => item.category === activeCategory);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <AboutTemplate
      title="Gallery"
      description="Browse photos and videos from our campus and academic activities"
      icon={<LucideIcon className="w-8 h-8 text-[#800020]" />}
    >
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`px-4 py-2 rounded-full font-oswald text-sm uppercase tracking-wider transition-colors ${
              category === activeCategory 
                ? "bg-[#800020] text-white" 
                : "bg-white text-[#800020] border border-[#800020] hover:bg-[#800020] hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {filteredMedia.map((item, index) => {
          // Check if it's a video item
          if ('id' in item) {
            return (
              <div 
                key={`video-${index}`} 
                className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedVideo(item.id)}
              >
                <Image 
                  src={item.thumbnail} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#800020]/80 flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 p-4 text-white">
                  <p className="font-montserrat font-bold">{item.title}</p>
                </div>
              </div>
            );
          }
          
          // It's an image item
          return (
            <div 
              key={`image-${index}`} 
              className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(item.src)}
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full text-white">
                  <p className="font-montserrat font-bold">{item.alt}</p>
                  <p className="font-oswald text-sm uppercase tracking-wider">{item.category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={e => e.stopPropagation()}>
            <Image 
              src={selectedImage} 
              alt="Enlarged view" 
              fill 
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black z-10"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Campus Highlights</h2>
        
        <p className="text-center font-lato text-gray-600 mb-8 max-w-3xl mx-auto">
          Our campus features modern laboratories, well-equipped classrooms, and collaborative learning spaces designed to provide an optimal environment for scientific education.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">State-of-the-Art Laboratories</h3>
            <p className="font-lato text-gray-600">Our laboratories are equipped with modern instruments and tools to facilitate hands-on learning and scientific exploration.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Interactive Classrooms</h3>
            <p className="font-lato text-gray-600">Our classrooms are designed to encourage active participation and collaborative learning among students.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-montserrat text-lg font-bold mb-2 text-[#800020]">Student-Centered Approach</h3>
            <p className="font-lato text-gray-600">We focus on providing personalized attention and guidance to help each student achieve their academic goals.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Visit Our Campus</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Experience our facilities firsthand. Schedule a campus tour to see our laboratories, classrooms, and learning environment in action.
        </p>
        <Button variant="primary" size="primary" asChild>
              <Link href="/contact">
                Schedule A Tour
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
      </div>
    </AboutTemplate>
  );
}