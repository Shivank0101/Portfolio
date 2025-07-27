import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    try {
      await axios.post("https://getform.io/f/agddwepb", userInfo);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Contact Me</h1>
      <p className="text-purple-300 mb-8">Please fill out the form below to get in touch.</p>

      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-[450px] bg-white/10 backdrop-blur-md border border-purple-500 shadow-xl rounded-2xl p-6 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-lime-300">Send Your Message</h2>

          <div className="flex flex-col">
            <label className="text-purple-200 mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              className="bg-transparent border border-lime-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
              placeholder="Your full name"
              type="text"
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-purple-200 mb-1">Email</label>
            <input
              {...register("email", { required: true })}
              className="bg-transparent border border-lime-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
              placeholder="your@email.com"
              type="email"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-purple-200 mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="bg-transparent border border-lime-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400 h-28 resize-none"
              placeholder="Type your message..."
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-semibold py-2 rounded-xl hover:bg-purple-500 hover:text-white transition duration-300 cursor-pointer"
          >
            Send ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
