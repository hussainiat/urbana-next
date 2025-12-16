import { Book } from 'lucide-react';
import CourseTemplate from '../CourseTemplate';

export default function PlusTwoScience() {
  return (
    <CourseTemplate
      title="+2 Science"
      description="Our comprehensive science program for higher secondary education provides a strong foundation in physics, chemistry, biology, and mathematics."
      icon={<Book className="w-8 h-8 text-[#800020]" />}
      features={[
        "Expert faculty with years of teaching experience",
        "Well-equipped laboratories for practical learning",
        "Regular assessments and feedback sessions",
        "Personalized attention with small batch sizes",
        "Comprehensive study materials and resources",
        "Regular parent-teacher meetings to track progress"
      ]}
      highlights={[
        {
          title: "Comprehensive Curriculum",
          description: "Our curriculum covers all aspects of the +2 science syllabus with additional focus on practical applications."
        },
        {
          title: "Exam Preparation",
          description: "Specialized coaching for board exams and competitive entrance examinations."
        },
        {
          title: "Career Guidance",
          description: "Professional counseling to help students choose the right career path after +2."
        }
      ]}
      curriculum={[
        {
          title: "Physics",
          topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"]
        },
        {
          title: "Chemistry",
          topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Analytical Chemistry"]
        },
        {
          title: "Biology",
          topics: ["Botany", "Zoology", "Human Physiology", "Genetics", "Ecology"]
        },
        {
          title: "Mathematics",
          topics: ["Algebra", "Calculus", "Trigonometry", "Coordinate Geometry", "Statistics"]
        }
      ]}
    />
  );
}