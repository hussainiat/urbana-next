import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CourseTemplateProps {
  title: string;
  description: string;
  features: string[];
  highlights: { title: string; description: string }[];
  curriculum?: { title: string; topics: string[] }[];
  callToAction?: string;
  icon: ReactNode;
}

export default function CourseTemplate({
  title,
  description,
  features,
  highlights,
  curriculum,
  callToAction = "Apply Now",
  icon
}: CourseTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
          {icon}
        </div>
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">{title}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          {description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">{highlight.title}</h3>
            <p className="font-lato text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Key Features</h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-[#800020] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <span className="font-lato text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Why Choose This Program</h2>
          <p className="font-lato text-gray-600 mb-6">
            Our program is designed to provide students with comprehensive knowledge and skills needed to excel in their academic and professional pursuits.
          </p>
          <Link 
            href="/admissions" 
            className="inline-flex items-center font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-6 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            {callToAction}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {curriculum && (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((section, index) => (
              <div key={index}>
                <h3 className="font-montserrat text-xl font-bold mb-3 text-[#800020]">{section.title}</h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#800020] rounded-full mt-2 mr-3"></div>
                      <span className="font-lato text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Ready to Get Started?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Take the first step towards a bright future. Apply now or contact us to learn more about our programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/admissions" 
            className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Apply Now
          </Link>
          <Link 
            href="/contact" 
            className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] border border-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}