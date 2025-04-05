export default function StudentZone() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-deep-maroon">Student Zone</h1>
      <p className="font-lato text-lg mb-8">
        Access resources, information, and services designed to enhance your learning experience at Urbana.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Learning Resources", icon: "📚" },
          { title: "Student Portal", icon: "🖥️" },
          { title: "Library Access", icon: "📖" },
          { title: "Academic Calendar", icon: "📅" },
          { title: "Exam Schedule", icon: "✏️" },
          { title: "Student Support", icon: "🤝" }
        ].map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-montserrat text-xl font-bold mb-2">{item.title}</h3>
            <p className="font-lato mb-4">Access important information and resources related to {item.title.toLowerCase()}.</p>
            <button className="font-oswald text-bright-red hover:text-red-700 uppercase tracking-wider">
              Access Now →
            </button>
          </div>
        ))}
      </div>
      
      <div className="bg-soft-gray dark:bg-gray-800 rounded-lg p-6">
        <h2 className="font-montserrat text-2xl font-bold mb-4 text-rich-blue">Student Login</h2>
        <p className="font-lato mb-6">Log in to access your student dashboard and resources.</p>
        
        <form className="max-w-md">
          <div className="mb-4">
            <label className="font-lato block mb-1">Student ID</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="font-lato block mb-1">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="font-oswald bg-rich-blue hover:bg-blue-800 text-white px-6 py-3 rounded-md uppercase tracking-wider">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}