import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="E-Kart👀"
          main="It is a E-Commrce website which is name E_Kart using React Js Technology
          with help of API and used some component library.It is normally Shoping Website 
          like that Flipkart, Amazon."
          demoLink="https://e-kart-gamma.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/E-Kart/blob/main/src/App.css"
        />
        <ProjectCard
          title="Blog Page✌"
          main="This is My Bloggin webpage created by HTML and CSS. It have Only two page of
          file. Firstly Html page and second is CSS page which is decorated Html page.
          It so simple but I used some special proprty of css."
          demoLink="https://blogs-opal-two.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/Blogs/blob/main/index.html"
        />
        <ProjectCard
          title="Portfolio_Website😊"
          main="It is my personal Portfolio Website created with help of Vite+React 
          Technology and used some component library. In this website mention about my 
          Profile like that About, Experience, Project, Contact."
          demoLink="https://blogs-opal-two.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/Blogs/blob/main/index.html"
        />
      </div>
    </div>
  );
};

export default Projects;