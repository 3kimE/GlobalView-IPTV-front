
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Enhanced channel data with better images
const channels = [
  { id: 1, name: "Sports Channel", category: "Sports", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Sports+Channel", description: "Live sports from around the world", background: "https://placehold.co/800x450/262626/FFFFFF?text=Sports+Background" },
  { id: 2, name: "Movie Central", category: "Movies", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Movie+Central", description: "Latest blockbusters and classics", background: "https://placehold.co/800x450/262626/FFFFFF?text=Movies+Background" },
  { id: 3, name: "News 24/7", category: "News", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=News+24%2F7", description: "Breaking news and analysis", background: "https://placehold.co/800x450/262626/FFFFFF?text=News+Background" },
  { id: 4, name: "Kids Zone", category: "Kids", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Kids+Zone", description: "Entertainment for children", background: "https://placehold.co/800x450/262626/FFFFFF?text=Kids+Background" },
  { id: 5, name: "Music TV", category: "Music", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Music+TV", description: "Music videos and concerts", background: "https://placehold.co/800x450/262626/FFFFFF?text=Music+Background" },
  { id: 6, name: "Documentary World", category: "Documentary", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Documentary+World", description: "Fascinating documentaries", background: "https://placehold.co/800x450/262626/FFFFFF?text=Documentary+Background" },
  { id: 7, name: "Entertainment Plus", category: "Entertainment", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Entertainment+Plus", description: "Shows and entertainment", background: "https://placehold.co/800x450/262626/FFFFFF?text=Entertainment+Background" },
  { id: 8, name: "Science Channel", category: "Education", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Science+Channel", description: "Science and education", background: "https://placehold.co/800x450/262626/FFFFFF?text=Education+Background" },
  { id: 9, name: "Action Movies", category: "Movies", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Action+Movies", description: "Action-packed movies", background: "https://placehold.co/800x450/262626/FFFFFF?text=Action+Background" },
  { id: 10, name: "Comedy Central", category: "Comedy", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Comedy+Central", description: "Comedy shows and sitcoms", background: "https://placehold.co/800x450/262626/FFFFFF?text=Comedy+Background" },
  { id: 11, name: "Drama TV", category: "Drama", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Drama+TV", description: "Drama series and shows", background: "https://placehold.co/800x450/262626/FFFFFF?text=Drama+Background" },
  { id: 12, name: "Reality Show Network", category: "Reality", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Reality+Show+Network", description: "Reality TV shows", background: "https://placehold.co/800x450/262626/FFFFFF?text=Reality+Background" },
];

const ChannelGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {channels.map((channel) => (
        <Link to={`/live/${channel.id}`} key={channel.id}>
          <Card className="overflow-hidden hover-scale border-gray-800 h-full relative">
            <div 
              className="absolute inset-0 z-0 opacity-30"
              style={{
                backgroundImage: `url(${channel.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <CardContent className="p-4 text-center flex flex-col justify-between h-full relative z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="mb-3 flex justify-center">
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="w-20 h-20 rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white truncate">{channel.name}</h3>
                <p className="text-xs text-iptv-purple mt-1">{channel.category}</p>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{channel.description}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ChannelGrid;
