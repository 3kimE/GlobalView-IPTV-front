
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Enhanced channel data
const channels = [
  { id: 1, name: "Sports Channel", category: "Sports", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=SC", description: "Live sports from around the world" },
  { id: 2, name: "Movie Central", category: "Movies", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=MC", description: "Latest blockbusters and classics" },
  { id: 3, name: "News 24/7", category: "News", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=N24", description: "Breaking news and analysis" },
  { id: 4, name: "Kids Zone", category: "Kids", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=KZ", description: "Entertainment for children" },
  { id: 5, name: "Music TV", category: "Music", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=MTV", description: "Music videos and concerts" },
  { id: 6, name: "Documentary World", category: "Documentary", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=DW", description: "Fascinating documentaries" },
  { id: 7, name: "Entertainment Plus", category: "Entertainment", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=EP", description: "Shows and entertainment" },
  { id: 8, name: "Science Channel", category: "Education", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=SC", description: "Science and education" },
  { id: 9, name: "Action Movies", category: "Movies", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=AM", description: "Action-packed movies" },
  { id: 10, name: "Comedy Central", category: "Comedy", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=CC", description: "Comedy shows and sitcoms" },
  { id: 11, name: "Drama TV", category: "Drama", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=DT", description: "Drama series and shows" },
  { id: 12, name: "Reality Show Network", category: "Reality", logo: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=RSN", description: "Reality TV shows" },
];

const ChannelGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {channels.map((channel) => (
        <Link to={`/live/${channel.id}`} key={channel.id}>
          <Card className="overflow-hidden hover-scale bg-iptv-dark border-gray-800 card-gradient h-full">
            <CardContent className="p-4 text-center flex flex-col justify-between h-full">
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
