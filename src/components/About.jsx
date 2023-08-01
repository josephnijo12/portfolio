import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a certified work health and business professional with experience in quality control and a passion for solving problems. I bring a unique perspective to the field of software engineering. I am a hard worker who values teamwork and is considerate of others, and I thrive in environments where I can contribute my expertise to help achieve team goals. With my easygoing nature and kind demeanor, I build strong relationships with colleagues and clients alike.
        </p>

        <br />

        <p className="text-xl">
          As someone with experience ensuring quality standards, I understand the importance of attention to detail and strive for excellence in my work. As a lifelong learner with a keen interest in the latest software advancements, I am committed to making a positive impact on the world through my work in software engineering.

        </p>
      </div>
    </div>
  );
};

export default About;
