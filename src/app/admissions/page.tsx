export default function Admissions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Admissions</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Join our community of learners and embark on a journey of academic excellence and personal growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Admission Process</h2>
          <ol className="font-lato space-y-3 list-decimal pl-5">
            <li className="pl-2">Complete the online application form</li>
            <li className="pl-2">Submit required documents</li>
            <li className="pl-2">Pay application fee</li>
            <li className="pl-2">Attend entrance examination (if applicable)</li>
            <li className="pl-2">Participate in interview (if shortlisted)</li>
            <li className="pl-2">Receive admission decision</li>
          </ol>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Required Documents</h2>
          <ul className="font-lato space-y-3 list-disc pl-5">
            <li className="pl-2">Completed application form</li>
            <li className="pl-2">Academic transcripts</li>
            <li className="pl-2">Proof of identity</li>
            <li className="pl-2">Passport-sized photographs</li>
            <li className="pl-2">Letters of recommendation</li>
            <li className="pl-2">Statement of purpose</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12 border border-gray-100">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Application Form</h2>
        <p className="font-lato mb-6 text-gray-600">Fill out the form below to start your application process.</p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="font-montserrat text-lg font-bold mb-4 text-[#800020]">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-lato block mb-2 font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all" 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="font-lato block mb-2 font-medium text-gray-700">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all" 
                />
              </div>
              
              <div>
                <label className="font-lato block mb-2 font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all" 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="font-lato block mb-2 font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all" 
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="font-montserrat text-lg font-bold mb-4 text-[#800020]">Academic Information</h3>
            
            <div className="mb-4">
              <label className="font-lato block mb-2 font-medium text-gray-700">Program Interested In</label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all">
                <option value="">Select a program</option>
                <option value="plus-two-science">+2 Science</option>
                <option value="medical-entrance">Medical Entrance</option>
                <option value="engineering-entrance">Engineering Entrance</option>
                <option value="us-scholarships">US University Scholarships</option>
              </select>
            </div>
            
            <div>
              <label className="font-lato block mb-2 font-medium text-gray-700">Previous Academic Information</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all" 
                    placeholder="School Name"
                  />
                </div>
                <div>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all"
                  >
                    <option value="">Select Grade/Class</option>
                    <option value="10">SEE/SLC</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all" 
                    placeholder="Percentage/GPA"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="font-montserrat text-lg font-bold mb-4 text-[#800020]">Additional Information</h3>
            
            <div>
              <label className="font-lato block mb-2 font-medium text-gray-700">Additional Message</label>
              <textarea 
                rows={4} 
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800020]/20 focus:border-[#800020] transition-all"
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 text-[#800020] border-gray-300 rounded focus:ring-[#800020]" 
                />
                <label htmlFor="terms" className="ml-2 font-lato text-gray-700">
                  I agree to the <a href="/terms" className="text-[#800020] hover:underline">terms and conditions</a>
                </label>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 text-center mt-4">
            <button 
              type="submit" 
              className="font-oswald bg-[#800020] hover:bg-[#e63946] text-white px-10 py-3 rounded-md uppercase tracking-wider transition-colors shadow-sm hover:shadow-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100 shadow-sm">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-[#800020]">Need Help?</h2>
        <p className="font-lato mb-6 max-w-2xl mx-auto text-gray-600">
          Our admissions team is here to guide you through every step of the application process.
        </p>
        <a 
          href="/contact" 
          className="inline-block font-oswald bg-white hover:bg-gray-100 text-[#800020] border border-[#800020] px-8 py-3 rounded-md uppercase tracking-wider transition-colors"
        >
          Contact Admissions Office
        </a>
      </div>
    </div>
  );
}