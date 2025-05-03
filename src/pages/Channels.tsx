
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, TvMinimal, ArrowRight } from "lucide-react";

// Sample channel data with enhanced images
const channelsData = {
  sports: [
    { id: 1, name: "ESPN", logo: "https://placehold.co/300x200/262626/FFFFFF?text=ESPN", category: "sports", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=ESPN+Background" },
    { id: 2, name: "Sky Sports", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Sky+Sports", category: "sports", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Sky+Sports+Background" },
    { id: 3, name: "BT Sport", logo: "https://placehold.co/300x200/262626/FFFFFF?text=BT+Sport", category: "sports", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=BT+Sport+Background" },
    { id: 4, name: "NBC Sports", logo: "https://placehold.co/300x200/262626/FFFFFF?text=NBC+Sports", category: "sports", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=NBC+Sports+Background" },
    { id: 5, name: "Fox Sports", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Fox+Sports", category: "sports", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Fox+Sports+Background" },
    { id: 6, name: "BeIN Sports", logo: "https://placehold.co/300x200/262626/FFFFFF?text=BeIN+Sports", category: "sports", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=BeIN+Sports+Background" },
  ],
  movies: [
    { id: 11, name: "HBO", logo: "https://placehold.co/300x200/262626/FFFFFF?text=HBO", category: "movies", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=HBO+Background" },
    { id: 12, name: "Netflix", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Netflix", category: "movies", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Netflix+Background" },
    { id: 13, name: "Showtime", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Showtime", category: "movies", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Showtime+Background" },
    { id: 14, name: "AMC", logo: "https://placehold.co/300x200/262626/FFFFFF?text=AMC", category: "movies", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=AMC+Background" },
    { id: 15, name: "Paramount", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Paramount", category: "movies", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Paramount+Background" },
    { id: 16, name: "Starz", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Starz", category: "movies", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Starz+Background" },
  ],
  news: [
    { id: 21, name: "CNN", logo: "https://placehold.co/300x200/262626/FFFFFF?text=CNN", category: "news", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=CNN+Background" },
    { id: 22, name: "BBC News", logo: "https://placehold.co/300x200/262626/FFFFFF?text=BBC+News", category: "news", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=BBC+News+Background" },
    { id: 23, name: "Fox News", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Fox+News", category: "news", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Fox+News+Background" },
    { id: 24, name: "Al Jazeera", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Al+Jazeera", category: "news", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Al+Jazeera+Background" },
    { id: 25, name: "MSNBC", logo: "https://placehold.co/300x200/262626/FFFFFF?text=MSNBC", category: "news", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=MSNBC+Background" },
    { id: 26, name: "Sky News", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Sky+News", category: "news", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Sky+News+Background" },
  ],
  kids: [
    { id: 31, name: "Disney", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Disney", category: "kids", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Disney+Background" },
    { id: 32, name: "Nickelodeon", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Nickelodeon", category: "kids", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Nickelodeon+Background" },
    { id: 33, name: "Cartoon Network", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Cartoon+Network", category: "kids", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Cartoon+Network+Background" },
    { id: 34, name: "PBS Kids", logo: "https://placehold.co/300x200/262626/FFFFFF?text=PBS+Kids", category: "kids", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=PBS+Kids+Background" },
    { id: 35, name: "Boomerang", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Boomerang", category: "kids", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Boomerang+Background" },
    { id: 36, name: "Baby TV", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Baby+TV", category: "kids", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Baby+TV+Background" },
  ],
  arabic: [
    { id: 41, name: "MBC", logo: "https://placehold.co/300x200/262626/FFFFFF?text=MBC", category: "arabic", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=MBC+Background" },
    { id: 42, name: "Al Arabiya", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Al+Arabiya", category: "arabic", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Al+Arabiya+Background" },
    { id: 43, name: "Rotana", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Rotana", category: "arabic", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Rotana+Background" },
    { id: 44, name: "OSN", logo: "https://placehold.co/300x200/262626/FFFFFF?text=OSN", category: "arabic", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=OSN+Background" },
    { id: 45, name: "Dubai TV", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Dubai+TV", category: "arabic", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Dubai+TV+Background" },
    { id: 46, name: "Abu Dhabi TV", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Abu+Dhabi+TV", category: "arabic", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Abu+Dhabi+TV+Background" },
  ],
  french: [
    { id: 51, name: "TF1", logo: "https://placehold.co/300x200/262626/FFFFFF?text=TF1", category: "french", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=TF1+Background" },
    { id: 52, name: "France 2", logo: "https://placehold.co/300x200/262626/FFFFFF?text=France+2", category: "french", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=France+2+Background" },
    { id: 53, name: "Canal+", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Canal%2B", category: "french", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Canal+Background" },
    { id: 54, name: "M6", logo: "https://placehold.co/300x200/262626/FFFFFF?text=M6", category: "french", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=M6+Background" },
    { id: 55, name: "France 24", logo: "https://placehold.co/300x200/262626/FFFFFF?text=France+24", category: "french", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=France+24+Background" },
    { id: 56, name: "TV5Monde", logo: "https://placehold.co/300x200/262626/FFFFFF?text=TV5Monde", category: "french", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=TV5Monde+Background" },
  ],
  usa: [
    { id: 61, name: "ABC", logo: "https://placehold.co/300x200/262626/FFFFFF?text=ABC", category: "usa", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=ABC+Background" },
    { id: 62, name: "NBC", logo: "https://placehold.co/300x200/262626/FFFFFF?text=NBC", category: "usa", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=NBC+Background" },
    { id: 63, name: "CBS", logo: "https://placehold.co/300x200/262626/FFFFFF?text=CBS", category: "usa", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=CBS+Background" },
    { id: 64, name: "FOX", logo: "https://placehold.co/300x200/262626/FFFFFF?text=FOX", category: "usa", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=FOX+Background" },
    { id: 65, name: "CW", logo: "https://placehold.co/300x200/262626/FFFFFF?text=CW", category: "usa", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=CW+Background" },
    { id: 66, name: "PBS", logo: "https://placehold.co/300x200/262626/FFFFFF?text=PBS", category: "usa", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=PBS+Background" },
  ],
  uk: [
    { id: 71, name: "BBC One", logo: "https://placehold.co/300x200/262626/FFFFFF?text=BBC+One", category: "uk", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=BBC+One+Background" },
    { id: 72, name: "ITV", logo: "https://placehold.co/300x200/262626/FFFFFF?text=ITV", category: "uk", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=ITV+Background" },
    { id: 73, name: "Channel 4", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Channel+4", category: "uk", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Channel+4+Background" },
    { id: 74, name: "Sky One", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Sky+One", category: "uk", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Sky+One+Background" },
    { id: 75, name: "Channel 5", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Channel+5", category: "uk", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Channel+5+Background" },
    { id: 76, name: "Dave", logo: "https://placehold.co/300x200/262626/FFFFFF?text=Dave", category: "uk", background: "https://placehold.co/800x450/8B5CF6/FFFFFF?text=Dave+Background" },
  ]
};

// Combine all channels for the "All" category
const allChannels = Object.values(channelsData).flat();

const ChannelGrid = ({ channels }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {channels.map((channel) => (
        <div 
          key={channel.id} 
          className="bg-iptv-dark border border-gray-800 rounded-lg overflow-hidden hover-scale relative"
        >
          <div 
            className="absolute inset-0 z-0 opacity-50"
            style={{
              backgroundImage: `url(${channel.background || 'https://placehold.co/800x450/8B5CF6/FFFFFF?text=Channel+Background'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <img 
            src={channel.logo} 
            alt={channel.name} 
            className="w-full h-auto relative z-10"
          />
          <div className="p-2 text-center relative z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
            <h3 className="text-sm font-medium">{channel.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

const Channels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Sports", "Movies", "News", "Kids", "Arabic", "French", "USA", "UK"];
  
  const filterChannels = (category, query) => {
    let channels = category.toLowerCase() === "all" 
      ? allChannels 
      : channelsData[category.toLowerCase()];
    
    if (query) {
      channels = channels.filter(channel => 
        channel.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    return channels;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Explore 10,000+ Channels from Around the World
              </h1>
              <p className="text-gray-300">
                Discover entertainment from across the globe with our extensive channel lineup.
                Filter by category or search for your favorites.
              </p>
            </div>
            
            <div className="max-w-md mx-auto mb-8 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search channels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-iptv-dark border-gray-700 focus:border-iptv-purple pl-10"
              />
            </div>

            <Tabs defaultValue="All" className="mb-8">
              <TabsList className="mx-auto bg-iptv-dark border border-gray-800 p-1 overflow-x-auto flex flex-nowrap justify-start md:justify-center">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-iptv-purple data-[state=active]:text-white whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <ChannelGrid channels={filterChannels(category, searchQuery)} />
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mt-12">
              <div className="max-w-3xl mx-auto mb-6">
                <h2 className="text-2xl font-bold mb-4">Access All These Channels and More</h2>
                <p className="text-gray-300 mb-6">
                  Get unlimited access to over 10,000 channels with our subscription plans.
                  No hidden fees, no contracts – just pure entertainment.
                </p>
              </div>
              
              <Link to="/pricing">
                <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple">
                  Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Channels;
