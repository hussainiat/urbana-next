import { GraduationCap } from 'lucide-react';
import CourseTemplate from '../CourseTemplate';

export default function USScholarships() {
  return (
    <CourseTemplate
      title="US University Scholarships"
      description="Our comprehensive program guides students through the process of applying to US universities and securing scholarships for their higher education."
      icon={<GraduationCap className="w-8 h-8 text-[#800020]" />}
      features={[
        "Guidance on selecting the right universities based on academic profile and career goals",
        "Comprehensive preparation for standardized tests (SAT, ACT, TOEFL, IELTS)",
        "Assistance with application essays and personal statements",
        "Guidance on securing recommendation letters",
        "Support for scholarship applications and financial aid",
        "Interview preparation and coaching"
      ]}
      highlights={[
        {
          title: "University Selection",
          description: "Strategic guidance on selecting universities that match your academic profile and offer scholarship opportunities."
        },
        {
          title: "Test Preparation",
          description: "Comprehensive preparation for standardized tests required for US university admissions."
        },
        {
          title: "Application Support",
          description: "End-to-end support for completing university applications, including essays and documents."
        }
      ]}
      curriculum={[
        {
          title: "Standardized Tests",
          topics: ["SAT/ACT Preparation", "TOEFL/IELTS Preparation", "Subject SAT Preparation"]
        },
        {
          title: "Application Components",
          topics: ["Common Application", "Essays and Personal Statements", "Recommendation Letters", "Extracurricular Activities"]
        },
        {
          title: "Scholarship Process",
          topics: ["Merit-based Scholarships", "Need-based Financial Aid", "Sports Scholarships", "Specific Program Scholarships"]
        },
        {
          title: "Visa and Pre-departure",
          topics: ["Student Visa Process", "Financial Documentation", "Pre-departure Orientation"]
        }
      ]}
      callToAction="Schedule Consultation"
    />
  );
}