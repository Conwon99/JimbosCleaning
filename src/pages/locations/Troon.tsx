import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Clock, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Troon = () => {
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
    { name: "Irvine", link: "/locations/irvine" },
    { name: "Kilmarnock", link: "/locations/kilmarnock" },
    { name: "Ayr", link: "/locations/ayr" },
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
              Exterior Cleaning Services in Troon
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional exterior cleaning services in Troon, Ayrshire. From roof steam cleaning to driveway cleaning, 
              we provide comprehensive cleaning solutions for homes and businesses across Troon, outer Glasgow, and surrounding areas. 
              Serving the historic seaside town of Troon, we understand the unique challenges of coastal properties and 
              the importance of maintaining your home's exterior in this beautiful Ayrshire location.
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

      {/* Local Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                About Troon, Ayrshire
              </h2>
              <div className="space-y-6 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Troon is a charming seaside town located on the west coast of Scotland in South Ayrshire, 
                  approximately 8 miles north of Ayr. This historic town is renowned for its world-class golf 
                  courses, including the famous Royal Troon Golf Club, which has hosted The Open Championship 
                  multiple times. The town's coastal location makes it a popular destination for both residents 
                  and visitors, but it also presents unique challenges for property maintenance.
                </p>
                <p>
                  The salty sea air, frequent coastal winds, and variable weather conditions in Troon can 
                  accelerate the buildup of dirt, algae, and moss on exterior surfaces. Properties near the 
                  seafront, particularly those in areas like Fullarton, Barassie, and the town center, 
                  require more frequent and specialized cleaning to maintain their appearance and structural 
                  integrity. Our team understands these local conditions and uses appropriate cleaning methods 
                  and products that are safe for coastal environments.
                </p>
                <p>
                  Troon's diverse architecture, from traditional Victorian and Edwardian homes to modern 
                  developments, requires different cleaning approaches. Whether you're maintaining a historic 
                  property in the conservation area or a contemporary home in newer developments like 
                  Crosbie, we have the expertise to clean all types of exterior surfaces safely and effectively.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-6">
                Key Areas We Serve in Troon
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Town Center</h4>
                    <p className="text-sm text-gray-600 font-manrope">Main shopping area and residential properties</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Fullarton</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic residential area with period properties</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Barassie</h4>
                    <p className="text-sm text-gray-600 font-manrope">Coastal area with modern and traditional homes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Crosbie</h4>
                    <p className="text-sm text-gray-600 font-manrope">Newer residential developments</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Seafront</h4>
                    <p className="text-sm text-gray-600 font-manrope">Properties along the coastline</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Golf Course Area</h4>
                    <p className="text-sm text-gray-600 font-manrope">Properties near Royal Troon Golf Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-6">
                Why Choose Us in Troon?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600 font-manrope">
                      Based in Irvine, we understand the local climate and cleaning challenges specific to Troon and the surrounding area. 
                      Our team is familiar with the coastal conditions, local building materials, and the unique requirements of properties 
                      in Troon's various neighborhoods, from the historic town center to the modern developments.
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
                      Fast response times for Troon residents and businesses with flexible scheduling to suit your needs. 
                      We understand that Troon's busy summer season and golf tournament periods require flexible scheduling, 
                      and we work around your availability to minimize disruption to your daily routine.
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
                      Trusted by Troon homeowners and businesses for consistent, high-quality exterior cleaning results. 
                      We've built our reputation through reliable service delivery, whether you're a homeowner in Fullarton, 
                      a business owner in the town center, or managing a property near the golf course.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Coastal Property Specialists</h3>
                    <p className="text-gray-600 font-manrope">
                      Specialized knowledge in cleaning coastal properties affected by salt air, high humidity, and 
                      frequent weather changes. We use appropriate cleaning methods and eco-friendly products that 
                      are safe for the marine environment and won't damage your property's exterior surfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Our Troon Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Service Area</p>
                        <p className="text-gray-600 font-manrope">Troon and surrounding areas</p>
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

      {/* Local Landmarks & Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Troon's Local Landmarks & Our Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Famous Landmarks We Serve
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Royal Troon Golf Club</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties near this world-renowned golf course require special attention due to the 
                    open exposure to coastal elements. We provide gentle cleaning methods suitable for 
                    the prestigious residential areas surrounding the course.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Troon Harbour</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    The historic harbour area presents unique cleaning challenges with its proximity to 
                    the sea. We specialize in cleaning properties in this area, understanding the 
                    corrosive effects of salt air on building materials.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Troon Beach & Seafront</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties along the beautiful seafront require regular maintenance due to constant 
                    exposure to sea spray and coastal winds. Our coastal cleaning expertise ensures 
                    your property maintains its appearance year-round.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Local Business Areas
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Troon Town Center</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Commercial properties in the town center benefit from our professional cleaning 
                    services, helping maintain the town's attractive appearance for residents and 
                    visitors alike.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Portland Street & Ayr Road</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Main thoroughfares with mixed residential and commercial properties. We provide 
                    comprehensive cleaning services for both types of properties in these busy areas.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Marine Drive & Seafront Properties</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Luxury properties along Marine Drive require specialized cleaning techniques. 
                    Our experience with high-end coastal properties ensures exceptional results 
                    while protecting your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Services in Troon
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
                  Professional {service.name.toLowerCase()} services in Troon and surrounding areas. 
                  {service.name === "Roof Steam Cleaning" && " Essential for coastal properties exposed to salt air and algae growth."}
                  {service.name === "Render Softwashing" && " Perfect for Troon's traditional and modern properties with rendered exteriors."}
                  {service.name === "Driveway Cleaning" && " Ideal for properties near the golf course and seafront areas."}
                  {service.name === "Gutter Cleaning" && " Crucial maintenance for Troon's variable weather conditions."}
                  {service.name === "PVC White Cleaning" && " Restores the bright appearance of windows and doors affected by coastal conditions."}
                  {service.name === "Window Cleaning" && " Essential for properties with sea views and coastal exposure."}
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

      {/* Climate & Cleaning Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-8 text-center">
            Troon's Climate & Cleaning Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Coastal Weather Impact
              </h3>
              <div className="space-y-4 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Troon's coastal location on the Firth of Clyde creates unique cleaning challenges. The town 
                  experiences higher humidity levels, frequent sea mists, and constant exposure to salt-laden 
                  air from the Irish Sea. These conditions accelerate the growth of algae, moss, and lichen on 
                  exterior surfaces, particularly on north-facing walls and shaded areas.
                </p>
                <p>
                  The prevailing westerly winds carry salt particles that can corrode metal fixtures and cause 
                  staining on brickwork, render, and stone surfaces. Properties closest to the seafront, 
                  especially those along Marine Drive and the harbour area, require more frequent cleaning 
                  to maintain their appearance and structural integrity.
                </p>
                <p>
                  Troon's position also means it receives more rainfall than inland areas, with an average 
                  of 1,200mm annually. This increased moisture, combined with the salt air, creates ideal 
                  conditions for organic growth that can damage building materials over time.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Our Specialized Solutions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Salt Air Protection</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    We use specialized cleaning solutions that neutralize salt deposits and provide 
                    protective treatments to prevent future buildup on your property's exterior surfaces.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Algae & Moss Treatment</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Our eco-friendly treatments effectively remove and prevent the growth of algae, 
                    moss, and lichen that thrive in Troon's humid coastal environment.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Seasonal Maintenance</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    We recommend regular maintenance schedules tailored to Troon's seasonal weather 
                    patterns, ensuring your property stays clean year-round despite the challenging conditions.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Marine-Safe Products</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    All our cleaning products are environmentally safe and won't harm the local 
                    marine ecosystem, protecting both your property and Troon's beautiful coastline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-manrope font-normal text-gray-900 mb-4">
              Ready to Get Started in Troon?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on exterior cleaning services in Troon.
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

export default Troon;
