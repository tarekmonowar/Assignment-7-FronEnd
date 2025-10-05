"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { toast, Zoom } from "react-toastify";
import { useInView } from "react-intersection-observer";

import styles from "./Contact2.module.css";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Contact() {
  //for toastify message
  const { ref, inView } = useInView({ threshold: 0.5 });

  const toastId = "contact-form-toast"; // unique id

  useEffect(() => {
    if (inView && !toast.isActive(toastId)) {
      toast.info("Please fill out the form and click send to contact me.", {
        toastId: toastId,
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Zoom,
      });
    } else if (!inView && toast.isActive(toastId)) {
      // Dismiss the toast when the component goes out of view
      toast.dismiss(toastId);
    }
  }, [inView]);

  //for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Form data handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Form submit handler
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    // Show "Sending..." toast (info type)
    const toastId = toast.info("Sending your message...", {
      autoClose: false, // Keep it open until the operation finishes
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        // Show success toast and info toast after successful message
        toast.update(toastId, {
          render: "Message sent successfully!",
          type: "success",
          autoClose: 5000,
        });
        toast.info(
          `Hello ${formData.name}, I will contact you soon. Please check your email.`,
        );
        // Reset form data after successful submission
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        // Show error if the response is not ok
        toast.update(toastId, {
          render: "Failed to send the message. Please try again.",
          type: "error",
          autoClose: 5000,
        });
        // Reset form data after successful submission
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (err: unknown) {
      // Show error if an exception occurs
      if (err instanceof Error) {
        toast.update(toastId, {
          render: `Error: ${err.message}`,
          type: "error",
          autoClose: 5000,
        });
      } else {
        toast.update(toastId, {
          render: "Something went wrong. Please try again.",
          type: "error",
          autoClose: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="container text-[12px] mt-28 p-16 "
      data-aos="zoom-in-up"
    >
      <div className="">
        <div className="w-full lg:w-[90%] m-auto rounded-lg relative  bg-[#1b1f24] backdrop-blur-sm shadow-[10px_10px_11px_-4px_rgba(0,0,0,0.91),_-10px_-10px_11px_-4px_rgba(0,0,0,0.91),_-10px_10px_11px_-4px_rgba(0,0,0,0.91),_10px_-10px_11px_-4px_rgba(0,0,0,0.91)]">
          <BorderBeam
            size={200}
            duration={3}
            colorFrom="#A656F7"
            colorTo="#3C81F6"
            className="opacity-70"
          />
          {/* header  */}

          <div className="flex justify-between items-center px-[20px] py-[10px]  bg-[rgba(0,0,0,0.349)] rounded-tl-[15px] rounded-tr-[15px]">
            {/* left */}
            <div>
              <motion.div
                className="flex items-center gap-1.5 sm:gap-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {[
                  { color: "#ed1c6f" }, // Google Blue
                  { color: "#e8e925" }, // Google Red
                  { color: "#74c54f" }, // Google Yellow
                ].map((dot, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-xl"
                    style={{ backgroundColor: dot.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.5,
                      transition: { duration: 0.2 },
                    }}
                  />
                ))}
              </motion.div>
            </div>
            {/* right */}
            <div>
              <div className="inline-block w-[7px] h-[7px] ml-[3px] rounded-[8px] bg-[#d1cdcd]"></div>
              <div className="inline-block w-[7px] h-[7px] ml-[3px] rounded-[8px] bg-[#d1cdcd]"></div>
              <div className="inline-block w-[7px] h-[7px] ml-[3px] rounded-[8px] bg-[#d1cdcd]"></div>
            </div>
          </div>

          {/* main body */}

          <div className="flex p-4 gap-3 justify-between">
            <div className="flex flex-col mt-7 ml-6 mr-auto w-[40%]">
              <div className={styles.body_title}>
                <span>CONTACT</span>
                <span>ME</span>
              </div>
            </div>

            {/* -------------   body Right section------------------ */}

            <div className=" w-[70%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-[#1b1f24] backdrop-blur-sm  p-6 md:px-8 md:pt-8 md:pb-5 group"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="relative group/name">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-[15px] rounded-md bg-[rgba(0,0,0,0.349)] text-white border border-white/15 focus:outline-none placeholder:text-gray-400 transition-all duration-300"
                      />
                      <span className="group-hover/name:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                      <span className="group-hover/name:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    </div>

                    {/* phonnumber */}
                    <div className="relative group/name">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-[15px] rounded-md bg-[rgba(0,0,0,0.349)] text-white border border-white/15 focus:outline-none placeholder:text-gray-400 transition-all duration-300"
                      />
                      <span className="group-hover/name:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                      <span className="group-hover/name:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative group/email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-[15px] rounded-md bg-[rgba(0,0,0,0.349)] text-white border border-white/15 focus:outline-none placeholder:text-gray-400 transition-all duration-300"
                    />
                    <span className="group-hover/email:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                    <span className="group-hover/email:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  </div>

                  {/* Message */}
                  <div className="relative group/message">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-1 text-[14px] rounded-md  bg-[rgba(0,0,0,0.349)] text-white/70 border border-white/15 focus:outline-none placeholder:text-gray-400 resize-none transition-all duration-300"
                    />
                    <span className="group-hover/message:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                    <span className="group-hover/message:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-white/15 text-white text-[16px] font-bold py-2 rounded-md hover:text-teal-300 hover:bg-[rgba(0,0,0,0.349)] transition-opacity"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.contact_bottom_inspired}>
          <h3>Inspired By</h3>
          <a href="https://www.facebook.com/tarekmonowar53" target="_blank">
            <i className="fa-brands fa-facebook"></i> Monowar
          </a>
        </div>
      </div>
    </section>
  );
}
