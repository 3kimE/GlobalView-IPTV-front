
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Enhanced channel data with better images and backgrounds
const channels = [
  { 
    id: 1, 
    name: "Sports Channel", 
    category: "Sports", 
    logo: "https://assets-prd.ignimgs.com/2022/04/01/fightnight-1648828230312.jpg", 
    description: "Live sports from around the world", 
    background: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "Movie Central", 
    category: "Movies", 
    logo: "https://cdn.moviefone.com/admin-uploads/posters/flymemoon-movie-poster_1713891737.jpg?d=360x540&q=60", 
    description: "Latest blockbusters and classics", 
    background: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "News 24/7", 
    category: "News", 
    logo: "https://m.media-amazon.com/images/M/MV5BYzMxYzJkYzktZjRmMy00MGJkLThkMTQtZTBlNjMxMDMxZTQ1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg", 
    description: "Breaking news and analysis", 
    background: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    name: "Kids Zone", 
    category: "Kids", 
    logo: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", 
    description: "Entertainment for children", 
    background: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    name: "Music TV", 
    category: "Music", 
    logo: "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNGZjYi00YjA5LTk3ODctNzE0NjQ2NjM5OTU0XkEyXkFqcGdeQXVyNjU2MDUzMjY._V1_FMjpg_UX1000_.jpg", 
    description: "Music videos and concerts", 
    background: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    name: "Documentary World", 
    category: "Documentary", 
    logo: "https://m.media-amazon.com/images/M/MV5BODk0MzE4MTgtZmNlZS00YzM1LWJkOTQtYTc5MmRlOTZlZDRiXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1000_.jpg", 
    description: "Fascinating documentaries", 
    background: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 7, 
    name: "Entertainment Plus", 
    category: "Entertainment", 
    logo: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", 
    description: "Shows and entertainment", 
    background: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 8, 
    name: "Science Channel", 
    category: "Education", 
    logo: "https://assets-prd.ignimgs.com/2022/04/01/fightnight-1648828230312.jpg", 
    description: "Science and education", 
    background: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 9, 
    name: "Action Movies", 
    category: "Movies", 
    logo: "https://cdn.moviefone.com/admin-uploads/posters/flymemoon-movie-poster_1713891737.jpg?d=360x540&q=60", 
    description: "Action-packed movies", 
    background: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 10, 
    name: "Comedy Central", 
    category: "Comedy", 
    logo: "https://m.media-amazon.com/images/M/MV5BYzMxYzJkYzktZjRmMy00MGJkLThkMTQtZTBlNjMxMDMxZTQ1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg", 
    description: "Comedy shows and sitcoms", 
    background: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 11, 
    name: "Drama TV", 
    category: "Drama", 
    logo: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", 
    description: "Drama series and shows", 
    background: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 12, 
    name: "Reality Show Network", 
    category: "Reality", 
    logo: "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNGZjYi00YjA5LTk3ODctNzE0NjQ2NjM5OTU0XkEyXkFqcGdeQXVyNjU2MDUzMjY._V1_FMjpg_UX1000_.jpg", 
    description: "Reality TV shows", 
    background: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800&auto=format&fit=crop" 
  },
];

const ChannelGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {channels.map((channel) => (
        <Link to={`/live/${channel.id}`} key={channel.id}>
          <Card className="overflow-hidden hover-scale border-gray-800 h-full relative bg-black">
            <CardContent className="p-0 text-center flex flex-col h-full relative z-10">
              <div 
                className="absolute inset-0 z-0 opacity-50"
                style={{
                  backgroundImage: `url(${channel.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative aspect-[2/3]">
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="w-full h-full object-cover"
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
              <div className="p-3 bg-gradient-to-t from-black/80 to-transparent relative z-10">
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
