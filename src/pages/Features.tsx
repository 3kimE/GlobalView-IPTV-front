
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Tv, Zap, Clock, Globe, Shield, Smartphone, Monitor, Tablet, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-iptv-dark border border-gray-800 hover-scale card-gradient">
    <CardHeader>
      <div className="mb-4 text-iptv-purple">{icon}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-400">
      <p>{description}</p>
    </CardContent>
  </Card>
);

const DeviceCard = ({ icon, name }) => (
  <Card className="bg-iptv-dark border border-gray-800 hover-scale text-center p-6">
    <div className="flex justify-center mb-4 text-iptv-purple">{icon}</div>
    <h3 className="text-lg font-medium">{name}</h3>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: <Tv size={36} />,
      title: "4K & Full HD Streaming",
      description: "Enjoy crystal-clear picture quality with our 4K and Full HD streams. Experience your favorite content with stunning detail."
    },
    {
      icon: <Zap size={36} />,
      title: "No Buffering",
      description: "Say goodbye to interruptions. Our high-speed servers ensure smooth streaming with minimal buffering, even during peak hours."
    },
    {
      icon: <Clock size={36} />,
      title: "Instant Activation",
      description: "Get access immediately after purchase. No waiting periods – start watching your favorite channels within minutes."
    },
    {
      icon: <Globe size={36} />,
      title: "Global Content",
      description: "Access television from around the world with our diverse channel lineup covering sports, news, entertainment, and more."
    },
    {
      icon: <Shield size={36} />,
      title: "Secure Connection",
      description: "Your privacy matters. We use advanced encryption to protect your data and ensure a secure streaming experience."
    },
    {
      icon: <Clock size={36} />,
      title: "24/7 Support",
      description: "Our dedicated customer support team is available around the clock to assist you with any questions or technical issues."
    },
  ];

  const devices = [
    { icon: <Smartphone size={32} />, name: "Smartphones" },
    { icon: <Tablet size={32} />, name: "Tablets" },
    { icon: <Laptop size={32} />, name: "Computers" },
    { icon: <Tv size={32} />, name: "Smart TVs" },
    { icon: <Monitor size={32} />, name: "MAG Boxes" },
    { icon: <Tv size={32} />, name: "Amazon Fire" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20 relative">
          {/* Background Effect */}
          <div className="absolute top-0 left-1/2 w-3/4 h-3/4 -translate-x-1/2 bg-iptv-purple/20 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Why GlobalView IPTV?</h1>
              <p className="text-gray-300">
                Experience television like never before with our premium IPTV service.
                Discover why thousands of customers choose GlobalView IPTV for their entertainment needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-iptv-purple/20 to-iptv-dark-purple/20 rounded-xl p-8 border border-iptv-purple/30 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Unmatched Channel Selection
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Access over 10,000 channels from around the world, including premium sports, movies, 
                    news, and entertainment. Never miss your favorite shows again with our extensive library 
                    of content.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-iptv-purple rounded-full mr-2"></span>
                      <span>International channels from 60+ countries</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-iptv-purple rounded-full mr-2"></span>
                      <span>Premium sports packages included</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-iptv-purple rounded-full mr-2"></span>
                      <span>Movies and TV shows on demand</span>
                    </li>
                  </ul>
                  <Link to="/channels">
                    <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
                      View All Channels <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src="https://placehold.co/800x600/262626/FFFFFF?text=Channel+Selection" 
                    alt="Channel Selection" 
                    className="rounded-lg border border-gray-700 shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Works On All Your Devices</h2>
              <p className="text-gray-300">
                GlobalView IPTV is compatible with a wide range of devices. Watch your favorite content
                anywhere, anytime, on any screen.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16">
              {devices.map((device, index) => (
                <DeviceCard key={index} icon={device.icon} name={device.name} />
              ))}
            </div>
            
            <div className="text-center">
              <div className="max-w-3xl mx-auto mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-8">
                  Join thousands of satisfied customers and experience the future of television today.
                  Choose the plan that's right for you and start streaming in minutes.
                </p>
              </div>
              
              <Link to="/pricing">
                <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple">
                  Start Watching Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
