
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/card";
import { Film, Play } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: "Fight Night",
      subtitle: "The Million Dollar Heist",
      image: "https://assets-prd.ignimgs.com/2022/04/01/fightnight-1648828230312.jpg",
      background: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      category: "Drama",
      year: "2023"
    },
    {
      id: 2,
      title: "Fly Me to the Moon",
      image: "https://cdn.moviefone.com/admin-uploads/posters/flymemoon-movie-poster_1713891737.jpg?d=360x540&q=60",
      background: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1000&q=80",
      category: "Romance",
      year: "2023"
    },
    {
      id: 3,
      title: "Hellboy",
      subtitle: "The Crooked Man",
      image: "https://m.media-amazon.com/images/M/MV5BYzMxYzJkYzktZjRmMy00MGJkLThkMTQtZTBlNjMxMDMxZTQ1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      category: "Action",
      year: "2023"
    },
    {
      id: 4,
      title: "House of the Dragon",
      image: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      background: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80",
      category: "Fantasy",
      year: "2022"
    },
    {
      id: 5,
      title: "Joker",
      subtitle: "Folie à Deux",
      image: "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNGZjYi00YjA5LTk3ODctNzE0NjQ2NjM5OTU0XkEyXkFqcGdeQXVyNjU2MDUzMjY._V1_FMjpg_UX1000_.jpg",
      background: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1000&q=80",
      category: "Drama",
      year: "2024"
    },
    {
      id: 6,
      title: "Dune: Part Two",
      image: "https://m.media-amazon.com/images/M/MV5BODk0MzE4MTgtZmNlZS00YzM1LWJkOTQtYTc5MmRlOTZlZDRiXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1000_.jpg",
      background: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1000&q=80",
      category: "Sci-Fi",
      year: "2024"
    }
  ];

  const carouselRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="min-h-screen flex flex-col bg-black">
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

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Trending Now</h2>
            <Carousel
              ref={carouselRef}
              plugins={[autoplayPlugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {movies.map((movie) => (
                  <CarouselItem key={movie.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="card-gradient rounded-lg overflow-hidden hover-scale">
                      <div className="relative aspect-[2/3]">
                        <img 
                          src={movie.image} 
                          alt={movie.title} 
                          className="w-full h-full object-cover rounded-lg" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <Button 
                            size="icon" 
                            className="w-12 h-12 rounded-full bg-iptv-purple/90 hover:bg-iptv-purple"
                          >
                            <Play size={24} className="text-white" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-md font-semibold mb-1 truncate">{movie.title}</h3>
                        {movie.subtitle && (
                          <h4 className="text-sm text-gray-400 truncate">{movie.subtitle}</h4>
                        )}
                        <div className="flex items-center justify-between text-sm text-gray-400 mt-1">
                          <span>{movie.category}</span>
                          <span>{movie.year}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-white">All Movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="card-gradient rounded-lg overflow-hidden hover-scale">
                <div className="relative aspect-[2/3]">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <Button 
                      size="icon" 
                      className="w-12 h-12 rounded-full bg-iptv-purple/90 hover:bg-iptv-purple"
                    >
                      <Play size={24} className="text-white" />
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-md font-semibold mb-1 truncate">{movie.title}</h3>
                  {movie.subtitle && (
                    <h4 className="text-sm text-gray-400 truncate">{movie.subtitle}</h4>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-400 mt-1">
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
