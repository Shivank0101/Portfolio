import mongoDB from "/mongodb.jpg";
import reactjs from "/reactjs.png";
import Universe from "/Bennett.webp";
import youtube from "/youtube.png"
import amazon from "/amazon.png"
import js from "/js.jpeg"

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "Unisphere",
      description: "A campus-focused event management system enabling students and faculty to create, manage, and register for university events, club activities, and workshops.",
      url: "https://unisphere-frontend.onrender.com/",
      sourceCode: "https://github.com/Shivank0101/Unisphere-new",  
    },
    {
      id: 2,
      logo: Universe,
      name: "Universe",
      description: "Developed a responsive college website with intuitive navigation using React.",
      url: "https://universe-gules.vercel.app/",
      sourceCode: "https://github.com/Shivank0101/Universe",  
    },
    {
      id: 3,
      logo: reactjs,
      name: "This Portfolio",
      description: "Designed and developed a responsive portfolio website using React.js and Tailwind.",
      url: "https://portfolio-shivank0101s-projects.vercel.app/",
      sourceCode: "https://github.com/Shivank0101/Portfolio",  
    },
    {
      id: 4,
      logo: mongoDB,
      name: "Snooker Club",
      description: "A web app for managing a snooker club's events and memberships.",
      url: "https://shivank0101.github.io/snookerclub/",
      sourceCode: "https://github.com/Shivank0101/snookerclub/tree/master",
    },
    {
      id: 5,
      logo: youtube,
      name: "Youtube Clone",
      description: "Youtube clone inspired by Youtube",
      url: "https://shivank0101.github.io/YouTube_Clone/",
      sourceCode: "https://github.com/Shivank0101/YouTube_Clone",
    },
    {      
      id: 6,
      logo: js,
      name: "Modern Landing Page",
      description: "A sleek and responsive landing page for a startup.",
      url: "https://shivank0101.github.io/Modern-Landing-Page/",
      sourceCode: "https://github.com/Shivank0101/Modern-Landing-Page",
    },
    {
      id: 7,
      logo: amazon,
      name: "Amazon Clone",
      description: "Home page of Amazon by using basic HTML and CSS.",
      url: "https://shivank0101.github.io/Amazon-Clone/",
      sourceCode: "https://github.com/Shivank0101/Amazon-Clone",
    },
  ];

  return (
     <div
      name="Portfolio"  //We use name="Portfolio" in that <div> so that react-scroll can find this exact section when the Navbar’s <Link to="Portfolio"> is clicked, enabling smooth scrolling to it.
      className="max-w-screen-2xl container mx-auto px-5 py-20 text-white"
      >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold border-b-4 border-purple-500 inline-block pb-2">
          Projects
        </h1>
        <p className="text-gray-400 mt-3">Some of my featured and fun works</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardItem.map(({ id, logo, name, description, url, sourceCode }) => (
          <div
            key={id}
            className="group relative bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-lg shadow-[0_0_25px_#a855f7] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_#9333ea]"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 object-cover rounded-full border-4 border-purple-500 shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
              <div className="flex gap-4 mt-6">
                <a
                  href={url}   // Specifies the destination URL for the hyperlink
                  target="_blank"  // Opens the linked document in a new browser tab or window.
                  rel="noopener noreferrer"  // Security ke liye, taaki nayi tab apki site ko access na kar sake.
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium shadow-md hover:scale-105 transition-transform"
                >
                  Live
                </a>
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium shadow-md hover:scale-105 transition-transform"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
