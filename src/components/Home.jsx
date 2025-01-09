import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home  ()  {
    return (
      <>
          <div  name="Home"
          className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
              <div className='flex flex-col md:flex-row'>
                  <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                          <span className='text-2xl'>Welcome In My Feed</span>       
                          <div className='flex space-x-1 text-2xl md:text-4xl'>
                              <h1>Hello, I'm a</h1>
                              
                              <ReactTyped
                                  className='text-purple-800 font-bold'
  
                                  strings={["Developer", "Programmer", "Coder"]}
                                  typeSpeed={40}
                                  backSpeed={50}
                                  loop={true}
                              />
                          </div>
                          <br></br>
                          <p className="text-sm md:text-md text-justify">
                          Hi, I'm Shivank, a passionate web developer with a flair for creating intuitive and visually appealing websites.
                           Currently pursuing my BTech in IT (Class of 2026), I have 2+ years of experience in front-end development, specializing in HTML, CSS, JavaScript, and modern frameworks like React. With a strong problem-solving mindset and a knack for bringing 
                          creative ideas to life, I aim to craft seamless user experiences. 
                          Let's build something 
                          amazing together!
                          </p>
                          <br />
                          {/* Social media Icons */}
                          <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                              <div className='space-y-2'>
                                  <h1 className='font-bold text-center'>Available on</h1>
                                      <ul className='flex space-x-5 '>
                                          <a href="https://www.linkedin.com/in/shivank-shukla-a0a5a924b/" target='_blank'> <li className='cursor-pointer text-4xl hover:text-blue-500'><FaLinkedin /> </li> </a>
                                          <a href="https://github.com/Shivank0101" target='_blank'> <li className='cursor-pointer text-4xl hover:text-gray-500'> <FaGithub /> </li></a>
                                          <a href="https://www.instagram.com/shivank_shukla_s_s/" target='_blank'> <li className='cursor-pointer text-4xl hover:text-pink-500' ><FaInstagram /> </li></a>
                                      </ul>
                              </div>
                          
                              <div className='space-y-2'>
                                  <h1 className='font-bold text-center'>Currently working on</h1>
                                  <div className='flex space-x-5  '>
                                  <SiMongodb className='text-xl md:text-4xl hover:scale-150 duration-200 rounded-full border-[2px]' />
                                  <SiExpress className='text-xl md:text-4xl hover:scale-150 duration-200 rounded-full border-[2px]' />
                                  <FaReact  className='text-xl md:text-4xl hover:scale-150 duration-200 rounded-full border-[2px]'/>
                                  </div>
                              </div>
                          </div>
                  </div>
                  <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                      <img className='rounded-full md:w-[450px] md:h-[450px]' src="/photo.jpg"  />
                  </div>
              </div>
          </div>
      </>
    )
  }

export default Home