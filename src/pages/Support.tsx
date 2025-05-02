
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Mail, Phone, FileText, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    faqs: [
      {
        question: "What is GlobalView IPTV?",
        answer: "GlobalView IPTV is a premium television service that delivers thousands of channels, movies, and shows over the internet. You can access content from around the world on any device with an internet connection."
      },
      {
        question: "How does IPTV work?",
        answer: "IPTV (Internet Protocol Television) delivers television content over Internet Protocol networks. Unlike traditional TV that broadcasts all channels at once, IPTV sends only the channel you request, making it more efficient and allowing for features like video on demand."
      },
      {
        question: "Is GlobalView IPTV legal?",
        answer: "Yes, GlobalView IPTV operates legally and ethically. We obtain proper licensing for the content we provide and comply with all relevant regulations in the territories where we operate."
      }
    ]
  },
  {
    id: "subscription",
    title: "Subscription & Pricing",
    faqs: [
      {
        question: "What plans do you offer?",
        answer: "We offer 1-month, 3-month, and 12-month subscription plans. All plans include access to our full channel lineup, but differ in length and number of concurrent connections allowed."
      },
      {
        question: "Is there a free trial?",
        answer: "Yes, we offer a 24-hour free trial so you can test our service before making a purchase. Contact our support team to request your trial access."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and cryptocurrency payments for your convenience and security."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service. Please contact our support team within 7 days of purchase to request a refund."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Support",
    faqs: [
      {
        question: "What devices can I watch on?",
        answer: "You can watch on Smart TVs, Android devices, iOS devices (iPhone/iPad), Amazon Firestick, Windows, Mac, MAG boxes, and more. Our service works on virtually any device that can connect to the internet."
      },
      {
        question: "How do I set up the service on my device?",
        answer: "After subscribing, you'll receive detailed setup instructions via email. We provide step-by-step guides for all supported devices, and our support team is available 24/7 to help with any issues."
      },
      {
        question: "Why am I experiencing buffering?",
        answer: "Buffering can be caused by several factors: slow internet connection (we recommend at least 25Mbps for 4K content), network congestion, or device limitations. Try closing other applications, using a wired connection, or contacting our support for assistance."
      },
      {
        question: "How many devices can I use with one subscription?",
        answer: "Depending on your plan, you can watch on 2-5 devices simultaneously. Our 1-month plan supports 2 devices, 3-month plan supports 3 devices, and 12-month plan supports 5 devices."
      }
    ]
  },
  {
    id: "content",
    title: "Channels & Content",
    faqs: [
      {
        question: "How many channels do you offer?",
        answer: "We provide access to over 10,000 channels from around the world, covering sports, news, movies, entertainment, kids content, and more."
      },
      {
        question: "Do you have sports channels?",
        answer: "Yes, we offer an extensive selection of sports channels from around the world, including premium sports networks like ESPN, Sky Sports, BeIN Sports, and many more."
      },
      {
        question: "Do you have video on demand (VOD)?",
        answer: "Yes, our service includes a large library of movies and TV shows available on demand, which is regularly updated with new content."
      },
      {
        question: "Can I get local channels from my country?",
        answer: "Yes, we offer local channels from over 60 countries. Check our channel list or contact support to confirm availability for your specific region."
      }
    ]
  }
];

const SupportCard = ({ icon, title, description, buttonText, buttonLink }) => (
  <Card className="bg-iptv-dark border border-gray-800 hover-scale">
    <CardHeader className="flex flex-col items-center text-center">
      <div className="p-3 bg-iptv-purple/20 rounded-full mb-4">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-gray-400 mb-4">{description}</p>
      <Link to={buttonLink}>
        <Button 
          className="bg-iptv-purple hover:bg-iptv-dark-purple w-full"
        >
          {buttonText}
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Need Help? We're Here 24/7</h1>
              <p className="text-gray-300">
                Our dedicated support team is available around the clock to assist you with any questions
                or issues you may have with your GlobalView IPTV service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <SupportCard
                icon={<MessageSquare className="h-6 w-6 text-iptv-purple" />}
                title="Live Chat"
                description="Get instant help from our support agents through live chat."
                buttonText="Start Chat"
                buttonLink="/contact"
              />
              <SupportCard
                icon={<Mail className="h-6 w-6 text-iptv-purple" />}
                title="Email Support"
                description="Send us an email and we'll get back to you within 24 hours."
                buttonText="Email Us"
                buttonLink="/contact"
              />
              <SupportCard
                icon={<Phone className="h-6 w-6 text-iptv-purple" />}
                title="Phone Support"
                description="Speak directly with our technical support specialists."
                buttonText="Call Us"
                buttonLink="/contact"
              />
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="max-w-3xl mx-auto">
                {faqCategories.map((category) => (
                  <div key={category.id} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-iptv-purple">{category.title}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-item-${index}`} className="border-b border-gray-800">
                          <AccordionTrigger className="text-left hover:text-iptv-purple">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-400">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need Additional Help?
                </h2>
                <p className="text-gray-300 mb-6">
                  If you can't find the answer in our FAQ section, our support team is always ready to help.
                  We pride ourselves on providing excellent customer service and will work tirelessly to resolve
                  any issues you may encounter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="bg-iptv-purple hover:bg-iptv-dark-purple w-full sm:w-auto">
                      Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="#">
                    <Button variant="outline" className="border-gray-700 text-gray-300 w-full sm:w-auto">
                      <FileText className="mr-2 h-4 w-4" /> View Documentation
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <HelpCircle className="h-40 w-40 text-iptv-purple opacity-20" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
