
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Live = () => {
  const { channelId } = useParams();
  
  // In a real app, we would fetch channel data based on channelId
  const channelTitle = channelId ? `Channel #${channelId}` : "Featured Channel";
  const channelDescription = "Watch this premium channel with high quality streaming and no interruptions.";
  
  // Enhanced recommended channels with better images
  const recommendedChannels = [
    { 
      id: 101, 
      name: "Sports HD", 
      thumbnail: "https://assets-prd.ignimgs.com/2022/04/01/fightnight-1648828230312.jpg", 
      background: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 102, 
      name: "News Network", 
      thumbnail: "https://cdn.moviefone.com/admin-uploads/posters/flymemoon-movie-poster_1713891737.jpg?d=360x540&q=60", 
      background: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 103, 
      name: "Movie Central", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BYzMxYzJkYzktZjRmMy00MGJkLThkMTQtZTBlNjMxMDMxZTQ1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg", 
      background: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 104, 
      name: "Documentary HD", 
      thumbnail: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", 
      background: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4">
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VideoPlayer
                title={channelTitle}
                description={channelDescription}
                poster="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1280&auto=format&fit=crop"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Recommended Channels</h3>
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent className="space-y-4">
                  {recommendedChannels.map((channel) => (
                    <CarouselItem key={channel.id} className="pt-0 basis-full">
                      <Link to={`/live/${channel.id}`}>
                        <Card className="bg-iptv-dark border-gray-800 overflow-hidden hover-scale">
                          <CardContent className="p-0">
                            <div className="relative aspect-video">
                              <img 
                                src={channel.thumbnail} 
                                alt={channel.name}
                                className="w-full h-full object-cover"
                              />
                              <div 
                                className="absolute inset-0" 
                                style={{ 
                                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))' 
                                }}
                              />
                              <Button 
                                size="icon" 
                                className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-iptv-purple/80 hover:bg-iptv-purple opacity-0 hover:opacity-100 transition-opacity z-20"
                              >
                                <Play size={20} className="text-white" />
                              </Button>
                              <div className="absolute bottom-0 left-0 p-3">
                                <h4 className="font-medium truncate text-white">{channel.name}</h4>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Live;
