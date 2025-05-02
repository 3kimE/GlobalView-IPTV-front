
import { Link } from "react-router-dom";
import { TvMinimal, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-iptv-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <TvMinimal className="w-8 h-8 text-iptv-purple" />
              <span className="text-xl font-bold gradient-text">GlobalView IPTV</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Stream unlimited channels in HD & 4K quality. The best IPTV service provider since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-iptv-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iptv-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iptv-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iptv-purple">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-iptv-purple">Home</Link>
              </li>
              <li>
                <Link to="/channels" className="text-gray-400 hover:text-iptv-purple">Channels</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-iptv-purple">Pricing</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-iptv-purple">Features</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-400 hover:text-iptv-purple">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-iptv-purple">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-iptv-purple">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-iptv-purple">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-iptv-purple">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-iptv-purple" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-iptv-purple" />
                <span>support@globalviewiptv.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GlobalView IPTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
