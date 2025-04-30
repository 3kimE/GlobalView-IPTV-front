
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Film, Play, TvMinimal } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const featuredMovies = [
    {
      id: 101,
      title: "Avengers: Endgame",
      image: "https://placehold.co/300x169/8B5CF6/FFFFFF?text=Endgame"
    },
    {
      id: 102,
      title: "Joker",
      image: "https://placehold.co/300x169/8B5CF6/FFFFFF?text=Joker"
    },
    {
      id: 103,
      title: "Parasite",
      image: "https://placehold.co/300x169/8B5CF6/FFFFFF?text=Parasite"
    }
  ];

  return (
    <section className="py-16 bg-iptv-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">Featured Movies</h2>
          <Link to="/movies">
            <Button variant="outline" className="border-iptv-purple text-iptv-purple">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="card-gradient rounded-lg overflow-hidden hover-scale">
              <div className="relative">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-iptv-purple/90 hover:bg-iptv-purple"
                  >
                    <Play size={24} className="text-white" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/movies">
            <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
              <Film className="mr-2" /> Explore All Movies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const LiveSports = () => {
  const liveEvent = {
    title: "UEFA Champions League",
    subtitle: "Quarter Finals",
    image: "https://placehold.co/1000x400/8B5CF6/FFFFFF?text=UEFA+Champions+League"
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">Live Sports</h2>
          <Link to="/sports">
            <Button variant="outline" className="border-iptv-purple text-iptv-purple">
              View Schedule
            </Button>
          </Link>
        </div>
        
        <div className="card-gradient rounded-lg overflow-hidden">
          <div className="relative">
            <img 
              src={liveEvent.image} 
              alt={liveEvent.title}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center mb-2">
                  <span className="animate-pulse mr-2 w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-white text-sm font-medium">LIVE NOW</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{liveEvent.title}</h3>
                <p className="text-gray-300 mb-4">{liveEvent.subtitle}</p>
                <Link to="/sports">
                  <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
                    <Play className="mr-2" /> Watch Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/sports">
            <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
              <TvMinimal className="mr-2" /> Browse All Sports
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <FeaturedMovies />
        <LiveSports />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
