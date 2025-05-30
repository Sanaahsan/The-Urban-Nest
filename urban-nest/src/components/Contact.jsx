import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact=()=>{
    // imported from Web3Forms
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "74c9b395-a8b3-4b30-8cfe-209039892c50");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
    //   toast for beautiful error message
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
        
      } else {
        console.log("Error", data);
       toast.error(data.message);
        setResult("");
      }
    };
  

    return(
        <motion.div 
       initial={{opacity:0,x:-200}}
       transition={{duration:1}}
       whileInView={{opacity:1,x:0}}
       viewport={{once:true}}
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span></h1>
        <p className="text-center text-[#212529] mb-12 max-w-80 mx-auto">Ready to Make a Move? Let's Build Your Future Together</p>

      

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-[#212529] pt-8">
  {/* FLEX ROW ON MEDIUM SCREENS */}
  <div className="flex flex-col md:flex-row md:space-x-4">
    {/* NAME */}
    <div className="w-full md:w-1/2 text-left">
      <label className="block mb-2">Your Name</label>
      <input
        className="w-full border border-gray-350 rounded py-3 px-4 placeholder-gray-600"
        type="text"
        name="Name"
        placeholder="Your Name"
        required
      />
    </div>

    {/* EMAIL */}
    <div className="w-full md:w-1/2 text-left mt-4 md:mt-0">
      <label className="block mb-2">Your Email</label>
      <input
        className="w-full border border-gray-350 rounded py-3 px-4 placeholder-gray-600"
        type="email"
        name="Email"
        placeholder="Your Email "
        required
      />
    </div>
  </div>

  {/* MESSAGE */}
  <div className="my-6 text-left">
    <label className="block mb-2">Message</label>
    <textarea
      className="w-full border border-gray-350 rounded py-3 px-4 h-48 resize-none placeholder-gray-600"
      name="Message"
      placeholder="Message"
      required
    ></textarea>
  </div>

  {/* BUTTON */}
  <button className="bg-[#212529] text-[#f8f9fa] py-2 px-12 mb-10 rounded">
    {result ? result : "Send Message"}
  </button>
</form>


        </motion.div>
    )
}

export default Contact;