import React from "react";
import photo from "/images/photo.png";

function Info() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-20 px-10 md:py-6 py-3" id="about">
      <h1 className="md:text-4xl text-2xl text-center  font-bold md:hidden block">
          <span className="underline">About</span> <span className="text-cyan-500">Me</span>
        </h1>
      <div className="md:w-1/2 w-full">
        <img src={photo} alt="" className="max-w-[630px] w-full h-auto" />
      </div>
      <div className="md:w-1/2 w-full p-2">
        <h1 className="text-4xl font-bold md:block hidden">
          <span className="underline">About</span> <span className="text-cyan-500">Me</span>
        </h1>
        <p className="text-lg md:my-4 my-0 rounded-lg shadow-xl bg-transparent border border-slate-800 p-4">
        Hello! My name is Suman Maji and I am currently pursuing my Master of Science in Agronomy at The Neotia University. With a strong foundation from my bachelor's degree in Agriculture from the same institution, I am dedicated to advancing my knowledge and skills in the field of agronomy.
        My academic journey is complemented by hands-on experience in various agricultural practices, research projects, and internships. I am excited about the future of agronomy and committed to contributing to the field through research, innovation, and practical application
        </p>
      </div>
    </div>
  );
}

export default Info;
