
import { TvMinimal, Play, Video, Tv } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const featuresList = [
    {
      icon: <TvMinimal size={40} className="text-iptv-purple" />,
      title: "10,000+ Live Channels",
      description: "Access thousands of international channels from sports to entertainment, news, kids content and more."
    },
    {
      icon: <Play size={40} className="text-iptv-purple" />,
      title: "On-Demand Content",
      description: "Enjoy a vast library of movies and TV shows available to watch whenever you want."
    },
    {
      icon: <Video size={40} className="text-iptv-purple" />,
      title: "Multi-Device Support",
      description: "Watch on your smart TV, phone, tablet, computer or any other compatible device."
    },
    {
      icon: <Tv size={40} className="text-iptv-purple" />,
      title: "Premium Quality",
      description: "Experience crystal clear HD and 4K streaming with minimal buffering time."
    }
  ];

  return (
    <section className="py-16 relative">
      {/* Background Effect */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-iptv-purple/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our IPTV Service?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer the best streaming experience with cutting-edge technology and 
            a wide selection of content for the whole family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <Card key={index} className="bg-iptv-dark border border-gray-800 hover-scale card-gradient">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
