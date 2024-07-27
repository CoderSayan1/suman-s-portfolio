import React, { useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_forv78p",  
      "template_og6emds",  
      form.current, {
        publicKey: '7PNu72mzNpTlCGVeB',
      }
    )
    .then((response) => {
      toast.success("Email sent successfully");
      // console.log(response);
      e.target.reset();
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="md:px-20 px-10 py-3 md:py-6 flex md:flex-row flex-col items-center md:h-screen h-full md:my-0 my-12" id="contact">
      <div className="md:w-1/2 w-full md:p-4 p-2">
        <h1 className="md:text-4xl text-2xl md:text-left text-center  font-bold mb-4">
          <span className="underline">Contact</span>{" "}
          <span className="text-cyan-500">Me</span>
        </h1>
        <p className="md:text-xl text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          expedita esse? Ut dolores corrupti obcaecati. Error necessitatibus
          molestias et non molestiae omnis quod.
        </p>
        <div className="flex my-8 gap-x-6 text-xl">
          <a href="https://www.linkedin.com/in/suman-maji" target="_blank" className='button-design transition duration-300 rounded-full border border-sky-500 w-10 h-10 inline-flex justify-center items-center border-solid bg-transparent text-[#0ef]'><FaLinkedin /></a>
          <a href="" target="_blank" className='button-design transition duration-300 rounded-full border border-sky-500 w-10 h-10 inline-flex justify-center items-center border-solid bg-transparent text-[#0ef]'><FaSquareXTwitter /></a>
          <a href="mailto:sumanmaji241@gmail.com" target="_blank" className='button-design transition duration-300 rounded-full border border-sky-500 w-10 h-10 inline-flex justify-center items-center border-solid bg-transparent text-[#0ef]'><MdEmail /></a>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:p-6 p-3 rounded-lg shadow-xl bg-transparent border border-slate-800">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-300" htmlFor="name">Name</label>
          <input type="text" name="from_name" id="name" placeholder="Enter your name" required 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-300" htmlFor="email">Email</label>
          <input type="email" name="from_email" id="email" placeholder="Enter your email" required 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-300" htmlFor="message">Message</label>
          <textarea id="message" name="message" cols="40" rows="10" placeholder="Enter your message" required 
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        </div>
        <div className="flex justify-end">
          <input type="submit" value="Send" 
                className="transition duration-300 bg-cyan-500 font-semibold text-xl px-4 py-2 rounded inline-block button-design text-black"/>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;
