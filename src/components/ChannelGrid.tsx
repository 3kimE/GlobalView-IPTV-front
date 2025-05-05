
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Channel data with real logos
const channels = [
  { 
    id: 1, 
    name: "NHL", 
    category: "Sports", 
    logo: "/lovable-uploads/ec28f18f-36e0-48c5-9a2d-a9d64c603149.png", 
    description: "National Hockey League" 
  },
  { 
    id: 2, 
    name: "Peacock", 
    category: "Entertainment", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/NBCUniversal_Peacock_Logo.svg/1200px-NBCUniversal_Peacock_Logo.svg.png", 
    description: "Streaming service by NBCUniversal" 
  },
  { 
    id: 3, 
    name: "PPV Live", 
    category: "Sports", 
    logo: "https://png.pngtree.com/png-clipart/20220530/original/pngtree-ppv-live-logo-design-template-png-image_7775398.png", 
    description: "Pay-per-view live events" 
  },
  { 
    id: 4, 
    name: "Premier League", 
    category: "Sports", 
    logo: "https://logodownload.org/wp-content/uploads/2016/03/premier-league-logo-0.png", 
    description: "English Premier League football" 
  },
  { 
    id: 5, 
    name: "Apple TV+", 
    category: "Entertainment", 
    logo: "https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png", 
    description: "Apple's streaming service" 
  },
  { 
    id: 6, 
    name: "ESPN", 
    category: "Sports", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png", 
    description: "Sports programming" 
  },
  { 
    id: 7, 
    name: "HBO", 
    category: "Entertainment", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/2560px-HBO_logo.svg.png", 
    description: "Premium entertainment channel" 
  },
  { 
    id: 8, 
    name: "Fox Sports", 
    category: "Sports", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FOX_Sports_logo.svg/1280px-FOX_Sports_logo.svg.png", 
    description: "Sports programming and coverage" 
  },
  { 
    id: 9, 
    name: "Netflix", 
    category: "Entertainment", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png", 
    description: "Streaming movies and TV shows" 
  },
  { 
    id: 10, 
    name: "Disney+", 
    category: "Entertainment", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png", 
    description: "Disney streaming service" 
  },
  { 
    id: 11, 
    name: "NBC Sports", 
    category: "Sports", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/NBC_Sports_2023.svg/2560px-NBC_Sports_2023.svg.png", 
    description: "Sports coverage and events" 
  },
  { 
    id: 12, 
    name: "Sky Sports", 
    category: "Sports", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sky_Sports_logo_2017.svg/2560px-Sky_Sports_logo_2017.svg.png", 
    description: "Sports broadcasting" 
  },
];

const ChannelGrid = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {channels.map((channel) => (
          <Link to={`/live/${channel.id}`} key={channel.id} className="block group">
            <Card className="bg-black border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardContent className="p-0 h-24 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="max-h-16 max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    size="sm" 
                    className="rounded-full bg-iptv-purple hover:bg-iptv-dark-purple"
                  >
                    <Play size={16} className="mr-1" /> Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="mt-2 text-center">
              <h3 className="text-sm font-medium">{channel.name}</h3>
              <p className="text-xs text-gray-400">{channel.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChannelGrid;
