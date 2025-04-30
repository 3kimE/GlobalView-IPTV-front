
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, TvMinimal } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Sports = () => {
  const liveEvents = [
    {
      id: 101,
      title: "Premier League: Manchester United vs Liverpool",
      image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Football",
      startTime: "Live Now",
      viewers: "145K"
    },
    {
      id: 102,
      title: "NBA: Lakers vs Warriors",
      image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Basketball",
      startTime: "Starting in 30min",
      viewers: "98K"
    },
    {
      id: 103,
      title: "Formula 1: Monaco Grand Prix",
      image: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=F1",
      startTime: "15:30 Today",
      viewers: "210K"
    }
  ];

  const upcomingEvents = [
    {
      id: 201,
      title: "UFC 285: Jones vs Gane",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=UFC",
      category: "MMA",
      startTime: "Tomorrow 20:00"
    },
    {
      id: 202,
      title: "Tennis: Wimbledon Finals",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Tennis",
      category: "Tennis",
      startTime: "Sunday 14:00"
    },
    {
      id: 203,
      title: "Champions League Final",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=UCL",
      category: "Football",
      startTime: "Saturday 20:45"
    },
    {
      id: 204,
      title: "Boxing: Joshua vs Fury",
      image: "https://placehold.co/400x225/8B5CF6/FFFFFF?text=Boxing",
      category: "Boxing",
      startTime: "Next Week"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4">
        <div className="py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Sports Live</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Live Now</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {liveEvents.map((event) => (
                  <CarouselItem key={event.id} className="md:basis-2/3 lg:basis-1/2">
                    <div className="card-gradient rounded-lg overflow-hidden hover-scale p-1">
                      <div className="relative">
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          <span className="animate-pulse mr-1 w-2 h-2 bg-white rounded-full"></span>
                          LIVE
                        </div>
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                          {event.viewers} viewers
                        </div>
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-auto object-cover rounded-t-lg"
                        />
                        <Button 
                          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-iptv-purple/80 hover:bg-iptv-purple opacity-0 hover:opacity-100 transition-opacity"
                        >
                          <Play size={32} className="text-white" />
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{event.title}</h3>
                        <p className="text-sm text-iptv-purple mt-1">{event.startTime}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-black/50 border-none hover:bg-black/70" />
              <CarouselNext className="right-2 bg-black/50 border-none hover:bg-black/70" />
            </Carousel>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="card-gradient border-none hover-scale">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {event.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-1">{event.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">{event.startTime}</p>
                        <Button size="sm" variant="secondary" className="text-xs px-2 py-0 h-7">
                          Reminder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/pricing">
              <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
                Subscribe for Full Access
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sports;
