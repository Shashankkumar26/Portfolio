import React from "react";
import { github } from "../assets";
import { link } from "../assets";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  hosted_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:violet-gradient"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl "
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 transition-all  rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain transition-all  rounded-3xl hover:w-full hover:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-row items-center">
            <h3 className="text-white text-[26px]"> {name} </h3>

            <img
              src={link}
              alt="link"
              onClick={() => window.open(hosted_link, "_blank")}
              class="filter bg-tertiary ml-5 h-5 w-5 object-contain transition-all hover:bg-pink-500 hover:rounded hover:scale-110 cursor-pointer hover:h-7 hover:w-7"
            />
          </div>
          <p className="text-secondary flex justify start ">{description}</p>
          <div className="flex mt-5"> 
         {tags.map((tag)=>{
         return <p className={`${tag.color} mr-4`}> #{tag.name}</p>
         })}
        </div>
        </div>
        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", "0.1", 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following Project showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos in it. It reflects my ability to
          solve complex problems, work with different technologies, and mange
          projects effectively.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
