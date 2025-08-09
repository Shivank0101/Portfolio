import html from "/html.png";
import css from "/css.jpg";
import cpp from "/cpp.png";
import javascript from "/javascript.png";
import gsap from "/gsap.png";
import reactjs from "/reactjs.png";
import node from "/node.png";
import git from "/git.png";


function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "React" },
    { id: 5, logo: cpp, name: "CPP" },
    { id: 6, logo: gsap, name: "GSAP" },
    { id: 7, logo: node, name: "Node" },
    { id: 8, logo: git, name: "Git & GitHub" },

  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Tech Stack
        </h1>
        <p className="text-purple-300 mb-10">
          I am familiar with these technologies and tools.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border border-purple-500 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-purple-500/40 transition duration-300 hover:scale-105 cursor-pointer p-4 group"
            >
              <img
                src={logo}
                alt={name}
                className="w-[100px] h-[100px] rounded-full object-cover mb-4 group-hover:drop-shadow-[0_0_15px_lime]"
              />
              <div className="text-white text-lg font-semibold group-hover:text-lime-300">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
