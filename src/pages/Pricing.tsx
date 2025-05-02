
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";

const pricingPlans = {
  monthly: [
    {
      name: "1 Month",
      price: 14.99,
      description: "Perfect for trying out our service",
      features: [
        { text: "10,000+ Live TV Channels", included: true },
        { text: "Full HD & 4K Quality", included: true },
        { text: "Video on Demand (VOD)", included: true },
        { text: "Watch on 2 Devices", included: true },
        { text: "EPG (TV Guide) Included", included: true },
        { text: "24/7 Customer Support", included: true },
      ],
      popular: false,
    },
    {
      name: "3 Months",
      price: 34.99,
      description: "Our most popular plan",
      discount: "Save 22%",
      features: [
        { text: "10,000+ Live TV Channels", included: true },
        { text: "Full HD & 4K Quality", included: true },
        { text: "Video on Demand (VOD)", included: true },
        { text: "Watch on 3 Devices", included: true },
        { text: "EPG (TV Guide) Included", included: true },
        { text: "24/7 Customer Support", included: true },
      ],
      popular: true,
    },
    {
      name: "12 Months",
      price: 99.99,
      description: "Best value for loyal customers",
      discount: "Save 44%",
      features: [
        { text: "10,000+ Live TV Channels", included: true },
        { text: "Full HD & 4K Quality", included: true },
        { text: "Video on Demand (VOD)", included: true },
        { text: "Watch on 5 Devices", included: true },
        { text: "EPG (TV Guide) Included", included: true },
        { text: "24/7 Priority Support", included: true },
      ],
      popular: false,
    },
  ],
};

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is GlobalView IPTV?",
      answer: "GlobalView IPTV is a premium television service that delivers thousands of channels, movies, and shows over the internet. You can access content from around the world on any device with an internet connection."
    },
    {
      question: "What devices can I watch on?",
      answer: "You can watch on Smart TVs, Android devices, iOS devices (iPhone/iPad), Amazon Firestick, Windows, Mac, MAG boxes, and more. Our service works on virtually any device that can connect to the internet."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 24-hour free trial so you can test our service before making a purchase. Contact our support team to request your trial access."
    },
    {
      question: "How is the streaming quality?",
      answer: "We provide HD and 4K streaming quality (where available) with minimal buffering. The actual quality may depend on your internet speed and the original broadcast quality."
    },
    {
      question: "How many devices can I use with one subscription?",
      answer: "Depending on your plan, you can watch on 2-5 devices simultaneously. Our 1-month plan supports 2 devices, 3-month plan supports 3 devices, and 12-month plan supports 5 devices."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service. Please contact our support team within 7 days of purchase to request a refund."
    }
  ];

  return (
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
  );
};

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Plan</h1>
              <p className="text-gray-300 mb-8">
                Select the perfect plan for your viewing needs. All plans include our full channel lineup, 
                HD & 4K quality, and no buffering.
              </p>
            </div>
            
            <div className="flex justify-center mb-12">
              <Button className="bg-iptv-purple hover:bg-iptv-dark-purple">
                Get Free 24h Trial
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.monthly.map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden border ${
                    plan.popular 
                      ? "border-iptv-purple bg-gradient-to-b from-iptv-purple/20 to-transparent" 
                      : "border-gray-800 bg-iptv-dark"
                  } relative p-6 flex flex-col hover-scale`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-iptv-purple text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">${plan.price}</span>
                    </div>
                    {plan.discount && (
                      <span className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded ml-2">
                        {plan.discount}
                      </span>
                    )}
                    <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        {feature.included ? (
                          <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X size={18} className="text-red-500 mr-2 flex-shrink-0" />
                        )}
                        <span className="text-gray-300 text-sm">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-iptv-purple hover:bg-iptv-dark-purple" 
                        : "bg-gray-800 hover:bg-gray-700"
                    } text-white`}
                  >
                    Get This Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 text-gray-400 text-sm">
              <p>All plans include a 7-day money-back guarantee. No questions asked.</p>
            </div>
            
            <FAQSection />
            
            <div className="mt-16 bg-gradient-to-r from-iptv-purple/20 to-iptv-dark-purple/20 rounded-xl p-8 max-w-4xl mx-auto border border-iptv-purple/30">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                <p className="text-gray-300 mb-6">
                  Our support team is always ready to help you with any questions you might have.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-iptv-purple hover:bg-iptv-dark-purple">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
