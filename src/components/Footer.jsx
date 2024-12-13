
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleConnect = () => {
        const phoneNumber = "917999356540";
        const message = "Hello! I'd like to connect with you.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      };

  return (
    <footer className="mt-32 border-t border-[#f5f5f5]/10 pt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="opacity-70 mb-8">Ready to turn ideas into reality? Let's create something amazing together.</p>
        <button type='button' onClick={handleConnect} className="flex items-center gap-2 bg-[#f5f5f5] text-[#121212] px-6 py-3 rounded-full hover:scale-105 transition-transform">
          Contact Me <HiArrowLongRight />
        </button>
      </div>
      
      <div>
        <h3 className="text-xl mb-6">Social Links</h3>
        <div className="flex gap-4">
          <Link to="https://github.com/yogendra09" target='_blank' className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/yogendrasingh09/" target='_blank' className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
            <FaLinkedinIn />
          </Link>
          <Link to="https://github.com/yogendra09" className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
            <FaInstagram />
          </Link>
          <Link to="https://github.com/yogendra09" className="p-3 border border-[#f5f5f5]/20 rounded-full hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors">
            <FaTelegramPlane />
          </Link>
        </div>
      </div>

      <div className="md:col-span-2">
        <h3 className="text-xl mb-6">Newsletter</h3>
        <div className="flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="bg-transparent border border-[#f5f5f5]/20 rounded-full px-6 py-3 flex-1 focus:outline-none focus:border-[#f5f5f5]"
          />
          <button className="bg-[#f5f5f5] text-[#121212] px-6 py-3 rounded-full hover:scale-105 transition-transform">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div className="mt-16 pt-8 border-t border-[#f5f5f5]/10 text-center opacity-60">
      <p>© 2024 Yogendra Singh. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer