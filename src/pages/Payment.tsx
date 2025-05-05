
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const getPlanDetails = (planId: string) => {
  const plans = {
    basic: {
      name: "Basic Plan",
      price: "$9.99",
      description: "Standard definition streaming on 1 device"
    },
    premium: {
      name: "Premium Plan",
      price: "$14.99",
      description: "HD streaming on 2 devices"
    },
    ultimate: {
      name: "Ultimate Plan",
      price: "$24.99",
      description: "4K streaming on 4 devices"
    }
  };

  return plans[planId as keyof typeof plans] || plans.basic;
};

const Payment = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const plan = getPlanDetails(planId || "basic");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentProcessing(true);
    toast({
      title: "Processing payment",
      description: "Please wait while we process your payment...",
    });
    
    // Simulate payment processing
    setTimeout(() => {
      navigate("/payment-success");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-16 pb-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-gray-400">You're just one step away from premium entertainment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Order Summary */}
            <Card className="md:col-span-1 bg-iptv-dark border-gray-800">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{plan.description}</p>
                    <div className="flex justify-between items-center">
                      <span>Monthly subscription</span>
                      <span className="font-medium">{plan.price}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">{plan.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="md:col-span-2 bg-iptv-dark border-gray-800">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid grid-cols-3 mb-6 bg-gray-800">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                  </TabsList>
                  
                  <form onSubmit={handleSubmit}>
                    <TabsContent value="card">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input id="cardName" placeholder="John Smith" required className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="4242 4242 4242 4242" required className="bg-gray-800 border-gray-700" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required className="bg-gray-800 border-gray-700" />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required className="bg-gray-800 border-gray-700" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paypal">
                      <div className="text-center py-6">
                        <img src="https://placehold.co/200x80/262626/FFFFFF?text=PayPal" alt="PayPal" className="mx-auto mb-4" />
                        <p className="text-gray-400 mb-4">Click the button below to pay with PayPal</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="crypto">
                      <div className="text-center py-6">
                        <img src="https://placehold.co/200x80/262626/FFFFFF?text=Crypto" alt="Cryptocurrency" className="mx-auto mb-4" />
                        <p className="text-gray-400 mb-4">Pay with Bitcoin, Ethereum or other cryptocurrencies</p>
                      </div>
                    </TabsContent>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" required />
                        <Label htmlFor="terms" className="text-sm">I agree to the Terms of Service and Privacy Policy</Label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-iptv-purple hover:bg-iptv-dark-purple"
                        disabled={paymentProcessing}
                      >
                        {paymentProcessing ? "Processing..." : `Pay ${plan.price}`}
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Your payment is secured with 256-bit encryption</p>
                      </div>
                    </div>
                  </form>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
