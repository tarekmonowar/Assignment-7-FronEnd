"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import dynamic from "next/dynamic";

const Up = dynamic(
  () => import("@/components/Features/GetStartedCard/GetStartedCard"),
  { ssr: false },
);
const Footer = dynamic(() => import("@/components/Features/Footer/Footer"), {
  ssr: false,
});

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 157 559 5877",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tarekmonowar2332@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sylhet,Bangladesh",
  },
];

//!main

export default function Contact() {
  //main content

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);

  // Form data handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  // Form submit handler
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const fullName = `${formData.firstname} ${formData.lastname}`;

    const payload = {
      name: fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
      service: formData.service,
    };

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
          body: JSON.stringify(payload),
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
          `Hello ${formData.firstname}, I will contact you soon. Please Check your Email.`,
        );
        // Reset form data after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          message: "",
          service: "",
        });
      } else {
        toast.error("Failed to send message.Please try again.");
      }
    } catch (err: unknown) {
      // Check if 'err' is an instance of Error (standard JS error object)
      if (err instanceof Error) {
        toast.error(`Error: ${err.message}`);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto py-6 mt-32" data-aos="zoom-in">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-14 bg-white/5 rounded-big border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-4xl text-accent">Lets Work together.</h3>
              <p className="text-white/60 mb-4 text-sm text-justify ">
                Please fill out the form below to discuss your project, and
                I&apos;ll get back to you as soon as possible. Let&apos;s
                collaborate and create something amazing!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  type="firstname"
                  placeholder="First Name"
                  className="placeholder:text-sm placeholder:text-white/50"
                  onChange={handleChange}
                  required
                ></Input>
                <Input
                  name="lastname"
                  value={formData.lastname}
                  type="lastname"
                  placeholder="Last Name"
                  className="placeholder:text-sm placeholder:text-white/50"
                  onChange={handleChange}
                ></Input>
                <Input
                  name="email"
                  value={formData.email}
                  type="email"
                  placeholder="Email Address"
                  className="placeholder:text-sm placeholder:text-white/50"
                  onChange={handleChange}
                  required
                ></Input>
                {/* <Input type="phone" placeholder="Phone"></Input> */}
                <Input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  type="tel"
                  placeholder="Phone Number (whatsapp)"
                  className="placeholder:text-sm placeholder:text-white/50"
                  pattern="[0-9+]*"
                  inputMode="tel"
                  onChange={handleChange}
                />
              </div>

              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Devolopment">
                      Custom Website Devolopment
                    </SelectItem>
                    <SelectItem value="E-commerce Website Devolopment">
                      E-commerce Website Devolopment
                    </SelectItem>
                    <SelectItem value="FrontEnd in React and Next.js">
                      FrontEnd in React and Next.js
                    </SelectItem>
                    <SelectItem value="BackEnd & API">
                      BackEnd & API{" "}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[100px] "
                placeholder="type your message here..."
                onChange={handleChange}
                value={formData.message}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="max-w-36 px-[10px] py-[8px] bg-accent text-black border-2 border-accent rounded-[8px] text-[16px] font-semibold transition-all duration-500 ease-in-out hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_#13bbff]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className=" flex flex-col gap-10 ">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center  ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Up />
      </div>
      <Footer />
    </>
  );
}
