export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-deep-maroon">Our Courses</h1>
      <p className="font-lato text-lg mb-8">
        Explore our wide range of courses designed to provide comprehensive education and skill development.
      </p>
      
      {/* Course categories and listings will go here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* This is a placeholder for course listings */}
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-soft-gray dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="font-montserrat text-xl font-bold mb-2">Course Title {index + 1}</h3>
              <p className="font-lato mb-4">Detailed description of the course curriculum and outcomes.</p>
              <button className="font-oswald text-bright-red hover:text-red-700 uppercase tracking-wider">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}