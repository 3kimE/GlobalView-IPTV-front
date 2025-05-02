
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, TvMinimal } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center py-16">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-300 text-lg mb-8">
            Thank you for subscribing to StreamMaster. Your account has been activated and you now have access to all premium content.
          </p>
          
          <div className="bg-iptv-dark border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your subscription details</h2>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400">Plan</span>
              <span>Premium</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400">Start Date</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Next Billing</span>
              <span>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple">
                Go to Homepage
              </Button>
            </Link>
            <Link to="/channels">
              <Button size="lg" variant="outline" className="border-gray-700">
                <TvMinimal className="mr-2 h-5 w-5" /> Browse Channels
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
