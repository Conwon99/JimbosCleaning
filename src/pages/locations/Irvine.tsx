import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Clock, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Irvine = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: "Roof Steam Cleaning", link: "/services/roof-steam-cleaning" },
    { name: "Render Softwashing", link: "/services/render-softwashing" },
    { name: "Driveway Cleaning", link: "/services/driveway-cleaning" },
    { name: "Gutter Cleaning", link: "/services/gutter-cleaning" },
    { name: "PVC White Cleaning", link: "/services/pvc-white-cleaning" },
    { name: "Window Cleaning", link: "/services/window-cleaning" }
  ];

  const nearbyAreas = [
    { name: "Kilmarnock", link: "/locations/kilmarnock" },
    { name: "Ayr", link: "/locations/ayr" },
    { name: "Troon", link: "/locations/troon" },
    { name: "Prestwick", link: "/locations/prestwick" }
  ];

  return (
    <div className="font-manrope">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#526bb0] hover:text-blue-700 font-manrope font-normal mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-6">
              Exterior Cleaning Services in Irvine
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional exterior cleaning services in Irvine, Ayrshire. From roof steam cleaning to driveway cleaning, 
              we provide comprehensive cleaning solutions for homes and businesses across Irvine and surrounding areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="font-manrope font-normal px-8 py-3"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Us in Irvine?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600 font-manrope">
                      Based in Irvine, we understand the local climate and cleaning challenges specific to the area.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-600 font-manrope">
                      Fast response times for Irvine residents and businesses with flexible scheduling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Reliable Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Trusted by Irvine homeowners and businesses for consistent, high-quality results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Our Irvine Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Address</p>
                        <p className="text-gray-600 font-manrope">2 West Bowhouse Way, Irvine</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Phone</p>
                        <p className="text-gray-600 font-manrope">07919 270128</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Hours</p>
                        <p className="text-gray-600 font-manrope">Mon-Fri: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 font-manrope">Sat: 9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Services in Irvine
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Droplet className="w-6 h-6 text-[#526bb0]" />
                  <h3 className="text-xl font-manrope font-normal text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 font-manrope text-sm">
                  Professional {service.name.toLowerCase()} services in Irvine and surrounding areas.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nearbyAreas.map((area, index) => (
              <Link
                key={index}
                to={area.link}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                <MapPin className="w-5 h-5 text-[#526bb0] mx-auto mb-2" />
                <p className="font-manrope font-normal text-gray-900">{area.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">
              Ready to Get Started in Irvine?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on exterior cleaning services in Irvine.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal px-8 py-3"
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Irvine;
