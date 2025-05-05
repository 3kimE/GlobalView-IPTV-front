import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Clock, Star, Play, Film, TvMinimal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// Updated channel logos for carousel - based on provided image
const channelLogos = [
  { id: 1, name: "NHL", logo: "/lovable-uploads/ec28f18f-36e0-48c5-9a2d-a9d64c603149.png" },
  { id: 2, name: "Peacock", logo: "https://placehold.co/300x120/000000/FFFFFF?text=Peacock" },
  { id: 3, name: "PPV Live", logo: "https://placehold.co/300x120/000000/FFFFFF?text=PPV+Live" },
  { id: 4, name: "Premier League", logo: "https://placehold.co/300x120/000000/FFFFFF?text=Premier+League" },
  { id: 5, name: "Apple TV+", logo: "https://placehold.co/300x120/000000/FFFFFF?text=Apple+TV%2B" },
];

// Featured movies for carousel
const featuredMovies = [
  { 
    id: 1, 
    title: "Avengers: Endgame", 
    genre: "Action/Sci-Fi",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Avengers:+Endgame",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Avengers+Background" 
  },
  { 
    id: 2, 
    title: "Joker", 
    genre: "Drama/Thriller",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Joker",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Joker+Background" 
  },
  { 
    id: 3, 
    title: "Parasite", 
    genre: "Drama/Thriller",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Parasite",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Parasite+Background" 
  },
  { 
    id: 4, 
    title: "Tenet", 
    genre: "Action/Sci-Fi",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Tenet",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Tenet+Background" 
  },
  { 
    id: 5, 
    title: "Black Widow", 
    genre: "Action/Adventure",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Black+Widow",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Black+Widow+Background" 
  },
  { 
    id: 6, 
    title: "Dune", 
    genre: "Sci-Fi/Adventure",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Dune",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Dune+Background" 
  },
];

// Live sports events
const liveEvents = [
  { 
    id: 1, 
    title: "UEFA Champions League", 
    subtitle: "Quarter Finals",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=UEFA+Champions+League",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Champions+League+Background"
  },
  { 
    id: 2, 
    title: "NBA Finals", 
    subtitle: "Game 5",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=NBA+Finals",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=NBA+Finals+Background"
  },
  { 
    id: 3, 
    title: "Formula 1", 
    subtitle: "Monaco Grand Prix",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Formula+1",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=Formula+1+Background"
  },
  { 
    id: 4, 
    title: "UFC 285", 
    subtitle: "Jones vs Gane",
    image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=UFC+285",
    background: "https://placehold.co/1200x675/262626/FFFFFF?text=UFC+Background"
  },
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "I've tried several IPTV services, but StreamMaster is by far the best. The picture quality is amazing and there's never any buffering issues.",
    rating: 5,
    avatar: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "The channel selection is incredible. I can watch all my favorite shows and sports events in one place. Customer support is also top-notch!",
    rating: 5,
    avatar: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=MC"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    text: "StreamMaster has transformed how my family watches TV. We love the variety of international channels and the kids section is great.",
    rating: 4,
    avatar: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=ET"
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    text: "The streaming quality is excellent. I can watch my favorite football matches in crystal clear HD without any lag or interruptions.",
    rating: 5,
    avatar: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=CR"
  },
  {
    id: 5,
    name: "Aisha Khan",
    location: "Dubai, UAE",
    text: "StreamMaster offers the best selection of international channels. I can watch content from all over the world with perfect quality.",
    rating: 5,
    avatar: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=AK"
  }
];

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-iptv-purple" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast streaming with minimal buffering on all your devices."
    },
    {
      icon: <Shield className="h-10 w-10 text-iptv-purple" />,
      title: "Reliable Service",
      description: "99.9% uptime guarantee with constant monitoring to ensure uninterrupted viewing."
    },
    {
      icon: <Clock className="h-10 w-10 text-iptv-purple" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            GlobalView IPTV offers the best streaming experience with cutting-edge technology
            and unmatched reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-iptv-dark border border-gray-800 hover-scale card-gradient">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChannelsCarousel = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Channels</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Access thousands of premium channels from around the world, all in HD and 4K quality.
          </p>
        </div>

        {/* New UI for Popular Channels based on the provided image */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10"></div>
          <div className="bg-black py-12 px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
              {channelLogos.map((channel) => (
                <Link to="/channels" key={channel.id} className="block group">
                  <div className="relative h-12 md:h-16 w-auto transition-transform duration-300 hover:scale-110">
                    <img 
                      src={channel.logo} 
                      alt={channel.name}
                      className="h-full w-auto object-contain filter brightness-100 group-hover:brightness-125" 
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/channels">
            <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
              View All Channels <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeaturedMoviesCarousel = () => {
  const carouselRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Movies</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Enjoy the latest blockbusters and classic films in stunning HD and 4K quality.
          </p>
        </div>

        <div className="relative">
          <Carousel
            ref={carouselRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-4">
              {featuredMovies.map((movie) => (
                <CarouselItem key={movie.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-lg overflow-hidden hover-scale relative">
                    <div 
                      className="absolute inset-0 z-0 opacity-50"
                      style={{
                        backgroundImage: `url(${movie.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="card-gradient rounded-lg overflow-hidden">
                      <div className="relative">
                        <img 
                          src={movie.image} 
                          alt={movie.title}
                          className="w-full h-auto object-cover relative z-10"
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
                      <div className="p-4 bg-gradient-to-t from-black/80 to-transparent relative z-10">
                        <h3 className="text-lg font-medium">{movie.title}</h3>
                        <p className="text-sm text-gray-400">{movie.genre}</p>
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

        <div className="mt-10 text-center">
          <Link to="/movies">
            <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
              <Film className="mr-2 h-4 w-4" /> Explore All Movies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const LiveSportsCarousel = () => {
  const carouselRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 bg-iptv-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Sports Events</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Never miss a game again with our extensive coverage of global sporting events.
          </p>
        </div>

        <div className="relative">
          <Carousel
            ref={carouselRef}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-4">
              {liveEvents.map((event) => (
                <CarouselItem key={event.id} className="pl-4 basis-full md:basis-3/4 lg:basis-2/3">
                  <div className="rounded-lg overflow-hidden relative">
                    <div 
                      className="absolute inset-0 z-0 opacity-70"
                      style={{
                        backgroundImage: `url(${event.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="card-gradient rounded-lg overflow-hidden">
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-auto object-cover relative z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10">
                          <div className="absolute bottom-0 left-0 p-6">
                            <div className="flex items-center mb-2">
                              <span className="animate-pulse mr-2 w-3 h-3 bg-red-600 rounded-full"></span>
                              <span className="text-white text-sm font-medium">LIVE NOW</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{event.title}</h3>
                            <p className="text-gray-300 mb-4">{event.subtitle}</p>
                            <Link to="/sports">
                              <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
                                <Play className="mr-2 h-4 w-4" /> Watch Now
                              </Button>
                            </Link>
                          </div>
                        </div>
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

        <div className="mt-10 text-center">
          <Link to="/sports">
            <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
              <TvMinimal className="mr-2 h-4 w-4" /> Browse All Sports
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Thousands of satisfied customers trust GlobalView IPTV for their entertainment needs.
          </p>
        </div>

        <div className="relative">
          <Carousel
            ref={carouselRef}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="bg-iptv-dark border border-gray-800 rounded-xl p-6 hover-scale mx-4">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4" 
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-iptv-purple text-iptv-purple" />
                      ))}
                    </div>
                    <p className="text-gray-300">{testimonial.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-iptv-purple/20 to-iptv-dark-purple/20 rounded-xl p-8 md:p-12 border border-iptv-purple/20 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enjoy Premium TV?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the best IPTV service available. 
            Start streaming your favorite content today!
          </p>
          <Link to="/pricing">
            <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple">
              See Our Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-10 md:pt-28 md:pb-20 relative">
          <div className="absolute top-0 left-1/2 w-3/4 h-3/4 -translate-x-1/2 bg-iptv-purple/20 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best IPTV Service 2025 – Stream Everything in <span className="gradient-text">HD & 4K</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Unlimited Channels, Sports, Movies & Series with No Limits
              </p>
              
              <Link to="/pricing">
                <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple text-white px-8">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <div className="mt-12 space-y-4">
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
        </section>
        
        {/* Why Choose Us */}
        <WhyChooseUs />
        
        {/* Channels Carousel */}
        <ChannelsCarousel />
        
        {/* Movies Carousel */}
        <FeaturedMoviesCarousel />
        
        {/* Sports Carousel */}
        <LiveSportsCarousel />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* CTA */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
