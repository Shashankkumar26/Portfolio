import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { ZeroSlopeEnding } from "three";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// service_2874zek
// template_mw1rui9
// K6uAk2god0SFxrzO7
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
        'service_2874zek',
        'template_mw1rui9',
        {
          from_name: form.name,
          to_name: "Shashank",
          from_email: form.email,
          to_email: "Sasankmathur6@gmail.com",
          message: form.message,
        },
        "K6uAk2god0SFxrzO7"
      )
      .then(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        alert("Thankyou I will get back to you as soon as possible");
      }),
      (error) => {
        console.log(error);
        alert("something went wrong.");
      };
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>GET IN TOUCH</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name? "
              className="bg-tertiary py-4 px-6 text-white  placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your Email? "
              className="bg-tertiary py-4 px-6 text-white  placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Leave Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message "
              className="bg-tertiary py-4 px-6 text-white 
          placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl hover:text-[blue] "
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl-flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        <StarsCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
