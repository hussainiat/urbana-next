import { Stethoscope } from 'lucide-react';
import CourseTemplate from '../CourseTemplate';

export default function MedicalEntrance() {
  return (
    <CourseTemplate
      title="Medical Entrance Preparation"
      description="Our specialized program prepares students for medical entrance examinations in Nepal with comprehensive coverage of subjects and extensive practice."
      icon={<Stethoscope className="w-8 h-8 text-[#800020]" />}
      features={[
        "Focused preparation for IOM, BPKIHS, KU, and other Nepali medical entrance exams",
        "Expert faculty with experience in medical entrance coaching",
        "Regular mock tests simulating actual exam conditions",
        "Detailed analysis of test performance and personalized feedback",
        "Comprehensive study materials and question banks",
        "Special sessions on exam strategies and time management"
      ]}
      highlights={[
        {
          title: "Subject Expertise",
          description: "In-depth coverage of Physics, Chemistry, and Biology with focus on application-based questions as per Nepali medical entrance patterns."
        },
        {
          title: "Test Series",
          description: "Extensive practice with chapter-wise, subject-wise, and full-length mock tests based on previous IOM and BPKIHS patterns."
        },
        {
          title: "Doubt Clearing",
          description: "Regular doubt clearing sessions and one-on-one interactions with faculty who understand Nepal's medical education system."
        }
      ]}
      curriculum={[
        {
          title: "Physics for Medical",
          topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"]
        },
        {
          title: "Chemistry",
          topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Biochemistry"]
        },
        {
          title: "Biology",
          topics: ["Human Physiology", "Genetics", "Cell Biology", "Ecology", "Botany", "Zoology"]
        },
        {
          title: "Exam Preparation",
          topics: ["MCQ Practice", "Previous Year IOM Papers", "Time Management", "Exam Strategies"]
        }
      ]}
    />
  );
}