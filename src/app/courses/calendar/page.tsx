import { Calendar as CalendarIcon } from 'lucide-react';

export default function Calendar() {
  const academicEvents = [
    {
      month: "January",
      events: [
        { date: "January 5", title: "Winter Session Begins", description: "Classes resume after winter break" },
        { date: "January 15-20", title: "First Unit Tests", description: "Unit tests for all courses" }
      ]
    },
    {
      month: "February",
      events: [
        { date: "February 10", title: "Science Exhibition", description: "Annual science project exhibition" },
        { date: "February 25", title: "Parent-Teacher Meeting", description: "Discussion of student progress" }
      ]
    },
    {
      month: "March",
      events: [
        { date: "March 15-30", title: "Term Examinations", description: "End of term examinations for all courses" }
      ]
    },
    {
      month: "April",
      events: [
        { date: "April 1-15", title: "Spring Break", description: "No classes during this period" },
        { date: "April 16", title: "New Academic Session Begins", description: "Start of new academic year" }
      ]
    },
    {
      month: "May",
      events: [
        { date: "May 10-15", title: "First Unit Tests", description: "Unit tests for the new session" }
      ]
    },
    {
      month: "June",
      events: [
        { date: "June 1", title: "Summer Workshops Begin", description: "Special workshops and activities" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#800020]/10 p-3 rounded-full mb-4">
          <CalendarIcon className="w-8 h-8 text-[#800020]" />
        </div>
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Academic Calendar</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Stay updated with important dates, schedules, and academic events throughout the year.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020]">Academic Year 2023-2024</h2>
        
        <div className="space-y-8">
          {academicEvents.map((monthData, index) => (
            <div key={index}>
              <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020] border-b border-gray-200 pb-2">{monthData.month}</h3>
              <div className="space-y-4">
                {monthData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex">
                    <div className="w-1/3 font-oswald text-gray-700">{event.date}</div>
                    <div className="w-2/3">
                      <h4 className="font-montserrat font-bold text-[#800020]">{event.title}</h4>
                      <p className="font-lato text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020]">Examination Schedule</h3>
          <ul className="space-y-2 font-lato text-gray-600">
            <li className="flex justify-between"><span>First Unit Tests:</span> <span>January 15-20, May 10-15</span></li>
            <li className="flex justify-between"><span>Mid-Term Examinations:</span> <span>August 10-20</span></li>
            <li className="flex justify-between"><span>Second Unit Tests:</span> <span>October 5-10</span></li>
            <li className="flex justify-between"><span>Final Examinations:</span> <span>March 15-30</span></li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="font-montserrat text-xl font-bold mb-4 text-[#800020]">Holidays</h3>
          <ul className="space-y-2 font-lato text-gray-600">
            <li className="flex justify-between"><span>Winter Break:</span> <span>December 20 - January 4</span></li>
            <li className="flex justify-between"><span>Spring Break:</span> <span>April 1-15</span></li>
            <li className="flex justify-between"><span>Summer Break:</span> <span>July 1-15</span></li>
            <li className="flex justify-between"><span>Dashain Vacation:</span> <span>As per calendar</span></li>
            <li className="flex justify-between"><span>Tihar Vacation:</span> <span>As per calendar</span></li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Download Calendar</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Download the complete academic calendar for your reference.
        </p>
        <a 
          href="#" 
          className="inline-block font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}