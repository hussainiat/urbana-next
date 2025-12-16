import { ReactNode } from 'react';

interface AboutTemplateProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function AboutTemplate({
  title,
  description,
  icon,
  children
}: AboutTemplateProps) {
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
      
      {children}
    </div>
  );
}