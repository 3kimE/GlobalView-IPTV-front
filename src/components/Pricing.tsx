
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "month",
      description: "Perfect for casual viewers",
      features: [
        "5,000+ Live TV Channels",
        "Standard Definition Quality",
        "Watch on 1 Device",
        "7 Days Catch-up TV",
        "Basic Support"
      ],
      buttonText: "Choose Basic",
      popular: false
    },
    {
      name: "Premium",
      price: "$14.99",
      period: "month",
      description: "Most popular choice",
      features: [
        "8,000+ Live TV Channels",
        "HD Quality Streaming",
        "Watch on 2 Devices",
        "14 Days Catch-up TV",
        "Priority Support"
      ],
      buttonText: "Choose Premium",
      popular: true
    },
    {
      name: "Ultimate",
      price: "$24.99",
      period: "month",
      description: "For the ultimate experience",
      features: [
        "10,000+ Live TV Channels",
        "4K & HD Quality",
        "Watch on 4 Devices",
        "30 Days Catch-up TV",
        "24/7 Premium Support"
      ],
      buttonText: "Choose Ultimate",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for you. All plans include access to our entire channel catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
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
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check size={18} className="text-iptv-purple mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
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
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-gray-400 text-sm">
          <p>All plans include a 7-day money-back guarantee. No questions asked.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
