
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TvMinimal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <div className="mb-6 flex justify-center">
            <div className="bg-iptv-purple/20 p-6 rounded-full">
              <TvMinimal className="w-16 h-16 text-iptv-purple" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            Oops! The channel you're looking for doesn't exist
          </p>
          <Button 
            size="lg" 
            className="bg-iptv-purple hover:bg-iptv-dark-purple"
            asChild
          >
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
