
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  const faqItems = [
    {
      question: "What is IPTV?",
      answer: "IPTV (Internet Protocol Television) is a service that delivers television content over Internet Protocol networks. This is in contrast to delivery through traditional terrestrial, satellite, and cable television formats."
    },
    {
      question: "How many channels do you offer?",
      answer: "We offer over 10,000 channels from around the world, including sports, news, entertainment, movies, kids content and more."
    },
    {
      question: "What devices can I watch on?",
      answer: "You can watch on smart TVs, smartphones, tablets, computers, Amazon Fire Stick, Android boxes, and more. Our service is compatible with most modern devices."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 24-hour free trial so you can test our service before making a purchase."
    },
    {
      question: "How is the streaming quality?",
      answer: "We offer channels in various qualities including SD, HD, and 4K depending on your subscription plan and the original broadcast quality."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Choose Your Plan</h1>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Select the subscription that best fits your viewing habits. All plans come with our full channel lineup.
            </p>
            
            <Pricing />
            
            <div className="mt-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border border-gray-800 rounded-lg p-6 bg-iptv-dark">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                      <p className="text-gray-400">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-iptv-purple/20 to-iptv-dark-purple/20 rounded-xl p-8 max-w-4xl mx-auto border border-iptv-purple/30">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                <p className="text-gray-300 mb-6">
                  Our support team is always ready to help you with any questions you might have.
                </p>
                <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
