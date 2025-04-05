import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-deep-maroon">About Urbana</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="font-lato text-lg mb-4">
            Urbana is a premier educational institution dedicated to providing quality education and fostering academic excellence. Founded in 2005, we have been at the forefront of innovative teaching methodologies and holistic development.
          </p>
          <p className="font-lato text-lg mb-4">
            Our mission is to empower students with knowledge, skills, and values that prepare them for the challenges of the future. We believe in nurturing not just academic brilliance but also character, creativity, and social responsibility.
          </p>
          <p className="font-lato text-lg">
            With state-of-the-art facilities and a team of dedicated educators, Urbana provides an environment where learning is engaging, meaningful, and transformative.
          </p>
        </div>
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
          <Image 
            src="/placeholder-about.jpg" 
            alt="Urbana Campus"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-rich-blue">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { title: "Excellence", description: "Striving for the highest standards in all our endeavors" },
          { title: "Innovation", description: "Embracing new ideas and approaches to education" },
          { title: "Integrity", description: "Upholding honesty, ethics, and transparency in all actions" },
          { title: "Inclusivity", description: "Creating a diverse and welcoming community for all" }
        ].map((value, index) => (
          <div key={index} className="bg-soft-gray dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-oswald text-xl uppercase mb-3 text-bright-red">{value.title}</h3>
            <p className="font-lato">{value.description}</p>
          </div>
        ))}
      </div>
      
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-rich-blue">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image 
                src={`/placeholder-team-${item}.jpg`} 
                alt={`Team Member ${item}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-montserrat font-bold text-lg">Faculty Name</h3>
              <p className="font-lato text-gray-600 dark:text-gray-300 mb-2">Position</p>
              <p className="font-lato text-sm">Brief description about the faculty member and their expertise.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}