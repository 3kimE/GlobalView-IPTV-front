
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Enhanced channel data with better images
const channels = [
  { id: 1, name: "Sports Channel", category: "Sports", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Sports+Channel", description: "Live sports from around the world", background: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Movie Central", category: "Movies", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Movie+Central", description: "Latest blockbusters and classics", background: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "News 24/7", category: "News", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=News+24%2F7", description: "Breaking news and analysis", background: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Kids Zone", category: "Kids", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Kids+Zone", description: "Entertainment for children", background: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Music TV", category: "Music", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Music+TV", description: "Music videos and concerts", background: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Documentary World", category: "Documentary", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Documentary+World", description: "Fascinating documentaries", background: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Entertainment Plus", category: "Entertainment", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Entertainment+Plus", description: "Shows and entertainment", background: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Science Channel", category: "Education", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Science+Channel", description: "Science and education", background: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Action Movies", category: "Movies", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Action+Movies", description: "Action-packed movies", background: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Comedy Central", category: "Comedy", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Comedy+Central", description: "Comedy shows and sitcoms", background: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Drama TV", category: "Drama", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Drama+TV", description: "Drama series and shows", background: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Reality Show Network", category: "Reality", logo: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Reality+Show+Network", description: "Reality TV shows", background: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800&auto=format&fit=crop" },
];

const ChannelGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {channels.map((channel) => (
        <Link to={`/live/${channel.id}`} key={channel.id}>
          <Card className="overflow-hidden hover-scale border-gray-800 h-full relative">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${channel.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.85'
              }}
            />
            <div 
              className="absolute inset-0 z-0" 
              style={{ 
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9))' 
              }}
            />
            <CardContent className="p-4 text-center flex flex-col justify-between h-full relative z-10">
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
