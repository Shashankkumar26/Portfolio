import React from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name,
  designation,
  testimonial,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    
     <div className="mt-1">
     <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
     <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p><span className="blue-text-gradient">@</span>{name}</p>
        <p className="mt-1 text-secondary text-[12px]">{designation} of {company}</p>
      </div>
      <img src={image} alt={name}
      className="w-10 h-10 rounded-full object-cover" />
     </div>
     </div>
    
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div classname="mt-8 bg-black-100 rounded-[20px]">
      <div
        classname={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others says</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div> 
      <div className={`${styles.paddingX} mt-12 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index)=>(
        <FeedbackCard {...testimonial}
        index={index}
        key={testimonial.name}
        />
      ))}
      </div>
     
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
