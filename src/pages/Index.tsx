
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Film, Play, TvMinimal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturedMovies = () => {
  const featuredMovies = [
    {
      id: 101,
      title: "Fight Night",
      subtitle: "The Million Dollar Heist",
      image: "https://assets-prd.ignimgs.com/2022/04/01/fightnight-1648828230312.jpg"
    },
    {
      id: 102,
      title: "Fly Me to the Moon",
      subtitle: "",
      image: "https://cdn.moviefone.com/admin-uploads/posters/flymemoon-movie-poster_1713891737.jpg?d=360x540&q=60"
    },
    {
      id: 103,
      title: "Hellboy",
      subtitle: "The Crooked Man",
      image: "https://m.media-amazon.com/images/M/MV5BYzMxYzJkYzktZjRmMy00MGJkLThkMTQtZTBlNjMxMDMxZTQ1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg"
    },
    {
      id: 104,
      title: "House of the Dragon",
      subtitle: "",
      image: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
    },
    {
      id: 105,
      title: "Joker",
      subtitle: "Folie à Deux",
      image: "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNGZjYi00YjA5LTk3ODctNzE0NjQ2NjM5OTU0XkEyXkFqcGdeQXVyNjU2MDUzMjY._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 106,
      title: "Dune: Part Two",
      subtitle: "",
      image: "https://m.media-amazon.com/images/M/MV5BODk0MzE4MTgtZmNlZS00YzM1LWJkOTQtYTc5MmRlOTZlZDRiXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1000_.jpg"
    }
  ];

  const carouselRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Movies & Series</h2>
          <Link to="/movies">
            <Button variant="outline" className="border-iptv-purple text-iptv-purple">
              View All
            </Button>
          </Link>
        </div>
        
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
            {featuredMovies.map((movie) => (
              <CarouselItem key={movie.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="card-gradient rounded-lg overflow-hidden hover-scale">
                  <div className="relative aspect-[2/3]">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover rounded-lg"
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
                  <div className="p-3">
                    <h3 className="text-md font-semibold">{movie.title}</h3>
                    {movie.subtitle && <p className="text-sm text-gray-400">{movie.subtitle}</p>}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
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
  const liveEvents = [
    {
      id: 201,
      title: "UEFA Champions League",
      subtitle: "Quarter Finals",
      image: "https://placehold.co/800x350/8B5CF6/FFFFFF?text=UEFA+Champions+League"
    },
    {
      id: 202,
      title: "NBA Finals",
      subtitle: "Game 5",
      image: "https://placehold.co/800x350/8B5CF6/FFFFFF?text=NBA+Finals"
    },
    {
      id: 203,
      title: "Formula 1",
      subtitle: "Monaco Grand Prix",
      image: "https://placehold.co/800x350/8B5CF6/FFFFFF?text=Formula+1"
    },
    {
      id: 204,
      title: "UFC 285",
      subtitle: "Jones vs Gane",
      image: "https://placehold.co/800x350/8B5CF6/FFFFFF?text=UFC+285"
    }
  ];

  const carouselRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

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
            {liveEvents.map((event) => (
              <CarouselItem key={event.id} className="pl-4 basis-full md:basis-3/4 lg:basis-2/3">
                <div className="card-gradient rounded-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="flex items-center mb-2">
                          <span className="animate-pulse mr-2 w-3 h-3 bg-red-600 rounded-full"></span>
                          <span className="text-white text-sm font-medium">LIVE NOW</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{event.title}</h3>
                        <p className="text-gray-300 mb-4">{event.subtitle}</p>
                        <Link to="/sports">
                          <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
                            <Play className="mr-2" /> Watch Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
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
