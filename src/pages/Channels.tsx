
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelGrid from "@/components/ChannelGrid";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Channels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Sports", "News", "Movies", "Kids", "Music", "Documentary"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4">
        <div className="py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Browse Channels</h1>

          <div className="max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-iptv-dark border-gray-700 focus:border-iptv-purple"
            />
          </div>

          <Tabs defaultValue="All" className="mb-8">
            <TabsList className="mx-auto bg-iptv-dark border border-gray-800 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-iptv-purple data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <ChannelGrid />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Channels;
