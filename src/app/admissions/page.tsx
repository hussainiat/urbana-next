export default function Admissions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-deep-maroon">Admissions</h1>
      <p className="font-lato text-lg mb-8">
        Join our community of learners and embark on a journey of academic excellence and personal growth.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-soft-gray dark:bg-gray-700 p-6 rounded-lg">
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-rich-blue">Admission Process</h2>
          <ol className="font-lato space-y-2 list-decimal list-inside">
            <li>Complete the online application form</li>
            <li>Submit required documents</li>
            <li>Pay application fee</li>
            <li>Attend entrance examination (if applicable)</li>
            <li>Participate in interview (if shortlisted)</li>
            <li>Receive admission decision</li>
          </ol>
        </div>
        
        <div className="bg-soft-gray dark:bg-gray-700 p-6 rounded-lg">
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-rich-blue">Required Documents</h2>
          <ul className="font-lato space-y-2 list-disc list-inside">
            <li>Completed application form</li>
            <li>Academic transcripts</li>
            <li>Proof of identity</li>
            <li>Passport-sized photographs</li>
            <li>Letters of recommendation</li>
            <li>Statement of purpose</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-dark-gray shadow-md rounded-lg p-6 mb-12">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-rich-blue">Application Form</h2>
        <p className="font-lato mb-6">Fill out the form below to start your application process.</p>
        
        {/* Placeholder for application form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="font-lato block mb-1">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="font-lato block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="font-lato block mb-1">Phone</label>
            <input type="tel" className="w-full p-2 border rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="font-lato block mb-1">Course Interested In</label>
            <select className="w-full p-2 border rounded">
              <option>Select a course</option>
              <option>Course 1</option>
              <option>Course 2</option>
              <option>Course 3</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="font-lato block mb-1">Message</label>
            <textarea rows={4} className="w-full p-2 border rounded"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="font-oswald bg-bright-red hover:bg-red-700 text-white px-6 py-3 rounded-md uppercase tracking-wider">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}