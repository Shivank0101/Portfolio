import React from "react";
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
      logo: Universe,
      name: "Universe",
      description: "eveloped a responsive college website with intuitive navigation using React.",
      url: "https://universe-gules.vercel.app/",
      sourceCode: "https://github.com/Shivank0101/Universe",


      
      
    },
    {
      id: 2,
      logo: reactjs,
      name: "This Portfolio",
      description: "Designed and developed a responsive portfolio website using React.js and Tailwind.",
      url: "https://portfolio-shivank0101s-projects.vercel.app/",
      sourceCode: "https://github.com/Shivank0101/Portfolio",
      
    },
    {
      

      id: 3,
      logo: mongoDB,
      name: "Snooker Club",
      description: "A web app for managing a snooker club's events and memberships.",
      url: "https://shivank0101.github.io/snookerclub/",
      sourceCode: "https://github.com/Shivank0101/snookerclub/tree/master",
    },
    {
      id: 4,
      logo: youtube,
      name: "Youtube Clone",
      description: "Youtube clone inspired by Youtube",
      url: "https://shivank0101.github.io/YouTube_Clone/",
      sourceCode: "https://github.com/Shivank0101/YouTube_Clone",
    },
    {
      
      id: 5,
      logo: js,
      name: "Modern Landing Page",
      description: "A sleek and responsive landing page for a startup.",
      url: "https://shivank0101.github.io/Modern-Landing-Page/",
      sourceCode: "https://github.com/Shivank0101/Modern-Landing-Page",
    },
    {
      id: 6,
      logo: amazon,
      name: "Amazon Clone",
      description: "Home page of Amazon by using basic HTML and CSS.",
      url: "https://shivank0101.github.io/Amazon-Clone/",
      sourceCode: "https://github.com/Shivank0101/Amazon-Clone",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Project</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, url, sourceCode }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  View
                </a>
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
