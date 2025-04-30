
import { TvMinimal } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <TvMinimal className="w-6 h-6 text-iptv-purple" />
              <span className="text-lg font-bold gradient-text">StreamView</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your premium IPTV service provider with thousands of channels and VOD content.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-iptv-purple">Home</Link></li>
              <li><Link to="/channels" className="text-gray-400 hover:text-iptv-purple">Channels</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-iptv-purple">Pricing</Link></li>
              <li><Link to="/live" className="text-gray-400 hover:text-iptv-purple">Live TV</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-400 hover:text-iptv-purple">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-iptv-purple">Contact Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-iptv-purple">How It Works</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-iptv-purple">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-400 hover:text-iptv-purple">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-iptv-purple">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-400 hover:text-iptv-purple">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} StreamView IPTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
