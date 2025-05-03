
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Film, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: "The Matrix Resurrections",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Matrix",
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Matrix+Background",
      category: "Sci-Fi",
      year: "2021"
    },
    {
      id: 2,
      title: "Dune",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Dune",
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Dune+Background",
      category: "Sci-Fi",
      year: "2021"
    },
    {
      id: 3,
      title: "No Time to Die",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Bond",
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Bond+Background",
      category: "Action",
      year: "2021"
    },
    {
      id: 4,
      title: "Eternals",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Eternals",
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Eternals+Background",
      category: "Action",
      year: "2021"
    },
    {
      id: 5,
      title: "Shang-Chi",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Shang-Chi",
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Shang+Chi+Background",
      category: "Action",
      year: "2021"
    },
    {
      id: 6,
      title: "Black Widow",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Black+Widow",
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Black+Widow+Background",
      category: "Action",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4">
        <div className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Movies Library</h1>
            <div className="flex gap-2">
              <Button variant="outline">New Releases</Button>
              <Button variant="outline">Popular</Button>
              <Button variant="outline">Categories</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="card-gradient rounded-lg overflow-hidden hover-scale">
                <div className="relative">
                  <div 
                    className="absolute inset-0 z-0 opacity-60"
                    style={{
                      backgroundImage: `url(${movie.background})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <img src={movie.image} alt={movie.title} className="w-full h-auto object-cover relative z-10" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <Button 
                      size="icon" 
                      className="w-12 h-12 rounded-full bg-iptv-purple/90 hover:bg-iptv-purple"
                    >
                      <Play size={24} className="text-white" />
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-t from-black/80 to-transparent relative z-10">
                  <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{movie.category}</span>
                    <span>{movie.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
              Load More Movies
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Movies;
