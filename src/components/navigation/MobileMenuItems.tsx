import Link from "next/link";
import { MenuItem } from "@/components/navigation/types";

interface MobileMenuItemsProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenuItems = ({ items, isOpen, onClose }: MobileMenuItemsProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 ml-3">
      {items.map((item, index) => (
        <Link 
          key={index} 
          href={item.path}
          className="flex items-start p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={onClose}
        >
          <div className="mr-3 mt-1">{item.icon}</div>
          <div>
            <h3 className="font-montserrat font-bold text-rich-blue dark:text-white text-sm">{item.title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};