"use client";

import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// Client component for FAQ items with toggle functionality
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-montserrat font-bold text-lg text-[#800020]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? 
          <ChevronUp className="w-5 h-5 text-[#800020]" /> : 
          <ChevronDown className="w-5 h-5 text-[#800020]" />
        }
      </button>
      {isOpen && (
        <div className="mt-2 font-lato text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Make this a client component
export default function FAQs() {
  const faqCategories = [
    {
      category: "Admission Process",
      questions: [
        {
          question: "What is the admission process for +2 Science?",
          answer: "The admission process for +2 Science includes completing an application form, submitting required documents, taking an entrance test, and attending an interview. Successful candidates will receive an offer letter."
        },
        {
          question: "When does the admission process start?",
          answer: "Our admission process typically starts in April for the academic year beginning in July. However, we recommend checking our website or contacting our admissions office for the exact dates."
        },
        {
          question: "Is there an entrance examination?",
          answer: "Yes, we conduct an entrance examination for all our programs to assess the student's aptitude and knowledge in relevant subjects."
        },
        {
          question: "What documents are required for admission?",
          answer: "Required documents include academic transcripts, proof of identity, passport-sized photographs, and letters of recommendation. Additional documents may be required for specific programs."
        }
      ]
    },
    {
      category: "Courses and Curriculum",
      questions: [
        {
          question: "What subjects are taught in the +2 Science program?",
          answer: "The +2 Science program includes Physics, Chemistry, Biology/Computer Science, Mathematics, English, and Nepali as core subjects."
        },
        {
          question: "How is the Medical Entrance Preparation program structured?",
          answer: "Our Medical Entrance Preparation program includes comprehensive coverage of Physics, Chemistry, and Biology, regular mock tests, doubt-clearing sessions, and personalized feedback on performance."
        },
        {
          question: "Do you provide study materials?",
          answer: "Yes, we provide comprehensive study materials, including textbooks, practice questions, and digital resources for all our programs."
        },
        {
          question: "How many hours of classes are there per week?",
          answer: "The number of class hours varies by program, but typically ranges from 25-30 hours per week, including practical sessions and tutorials."
        }
      ]
    },
    {
      category: "Fees and Scholarships",
      questions: [
        {
          question: "What are the fee structures for different programs?",
          answer: "Fee structures vary by program. Please contact our admissions office or visit our campus for detailed information about fees for specific programs."
        },
        {
          question: "Are there any scholarships available?",
          answer: "Yes, we offer merit-based scholarships to deserving students. Scholarships are awarded based on performance in the entrance examination and previous academic records."
        },
        {
          question: "What is the payment schedule for fees?",
          answer: "Fees can be paid annually, semi-annually, or quarterly. We offer flexible payment options to accommodate different financial situations."
        },
        {
          question: "Are there any additional costs beyond tuition?",
          answer: "Additional costs may include examination fees, laboratory fees, and costs for educational trips or special events. These will be communicated clearly in advance."
        }
      ]
    },
    {
      category: "Facilities and Support",
      questions: [
        {
          question: "What facilities are available for students?",
          answer: "Our facilities include well-equipped laboratories, a comprehensive library, computer labs, sports facilities, and comfortable classrooms with modern teaching aids."
        },
        {
          question: "Is there any support for students struggling with subjects?",
          answer: "Yes, we provide additional support through remedial classes, one-on-one tutoring, and regular doubt-clearing sessions for students who need extra help."
        },
        {
          question: "Do you provide career counseling?",
          answer: "Yes, we have dedicated career counselors who guide students in choosing the right career path based on their interests, aptitudes, and academic performance."
        },
        {
          question: "How do parents stay updated about their child's progress?",
          answer: "We conduct regular parent-teacher meetings and provide detailed progress reports. Parents can also schedule meetings with teachers or administrators as needed."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
          <HelpCircle className="w-8 h-8 text-[#800020]" />
        </div>
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Frequently Asked Questions</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Find answers to common questions about our programs, admission process, and facilities.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020] border-b border-gray-200 pb-2">
              {category.category}
            </h2>
            <div className="space-y-2">
              {category.questions.map((faq, faqIndex) => (
                <FAQItem 
                  key={faqIndex} 
                  question={faq.question} 
                  answer={faq.answer} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm mt-12">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Still Have Questions?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          If you couldn&apos;t find the answer to your question, please feel free to contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/contact" 
            className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Contact Us
          </a>
          <a 
            href="tel:+9775321239" 
            className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] border border-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
          >
            Call Admissions Office
          </a>
        </div>
      </div>
    </div>
  );
}