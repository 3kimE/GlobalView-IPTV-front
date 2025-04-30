
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20 pb-10 md:pt-32 md:pb-20">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 w-3/4 h-3/4 -translate-x-1/2 bg-iptv-purple/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Watch Your Favorite TV Channels <span className="gradient-text">Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Access thousands of live TV channels, movies, and shows on any device. 
            High quality streams, no buffering, no contracts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple text-white px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2">
              <Play size={16} /> Watch Demo
            </Button>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400 font-medium">Trusted by over 50,000+ users worldwide</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-iptv-purple">10,000+</p>
                <p className="text-gray-400 text-sm">Channels</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-iptv-purple">HD & 4K</p>
                <p className="text-gray-400 text-sm">Quality</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-iptv-purple">24/7</p>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
