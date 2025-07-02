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
    
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12 border border-gray-100">
        <h2 className="font-montserrat text-2xl font-bold mb-6 text-[#800020] text-center">Online Registration Form</h2>
        <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://registration.paathshala.com.np/online/urbana"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Paathshala Registration Form"
            className="w-full h-full"
            style={{ minHeight: '800px' }}
          />
        </div>
        <p className="font-lato text-sm text-gray-500 mt-4 text-center">
          Having trouble with the form? <a href="https://registration.paathshala.com.np/online/urbana" target="_blank" rel="noopener noreferrer" className="text-[#800020] hover:underline">Open in new window</a>
        </p>
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