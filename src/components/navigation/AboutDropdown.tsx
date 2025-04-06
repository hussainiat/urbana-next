import { Building2, Target, Users, School, MessageSquare, User, Activity, Image as LucideIcon } from "lucide-react";
import { MenuItem } from "@/components/navigation/types";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileMenuItems } from "@/components/navigation/MobileMenuItems";

export const aboutMenuItems: MenuItem[] = [
  {
    icon: <Building2 className="w-5 h-5 text-[#800020]" />,
    title: "Institute Overview",
    description: "Learn about our history, achievements, and educational philosophy",
    path: "/about/overview",
    bgColor: "bg-white"
  },
  {
    icon: <Target className="w-5 h-5 text-[#800020]" />,
    title: "Mission & Vision",
    description: "Discover our goals and commitment to educational excellence",
    path: "/about/mission-vision",
    bgColor: "bg-white"
  },
  {
    icon: <Users className="w-5 h-5 text-[#800020]" />,
    title: "Faculty & Staff",
    description: "Meet our experienced team of educators and administrators",
    path: "/about/faculty"
  },
  {
    icon: <School className="w-5 h-5 text-[#800020]" />,
    title: "Infrastructure & Facilities",
    description: "Explore our state-of-the-art campus and learning facilities",
    path: "/about/facilities"
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#800020]" />,
    title: "Testimonials",
    description: "Read success stories from our students and alumni",
    path: "/about/testimonials"
  },
  {
    icon: <User className="w-5 h-5 text-[#800020]" />,
    title: "Message from Principal",
    description: "Read a personal message from our school's leadership",
    path: "/about/principal-message"
  },
  {
    icon: <Activity className="w-5 h-5 text-[#800020]" />,
    title: "Life at Urbana",
    description: "Experience the vibrant student life and campus culture",
    path: "/about/campus-life"
  },
  {
    icon: <LucideIcon className="w-5 h-5 text-[#800020]" />,
    title: "Gallery",
    description: "Browse photos from our campus events and activities",
    path: "/about/gallery"
  }
];

interface AboutDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export const AboutDropdown = ({ isOpen, onClose, isMobile = false }: AboutDropdownProps) => {
  if (isMobile) {
    return <MobileMenuItems items={aboutMenuItems} isOpen={isOpen} onClose={onClose} />;
  }
  
  return <MegaMenu items={aboutMenuItems} isOpen={isOpen} onClose={onClose} dropdownType="about" />;
};