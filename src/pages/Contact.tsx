
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, FileText, HelpCircle, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MapAgadir from "@/components/MapAgadir";

// FAQ Categories and questions
const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    faqs: [
      {
        question: "What is StreamMaster?",
        answer: "StreamMaster is a premium television service that delivers thousands of channels, movies, and shows over the internet. You can access content from around the world on any device with an internet connection."
      },
      {
        question: "How does IPTV work?",
        answer: "IPTV (Internet Protocol Television) delivers television content over Internet Protocol networks. Unlike traditional TV that broadcasts all channels at once, IPTV sends only the channel you request, making it more efficient and allowing for features like video on demand."
      },
      {
        question: "Is StreamMaster legal?",
        answer: "Yes, StreamMaster operates legally and ethically. We obtain proper licensing for the content we provide and comply with all relevant regulations in the territories where we operate."
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
      }
    ]
  }
];

// Support card component
const SupportCard = ({ icon, title, description, link }) => (
  <Card className="bg-iptv-dark border border-gray-800 hover-scale">
    <CardHeader className="flex flex-col items-center text-center">
      <div className="p-3 bg-iptv-purple/20 rounded-full mb-4">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="text-iptv-purple font-medium">{link}</div>
    </CardContent>
  </Card>
);

const ContactAndSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Contact Form Section */}
        <section className="py-12 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact & Support</h1>
              <p className="text-gray-300">
                Have questions or need assistance? Our team is here to help you with any inquiries about StreamMaster.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <Card className="bg-iptv-dark border-gray-800">
                    <CardHeader>
                      <CardTitle>Send Us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                            <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800 border-gray-700" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                          <Input id="subject" placeholder="How can we help you?" className="bg-gray-800 border-gray-700" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                          <Textarea 
                            id="message" 
                            placeholder="Type your message here..." 
                            className="bg-gray-800 border-gray-700 min-h-[150px]" 
                          />
                        </div>
                        <Button className="w-full bg-iptv-purple hover:bg-iptv-dark-purple">
                          Send Message <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Map */}
                <div>
                  <Card className="bg-iptv-dark border-gray-800 h-full">
                    <CardHeader>
                      <CardTitle>Visit Our Office</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <div className="rounded-md overflow-hidden mb-6 flex-grow">
                        <MapAgadir />
                      </div>
                      <div className="space-y-3 text-sm">
                        <p className="flex items-center">
                          <span className="font-medium mr-2">Address:</span> 
                          <span className="text-gray-400">123 Avenue Hassan II, Agadir, Morocco</span>
                        </p>
                        <p className="flex items-center">
                          <span className="font-medium mr-2">Hours:</span> 
                          <span className="text-gray-400">Monday-Friday: 9AM-6PM | Saturday: 10AM-2PM</span>
                        </p>
                        <p className="flex items-center">
                          <span className="font-medium mr-2">Email:</span> 
                          <span className="text-gray-400">support@streammaster.com</span>
                        </p>
                        <p className="flex items-center">
                          <span className="font-medium mr-2">Phone:</span> 
                          <span className="text-gray-400">+212 500 123 456</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Support Cards Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How Can We Help You?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our support team is available 24/7 to assist you with any questions or technical issues.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <SupportCard
                icon={<Mail className="h-6 w-6 text-iptv-purple" />}
                title="Email Support"
                description="Send us an email and we'll get back to you within 24 hours."
                link="support@streammaster.com"
              />
              <SupportCard
                icon={<Phone className="h-6 w-6 text-iptv-purple" />}
                title="Phone Support"
                description="Speak directly with our technical support specialists."
                link="+212 500 123 456"
              />
              <SupportCard
                icon={<MessageSquare className="h-6 w-6 text-iptv-purple" />}
                title="Documentation"
                description="Browse our knowledge base for setup guides and tutorials."
                link="View Guides"
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our service, pricing, and technical support.
              </p>
            </div>
            
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
            
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-6">Can't find what you're looking for?</p>
              <div className="inline-flex items-center bg-iptv-purple/20 text-iptv-purple px-4 py-2 rounded-full">
                <HelpCircle className="mr-2 h-5 w-5" /> Contact our support team for more help
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactAndSupport;
