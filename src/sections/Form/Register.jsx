// import React from 'react'
// import Navbar from '../../components/Navbar'
// import { Link } from 'react-router-dom'
// import { motion } from "framer-motion";



// const Register = () => {
//   return (<>
//     <Navbar/>
    
//     <div className='bg-[#080513]  max-w-[100vw] overflow-x-hidden font-[Urbanist] pt-[130px] md:pt-[150px] overflow-y-scroll  h-screen mx-auto px-4 '>
//       <h1 className='text-center font-extrabold  text-[32px] sm:text-[42px] md:text-[52px] text-green-600 mt-3 '>Welcome to the kYC  centre</h1>
//       <motion.div
//             initial={{ y: "50%", opacity: 0 }}
//             // viewport={{ once :true,}}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//             whileInView={{ y: 0, opacity: 1 }}
//             className=""
//           >
//       <form className='gradient-border mb-5 w-auto   p-3 md:w-[28rem] mx-auto rounded-md mt-5'>
//       <h1 className='text-[36px]  gradient-text font-extrabold text-center'>KYC Form</h1>
//       <h1 className='text-white text-[20px] mt-4'>First Name</h1>
//       <input required type="text" placeholder='First Name*' className=' m-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
//       <h1 className='text-white text-[20px] mt-4'>Last Name</h1>
//       <input required type="text" placeholder='Last Name*' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
//       <h1 className='text-white text-[20px] mt-4'>Your Email</h1>
//       <input required type="email" placeholder='abc@gmail.com' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
//       <h1 className='text-white text-[20px] mt-4'>Your Identity No</h1>
//       <input required type="number" placeholder='xxxxx-xxxxx-x' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
//        <Link to="/app"> <button type='submit' className='btn-bg p-2 text-white text-center rounded-md active:shadow-lg active:shadow-green-800 hover:scale-105 duration-700 justify-center flex mt-4 w-[120px] mx-auto'>Submit</button></Link>
//       </form>
//       </motion.div>
//     </div>
//     </>
//   )
// }

// export default Register
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// import { google } from 'googleapis';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    identityNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxpDViKNZNEskfpdieu_gOytcgdGOKY2lUy8ynviUIrCLKH_cmYlxkCJ4Ab8JEzc3M4/exec'
      const form = document.forms['submit-to-google-sheet']
      
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })
        console.log(formData)
    } catch (error) {
      console.error('Error appending data:', error);
    }
  };

  return (
    <>
      <Navbar/>
      
      <div className='bg-[#080513]  max-w-[100vw] overflow-x-hidden font-[Urbanist] pt-[130px] md:pt-[150px] overflow-y-scroll  h-screen mx-auto px-4 '>
        <h1 className='text-center font-extrabold  text-[32px] sm:text-[42px] md:text-[52px] text-green-600 mt-3 '>Welcome to the kYC  centre</h1>
        <motion.div
              initial={{ y: "50%", opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              whileInView={{ y: 0, opacity: 1 }}
              className=""
            >
        <form onSubmit={handleSubmit} name='submit-to-google-sheet' className='gradient-border mb-5 w-auto   p-3 md:w-[28rem] mx-auto rounded-md mt-5'>
        <h1 className='text-[36px]  gradient-text font-extrabold text-center'>KYC Form</h1>
        <h1 className='text-white text-[20px] mt-4'>First Name</h1>
        <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First Name*' className=' m-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
        <h1 className='text-white text-[20px] mt-4'>Last Name</h1>
        <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name*' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
        <h1 className='text-white text-[20px] mt-4'>Your Email</h1>
        <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder='abc@gmail.com' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
        <h1 className='text-white text-[20px] mt-4'>Your Identity No</h1>
        <input required type="text" name="identityNo" value={formData.identityNo} onChange={handleChange} placeholder='xxxxx-xxxxx-x' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
         <button type='submit' className='btn-bg p-2 text-white text-center rounded-md active:shadow-lg active:shadow-green-800 hover:scale-105 duration-700 justify-center flex mt-4 w-[120px] mx-auto'>Submit</button>
        </form>
        </motion.div>
      </div>
    </>
  );
}

export default Register;

