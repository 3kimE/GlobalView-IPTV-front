
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Live = () => {
  const { channelId } = useParams();
  
  // In a real app, we would fetch channel data based on channelId
  const channelTitle = channelId ? `Channel #${channelId}` : "Featured Channel";
  const channelDescription = "Watch this premium channel with high quality streaming and no interruptions.";
  
  // Sample recommended channels with enhanced images
  const recommendedChannels = [
    { 
      id: 101, 
      name: "Sports HD", 
      thumbnail: "https://placehold.co/320x180/8B5CF6/FFFFFF?text=Sports", 
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Sports+Background"
    },
    { 
      id: 102, 
      name: "News Network", 
      thumbnail: "https://placehold.co/320x180/8B5CF6/FFFFFF?text=News", 
      background: "https://placehold.co/800x450/262626/FFFFFF?text=News+Background"
    },
    { 
      id: 103, 
      name: "Movie Central", 
      thumbnail: "https://placehold.co/320x180/8B5CF6/FFFFFF?text=Movies", 
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Movies+Background"
    },
    { 
      id: 104, 
      name: "Documentary HD", 
      thumbnail: "https://placehold.co/320x180/8B5CF6/FFFFFF?text=Docs", 
      background: "https://placehold.co/800x450/262626/FFFFFF?text=Docs+Background"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4">
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VideoPlayer
                title={channelTitle}
                description={channelDescription}
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Recommended Channels</h3>
              <div className="space-y-4">
                {recommendedChannels.map((channel) => (
                  <Card key={channel.id} className="bg-iptv-dark border-gray-800 overflow-hidden hover-scale">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div 
                          className="absolute inset-0 z-0"
                          style={{
                            backgroundImage: `url(${channel.background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <img 
                          src={channel.thumbnail} 
                          alt={channel.name}
                          className="w-full h-auto relative z-10"
                        />
                        <Button 
                          size="icon" 
                          className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-iptv-purple/80 hover:bg-iptv-purple opacity-0 hover:opacity-100 transition-opacity z-20"
                        >
                          <Play size={20} className="text-white" />
                        </Button>
                      </div>
                      <div className="p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="font-medium">{channel.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Live;
