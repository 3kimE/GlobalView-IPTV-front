
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Sample channel data
const channels = [
  { id: 1, name: "Sports Channel", category: "Sports", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=SC" },
  { id: 2, name: "Movie Central", category: "Movies", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=MC" },
  { id: 3, name: "News 24/7", category: "News", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=N24" },
  { id: 4, name: "Kids Zone", category: "Kids", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=KZ" },
  { id: 5, name: "Music TV", category: "Music", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=MTV" },
  { id: 6, name: "Documentary World", category: "Documentary", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=DW" },
  { id: 7, name: "Entertainment Plus", category: "Entertainment", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=EP" },
  { id: 8, name: "Science Channel", category: "Education", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=SC" },
  { id: 9, name: "Action Movies", category: "Movies", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=AM" },
  { id: 10, name: "Comedy Central", category: "Comedy", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=CC" },
  { id: 11, name: "Drama TV", category: "Drama", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=DT" },
  { id: 12, name: "Reality Show Network", category: "Reality", logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=RSN" },
];

const ChannelGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {channels.map((channel) => (
        <Link to={`/live/${channel.id}`} key={channel.id}>
          <Card className="overflow-hidden hover-scale bg-iptv-dark border-gray-800 card-gradient">
            <CardContent className="p-4 text-center">
              <div className="mb-3 flex justify-center">
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-white truncate">{channel.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{channel.category}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ChannelGrid;
