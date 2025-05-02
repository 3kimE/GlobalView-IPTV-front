
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Clock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";

// Channel logos for carousel
const channelLogos = [
  { id: 1, name: "HBO", logo: "https://placehold.co/200x100/262626/FFFFFF?text=HBO" },
  { id: 2, name: "Netflix", logo: "https://placehold.co/200x100/262626/FFFFFF?text=Netflix" },
  { id: 3, name: "Disney+", logo: "https://placehold.co/200x100/262626/FFFFFF?text=Disney%2B" },
  { id: 4, name: "ESPN", logo: "https://placehold.co/200x100/262626/FFFFFF?text=ESPN" },
  { id: 5, name: "BBC", logo: "https://placehold.co/200x100/262626/FFFFFF?text=BBC" },
  { id: 6, name: "CNN", logo: "https://placehold.co/200x100/262626/FFFFFF?text=CNN" },
  { id: 7, name: "Fox", logo: "https://placehold.co/200x100/262626/FFFFFF?text=FOX" },
  { id: 8, name: "Sky Sports", logo: "https://placehold.co/200x100/262626/FFFFFF?text=Sky+Sports" },
  { id: 9, name: "Amazon Prime", logo: "https://placehold.co/200x100/262626/FFFFFF?text=Prime" },
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "I've tried several IPTV services, but GlobalView is by far the best. The picture quality is amazing and there's never any buffering issues.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "The channel selection is incredible. I can watch all my favorite shows and sports events in one place. Customer support is also top-notch!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    text: "GlobalView IPTV has transformed how my family watches TV. We love the variety of international channels and the kids section is great.",
    rating: 4
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
  const carouselRef = useRef(null);

  return (
    <section className="py-16 bg-iptv-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Channels</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Access thousands of premium channels from around the world, all in HD and 4K quality.
          </p>
        </div>

        <Carousel
          ref={carouselRef}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {channelLogos.map((channel) => (
              <CarouselItem key={channel.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="card-gradient rounded-lg overflow-hidden hover-scale p-4 flex items-center justify-center h-24">
                  <img 
                    src={channel.logo} 
                    alt={channel.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

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

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Thousands of satisfied customers trust GlobalView IPTV for their entertainment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-iptv-dark border border-gray-800 rounded-xl p-6 hover-scale"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-iptv-purple text-iptv-purple" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          ))}
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
        
        {/* Features */}
        <WhyChooseUs />
        
        {/* Channels Carousel */}
        <ChannelsCarousel />
        
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
