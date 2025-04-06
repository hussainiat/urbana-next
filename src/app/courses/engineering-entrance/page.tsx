import { Cog } from 'lucide-react';
import CourseTemplate from '../CourseTemplate';

export default function EngineeringEntrance() {
  return (
    <CourseTemplate
      title="Engineering Entrance Preparation"
      description="Our focused program prepares students for engineering entrance examinations with comprehensive coverage of subjects and extensive problem-solving practice."
      icon={<Cog className="w-8 h-8 text-[#800020]" />}
      features={[
        "Specialized preparation for IOE, IITJEE, and other engineering entrance exams",
        "Expert faculty with experience in engineering entrance coaching",
        "Regular problem-solving sessions and practice tests",
        "Detailed analysis of test performance and personalized feedback",
        "Comprehensive study materials and question banks",
        "Special focus on numerical problem-solving techniques"
      ]}
      highlights={[
        {
          title: "Subject Mastery",
          description: "In-depth coverage of Physics, Chemistry, and Mathematics with focus on application and problem-solving."
        },
        {
          title: "Practice Sessions",
          description: "Extensive practice with topic-wise, subject-wise, and full-length mock tests."
        },
        {
          title: "Personalized Guidance",
          description: "Regular performance tracking and personalized guidance for improvement."
        }
      ]}
      curriculum={[
        {
          title: "Physics for Engineering",
          topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"]
        },
        {
          title: "Chemistry",
          topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Applied Chemistry"]
        },
        {
          title: "Mathematics",
          topics: ["Algebra", "Calculus", "Trigonometry", "Coordinate Geometry", "Vectors", "Probability"]
        },
        {
          title: "Exam Preparation",
          topics: ["Problem Solving Techniques", "Previous Year Papers", "Time Management", "Exam Strategies"]
        }
      ]}
    />
  );
}