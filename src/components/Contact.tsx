
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Google Analytics type declaration
declare global {
  function gtag(...args: any[]): void;
}

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    
    try {
      const response = await fetch('https://formspree.io/f/movnnnry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          service,
          message,
        }),
      });

      if (response.ok) {
        // Track successful form submission
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Quote Request Form',
            value: 1
          });
        }
        
        alert('Thank you! Your message has been sent successfully.');
        // Reset the form
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const handlePhoneClick = () => {
    // Track phone click event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Phone Click',
        value: 1
      });
    }
    
    const phoneNumber = "7919270128"; // UK mobile number without country code
    
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, use tel: protocol to open phone app
      window.location.href = `tel:+44${phoneNumber}`; // +44 7919 270128
    } else {
      // For desktop, open WhatsApp Web with the number
      const whatsappUrl = `https://api.whatsapp.com/send?phone=44${phoneNumber}`; // 447919270128
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp click event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Click',
        value: 1
      });
    }
    
    const phoneNumber = "7919270128";
    const message = "Hi! I'm interested in getting a quote for exterior cleaning services.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=44${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessengerClick = () => {
    // Track Messenger click event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Messenger Click',
        value: 1
      });
    }
    
    // Using the Facebook page ID from https://www.facebook.com/profile.php?id=100076596473868
    const facebookPageId = "100076596473868";
    const messengerUrl = `https://m.me/${facebookPageId}`;
    window.open(messengerUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-4"
          >
            Get Your Free Quote Today
          </motion.h2>
          <p className="text-xl text-gray-600 font-manrope max-w-2xl mx-auto">
            Ready to protect your home with professional roofing? Contact us for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-4 w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-manrope font-normal text-gray-900">Phone</h4>
                    <p className="text-gray-600 font-manrope">07919 270128</p>
                  </div>
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-manrope font-normal text-gray-900">Address</h4>
                    <p className="text-gray-600 font-manrope">2 west bowhouse way, Irvine, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-manrope font-normal text-gray-900">Hours</h4>
                    <p className="text-gray-600 font-manrope">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-manrope">Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                  Request a Quote
                </CardTitle>
                <p className="text-gray-600 font-manrope text-sm mt-2">
                  Send us a WhatsApp, a Facebook message, or send us an Email
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 mb-6">
                  <Button 
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-manrope font-normal py-3 flex items-center justify-center gap-2"
                    aria-label="Contact us via WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </Button>
                  <Button 
                    type="button"
                    onClick={handleMessengerClick}
                    className="flex-1 bg-[#0084ff] hover:bg-[#0073e6] text-white font-manrope font-normal py-3 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#0084ff' }}
                    aria-label="Contact us via Facebook Messenger"
                  >
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                      <path d="M257 93c-88.918 0-161 67.157-161 150 0 47.205 23.412 89.311 60 116.807V417l54.819-30.273C225.449 390.801 240.948 393 257 393c88.918 0 161-67.157 161-150S345.918 93 257 93zm16 202l-41-44-80 44 88-94 42 44 79-44-88 94z"/>
                    </svg>
                    Message
                  </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        name="firstName"
                        required 
                        className="font-manrope"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input 
                        type="text" 
                        name="lastName"
                        required 
                        className="font-manrope"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      required 
                      className="font-manrope"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel" 
                      name="phone"
                      required 
                      className="font-manrope"
                      placeholder="+44 1563 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select name="service" className="w-full px-3 py-2 border border-gray-300 rounded-md font-manrope">
                      <option value="">Select a service</option>
                      <option value="roof-steam-cleaning">Roof Steam Cleaning</option>
                      <option value="render-softwashing">Render Softwashing</option>
                      <option value="driveway-cleaning">Driveway Cleaning</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="pvc-white-cleaning">PVC White Cleaning</option>
                      <option value="window-cleaning">Window Cleaning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      rows={4} 
                      className="font-manrope"
                      placeholder="Tell us about your roofing needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal py-3"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
