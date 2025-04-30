import React,{useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import {motion} from 'framer-motion';
function Contact (){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Form is submitted successfully");
    console.log('Form data submitted:', formData);
  };
  return (
    <motion.div id="contact" className="bg-stone-800 text-5xl font-bold text-red-500 text-center w-screen-dynamic h-screen-dynamic">
      <h1>Contact With Me</h1>
      <motion.div className="flex lg:flex-row flex-col items-center justify-evenly py-10">
        <motion.div initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }} transition={{duration:0.5}}>
        <img src="/portfolioimg.png"/>
        </motion.div>
        <motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }} transition={{duration:0.5}}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 bg-slate-900 md:wd-[80%] shadow-shadowOne text-gray-400 space-y-4 p-4">
      <motion.div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </motion.div>
      <motion.div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </motion.div>
      <motion.div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        ></textarea>
      </motion.div>
      <button
        type="submit"
        className="px-4 py-4 w-[400px] border border-hidden rounded-md bg-black text-sm font-normal text-white"
      >
        Submit
      </button>
    </form>
    </motion.div>
      </motion.div>
      <ToastContainer/>
    </motion.div>
  )
}

export default Contact
