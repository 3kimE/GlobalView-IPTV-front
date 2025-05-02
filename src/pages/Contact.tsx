
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const ContactMethod = ({ icon, title, value, link, linkText }) => (
  <Card className="border border-gray-800 bg-iptv-dark p-6 flex flex-col items-center text-center hover-scale">
    <div className="p-3 bg-iptv-purple/20 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{value}</p>
    {link && (
      <a 
        href={link} 
        className="text-iptv-purple hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
    )}
  </Card>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20 relative">
          {/* Background Effect */}
          <div className="absolute top-0 left-1/2 w-3/4 h-3/4 -translate-x-1/2 bg-iptv-purple/20 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch With Us</h1>
              <p className="text-gray-300">
                Have questions or need assistance? Our team is here to help.
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ContactMethod 
                icon={<Mail className="h-6 w-6 text-iptv-purple" />}
                title="Email"
                value="support@globalviewiptv.com"
                link="mailto:support@globalviewiptv.com"
                linkText="Send Email"
              />
              <ContactMethod 
                icon={<Phone className="h-6 w-6 text-iptv-purple" />}
                title="Phone"
                value="+1 (234) 567-8900"
                link="tel:+12345678900"
                linkText="Call Now"
              />
              <ContactMethod 
                icon={<MessageSquare className="h-6 w-6 text-iptv-purple" />}
                title="Live Chat"
                value="Chat with our support team"
                link="#"
                linkText="Start Chat"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-iptv-dark border-gray-700 focus:border-iptv-purple"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-iptv-dark border-gray-700 focus:border-iptv-purple"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="bg-iptv-dark border-gray-700 focus:border-iptv-purple"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="bg-iptv-dark border-gray-700 focus:border-iptv-purple min-h-[150px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-iptv-purple hover:bg-iptv-dark-purple w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="bg-iptv-dark border border-gray-800 rounded-lg overflow-hidden mb-6">
                  <div className="bg-gray-800 h-64 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-600" />
                    <span className="sr-only">Map Placeholder</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-iptv-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">GlobalView IPTV Headquarters</h3>
                    <address className="not-italic text-gray-400">
                      123 Streaming Avenue<br />
                      Tech District<br />
                      San Francisco, CA 94105<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <p className="text-gray-300 mb-2">Our support team is available 24/7 to assist you.</p>
              <p className="text-gray-400">
                For business inquiries: Monday - Friday: 9:00 AM - 5:00 PM (PST)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
