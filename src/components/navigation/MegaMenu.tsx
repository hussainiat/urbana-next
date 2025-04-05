import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MenuItem } from "@/components/navigation/types";

interface MegaMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  dropdownType?: 'about' | 'courses';
}

export const MegaMenu = ({ items, isOpen, onClose, dropdownType = 'about' }: MegaMenuProps) => {
  if (!isOpen) return null;
  
  // Use the same positioning for both dropdown types
  const positionClass = 'left-0 sm:-left-[100px] md:-left-[150px] lg:-left-[200px]';
  
  return (
    <div className={`absolute ${positionClass} mt-2 w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4 md:p-6 z-50 border border-gray-200 dark:border-gray-700`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.slice(0, 6).map((item, index) => (
            <Link 
              key={index} 
              href={item.path}
              className="flex p-2 sm:p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              <div className="mr-3 sm:mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-montserrat font-bold text-rich-blue dark:text-white text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="sm:col-span-1 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-gray-700 pt-4 sm:pt-0 sm:pl-4 mt-4 sm:mt-0">
          <div className="mb-4">
            <h3 className="font-montserrat font-bold text-deep-maroon dark:text-bright-red mb-2 text-sm sm:text-base">Explore More</h3>
            <div className="space-y-2">
              {items.slice(6).map((item, index) => (
                <Link 
                  key={index} 
                  href={item.path}
                  className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={onClose}
                >
                  <div className="mr-2 sm:mr-3">{item.icon}</div>
                  <div>
                    <h4 className="font-montserrat font-bold text-rich-blue dark:text-white text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-soft-gray dark:bg-gray-700 rounded-lg p-2 sm:p-3">
            <h3 className="font-montserrat font-bold text-rich-blue dark:text-white mb-2 text-xs sm:text-sm">Latest News</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">Urbana ranks #1 in Science Education Excellence Awards 2023</p>
            <Link 
              href="/news" 
              className="text-xs text-bright-red hover:underline flex items-center"
              onClick={onClose}
            >
              Read all news <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};