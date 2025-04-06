"use client";

import { Image as LucideIcon } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const categories = ["All", "Campus", "Events", "Academics", "Sports", "Cultural"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const galleryImages = [
    {
      src: "/images/gallery/campus1.jpg",
      alt: "Main Building",
      category: "Campus"
    },
    {
      src: "/images/gallery/campus2.jpg",
      alt: "Science Laboratory",
      category: "Campus"
    },
    {
      src: "/images/gallery/campus3.jpg",
      alt: "Library",
      category: "Campus"
    },
    {
      src: "/images/gallery/campus4.jpg",
      alt: "Computer Lab",
      category: "Campus"
    },
    {
      src: "/images/gallery/event1.jpg",
      alt: "Annual Day Celebration",
      category: "Events"
    },
    {
      src: "/images/gallery/event2.jpg",
      alt: "Science Exhibition",
      category: "Events"
    },
    {
      src: "/images/gallery/event3.jpg",
      alt: "Graduation Ceremony",
      category: "Events"
    },
    {
      src: "/images/gallery/academic1.jpg",
      alt: "Classroom Session",
      category: "Academics"
    },
    {
      src: "/images/gallery/academic2.jpg",
      alt: "Physics Practical",
      category: "Academics"
    },
    {
      src: "/images/gallery/academic3.jpg",
      alt: "Group Study",
      category: "Academics"
    },
    {
      src: "/images/gallery/sports1.jpg",
      alt: "Annual Sports Day",
      category: "Sports"
    },
    {
      src: "/images/gallery/sports2.jpg",
      alt: "Basketball Match",
      category: "Sports"
    },
    {
      src: "/images/gallery/sports3.jpg",
      alt: "Cricket Tournament",
      category: "Sports"
    },
    {
      src: "/images/gallery/cultural1.jpg",
      alt: "Cultural Dance Performance",
      category: "Cultural"
    },
    {
      src: "/images/gallery/cultural2.jpg",
      alt: "Music Concert",
      category: "Cultural"
    },
    {
      src: "/images/gallery/cultural3.jpg",
      alt: "Art Exhibition",
      category: "Cultural"
    }
  ];

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <AboutTemplate
      title="Gallery"
      description="Browse photos from our campus events and activities"
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
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4 w-full text-white">
                <p className="font-montserrat font-bold">{image.alt}</p>
                <p className="font-oswald text-sm uppercase tracking-wider">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
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
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Video Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video bg-gray-200 rounded-lg">
            <iframe 
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/your-video-id" 
              title="Campus Tour" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg">
            <iframe 
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/your-video-id" 
              title="Student Testimonials" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Share Your Memories</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Are you a current or former student? Share your photos and memories with us to be featured in our gallery.
        </p>
        <a 
          href="/contact" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Submit Photos
        </a>
      </div>
    </AboutTemplate>
  );
}