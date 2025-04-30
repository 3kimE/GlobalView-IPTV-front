
import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  title: string;
  description: string;
  poster?: string;
  streamUrl?: string;
}

const VideoPlayer = ({
  title,
  description,
  poster = "https://placehold.co/1280x720/121212/8B5CF6?text=Stream+Preview",
  streamUrl
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      <div className="relative aspect-video bg-black">
        {/* Video placeholder - in a real app this would be a video element */}
        <img
          src={poster}
          alt="Video stream"
          className={`w-full h-full object-cover ${isPlaying ? "opacity-100" : "opacity-80"}`}
        />

        {/* Overlay for controls */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying && (
            <Button 
              onClick={togglePlay} 
              size="icon" 
              className="w-16 h-16 rounded-full bg-iptv-purple/90 hover:bg-iptv-purple"
            >
              <Play size={30} className="text-white" />
            </Button>
          )}
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                onClick={togglePlay} 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button 
                  onClick={toggleMute} 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10"
                >
                  {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </Button>
                <div className="w-20">
                  <Slider 
                    value={[isMuted ? 0 : volume]} 
                    min={0} 
                    max={100} 
                    step={1} 
                    onValueChange={handleVolumeChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="text-white text-sm font-medium">
              Live
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-iptv-dark">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
