import React from "react";
import Quiz from "../assets/portfolio/quiz.jpg";
import TTT from "../assets/portfolio/tic-tac-toe.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Quiz,
      demo: "https://mindameld.surge.sh",
      code: "https://github.com/josephnijo12/MindaMeld-Project-4-",
    },
    {
      id: 2,
      src: TTT,
      demo: "https://josephnijo12.github.io/tic-tac-toe/",
      code: "https://github.com/josephnijo12/tic-tac-toe",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover h-64 w-full" // set the height and width
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Add security attributes
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
