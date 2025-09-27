// src/components/Footer.jsx
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTiktok, 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcPaypal, 
  FaCcAmex 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Get In Touch */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Get In Touch</h2>
          <p className="text-sm mb-4">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et
            dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +012 345 67890
            </li>
          </ul>
        </div>

        {/* Quick Shop */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Shop</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "Our Shop", "Shopping Cart", "Contact Us"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white">&gt; {item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">My Account</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "Our Shop", "Shopping Cart", "Contact Us"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white">&gt; {item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Duo stet tempor ipsum sit amet magna ipsum tempor est
          </p>
          <div className="flex mb-4">
           <input type="text "  placeholder="enter your email" className="bg-white border-0 text-black px-1 w-75 hover:bg-gray-50"/>
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700">
              Register
            </button>
          </div>
          <div>
            <p className="mb-2">Follow Us</p>
              <div className="flex gap-3">
            {[FaGithub, FaLinkedin, FaTiktok].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Icon />
              </a>
            ))}
          </div>
          </div>
          
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          © <span className="text-blue-400">Domain</span>. All Rights Reserved. 
          Designed by <span className="text-blue-400">Rok Rak Developer</span> 
          Distributed By <span className="text-blue-400">Etec</span>
        </p>
        <div className="flex gap-3 mt-4 md:mt-0 text-2xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmex />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
