import { Book, Stethoscope, Cog, GraduationCap, BookOpen, Calendar, Award, HelpCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "@/components/navigation/types";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileMenuItems } from "@/components/navigation/MobileMenuItems";

export const coursesMenuItems: MenuItem[] = [
  {
    icon: <Book className="w-5 h-5 text-deep-maroon" />,
    title: "+2 Science",
    description: "Comprehensive science program for higher secondary education",
    path: "/courses/plus-two-science"
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-deep-maroon" />,
    title: "Doctor (Medical Entrance)",
    description: "Specialized preparation for medical entrance examinations",
    path: "/courses/medical-entrance"
  },
  {
    icon: <Cog className="w-5 h-5 text-deep-maroon" />,
    title: "Engineering (IOE Entrance)",
    description: "Focused preparation for engineering entrance examinations",
    path: "/courses/engineering-entrance"
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-deep-maroon" />,
    title: "Scholarship (US Universities)",
    description: "Guidance for US university applications and scholarships",
    path: "/courses/us-scholarships"
  },
  {
    icon: <BookOpen className="w-5 h-5 text-deep-maroon" />,
    title: "Course Curriculum",
    description: "Detailed information about our course structures and syllabi",
    path: "/courses/curriculum"
  },
  {
    icon: <Calendar className="w-5 h-5 text-deep-maroon" />,
    title: "Academic Calendar",
    description: "Important dates, schedules, and academic events",
    path: "/courses/calendar"
  },
  {
    icon: <Award className="w-5 h-5 text-deep-maroon" />,
    title: "Success Stories",
    description: "Achievements of our students in various competitive exams",
    path: "/courses/success-stories"
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-deep-maroon" />,
    title: "FAQs",
    description: "Answers to common questions about our courses",
    path: "/courses/faqs"
  }
];

interface CoursesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export const CoursesDropdown = ({ isOpen, onClose, isMobile = false }: CoursesDropdownProps) => {
  if (isMobile) {
    return <MobileMenuItems items={coursesMenuItems} isOpen={isOpen} onClose={onClose} />;
  }
  
  return <MegaMenu items={coursesMenuItems} isOpen={isOpen} onClose={onClose} dropdownType="courses" />;
};