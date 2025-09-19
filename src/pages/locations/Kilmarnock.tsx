import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Clock, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Kilmarnock = () => {
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
              Exterior Cleaning Services in Kilmarnock
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional exterior cleaning services in Kilmarnock, Ayrshire. From roof steam cleaning to driveway cleaning, 
              we provide comprehensive cleaning solutions for homes and businesses across Kilmarnock, outer Glasgow, and surrounding areas. 
              Serving this historic town, we understand the unique challenges of maintaining properties in this 
              vibrant community with its rich industrial heritage and modern developments.
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
                About Kilmarnock, Ayrshire
              </h2>
              <div className="space-y-6 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Kilmarnock is a historic town located in East Ayrshire, Scotland, with a rich industrial heritage dating back 
                  to the 17th century. The town is known for its traditional industries including textiles, engineering, and 
                  whisky production, and has evolved into a modern commercial and residential center. Kilmarnock's diverse 
                  architecture ranges from traditional Victorian and Edwardian buildings to modern developments, creating 
                  unique cleaning challenges for property owners.
                </p>
                <p>
                  The town's industrial past has left a legacy of traditional stone buildings and Victorian architecture, 
                  particularly in areas like the town center, Riccarton, and New Farm Loch. These historic properties 
                  require careful cleaning methods that preserve their character while maintaining their appearance. 
                  Modern developments in areas like Bellfield, Onthank, and Grange require different cleaning approaches 
                  with contemporary materials and designs.
                </p>
                <p>
                  Kilmarnock's position as a major commercial center for East Ayrshire means many properties experience 
                  high foot traffic and environmental pollution. The town's proximity to major transport links, including 
                  the A71 and A76 roads, contributes to increased dirt and grime buildup on exterior surfaces, making 
                  regular professional cleaning essential for maintaining property values and appearance.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-6">
                Key Areas We Serve in Kilmarnock
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Town Center</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic core with Victorian and Edwardian buildings</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Riccarton</h4>
                    <p className="text-sm text-gray-600 font-manrope">Residential area with mixed property types</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Bellfield</h4>
                    <p className="text-sm text-gray-600 font-manrope">Modern residential developments</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Onthank</h4>
                    <p className="text-sm text-gray-600 font-manrope">Suburban residential area</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Grange</h4>
                    <p className="text-sm text-gray-600 font-manrope">Mixed residential and commercial area</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">New Farm Loch</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic area with traditional properties</p>
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
                Why Choose Us in Kilmarnock?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Kilmarnock Industrial Expertise</h3>
                    <p className="text-gray-600 font-manrope">
                      Based in Irvine, we understand the unique challenges of Kilmarnock's industrial heritage and modern development. 
                      Our team is familiar with the town's diverse neighborhoods, from the historic town center to modern developments 
                      in Bellfield and Onthank, ensuring the right cleaning approach for every property type.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Quick Kilmarnock Response</h3>
                    <p className="text-gray-600 font-manrope">
                      Fast response times for Kilmarnock residents and businesses with flexible scheduling to suit your needs. 
                      We understand Kilmarnock's busy commercial environment and work around your schedule to minimize 
                      disruption to your daily routine.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Trusted Kilmarnock Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Trusted by Kilmarnock homeowners and businesses for consistent, high-quality exterior cleaning results. 
                      We've built our reputation serving properties from the historic town center to modern developments 
                      in Grange, ensuring every Kilmarnock property receives the attention it deserves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Industrial Heritage Specialists</h3>
                    <p className="text-gray-600 font-manrope">
                      Kilmarnock's rich industrial heritage means many properties require specialized care. We understand 
                      the unique challenges of traditional industrial buildings, Victorian architecture, and heritage properties, 
                      using appropriate cleaning methods that preserve their character while maintaining their appearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Our Kilmarnock Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Service Area</p>
                        <p className="text-gray-600 font-manrope">Kilmarnock and surrounding areas</p>
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
            Kilmarnock's Local Landmarks & Our Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Historic Landmarks We Serve
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Kilmarnock Town Center</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties in the historic town center require specialized cleaning due to high foot traffic and 
                    environmental pollution. We provide gentle cleaning methods suitable for Victorian and Edwardian buildings.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">New Farm Loch Historic Area</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    The historic New Farm Loch area features traditional properties that require careful maintenance. 
                    Our heritage cleaning expertise ensures these properties maintain their historic character.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Industrial Heritage Buildings</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties with industrial heritage need specialized care to preserve their historic appearance. 
                    We use appropriate cleaning methods that respect the area's industrial heritage status.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Modern Development Areas
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Bellfield Modern Developments</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Modern residential developments in Bellfield benefit from our comprehensive cleaning services, 
                    ensuring these newer properties maintain their pristine appearance.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Onthank Residential Area</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Suburban residential areas in Onthank benefit from our flexible cleaning approach, 
                    handling everything from traditional homes to modern developments.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Grange Business District</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Commercial properties in Grange benefit from our professional cleaning services, 
                    helping maintain Kilmarnock's attractive business environment.
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
            Services in Kilmarnock
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
                  Professional {service.name.toLowerCase()} services in Kilmarnock and surrounding areas. 
                  {service.name === "Roof Steam Cleaning" && " Essential for Kilmarnock's mix of traditional and modern properties."}
                  {service.name === "Render Softwashing" && " Perfect for both historic and contemporary rendered buildings in Kilmarnock."}
                  {service.name === "Driveway Cleaning" && " Ideal for properties in busy areas like the town center and business districts."}
                  {service.name === "Gutter Cleaning" && " Crucial maintenance for Kilmarnock's variable weather conditions."}
                  {service.name === "PVC White Cleaning" && " Restores the bright appearance of windows and doors in all Kilmarnock areas."}
                  {service.name === "Window Cleaning" && " Essential for both heritage properties and modern developments."}
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
            Kilmarnock's Climate & Cleaning Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Industrial & Urban Impact
              </h3>
              <div className="space-y-4 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Kilmarnock's location in East Ayrshire creates unique cleaning challenges. The town experiences 
                  moderate humidity levels and variable weather conditions that can accelerate the growth of algae, 
                  moss, and lichen on exterior surfaces. The town's industrial heritage has left a legacy of 
                  traditional stone buildings that require specialized cleaning approaches.
                </p>
                <p>
                  The town's position as a major commercial center means increased traffic pollution from the A71 and A76 roads, 
                  leading to faster buildup of dirt and grime on properties near these major routes. Areas like 
                  the town center and Grange experience higher levels of environmental pollution, requiring 
                  more frequent cleaning to maintain property appearance.
                </p>
                <p>
                  Kilmarnock's mix of historic and modern properties presents different challenges. Traditional stone 
                  buildings in the town center and New Farm Loch area are more susceptible to weathering and 
                  organic growth, while modern developments in Bellfield and Onthank may have different material 
                  requirements and cleaning needs.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Our Specialized Solutions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Industrial Heritage Care</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Specialized cleaning methods for Kilmarnock's historic industrial buildings, preserving their character 
                    while maintaining their appearance and structural integrity.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Traffic Pollution Treatment</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Effective cleaning solutions for properties affected by road traffic pollution, 
                    particularly in busy areas like the town center and business districts.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Mixed Property Expertise</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Experience with both traditional and modern building materials, ensuring the right 
                    cleaning approach for every type of property in Kilmarnock.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Commercial Property Care</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Specialized cleaning services for commercial properties in Kilmarnock's business districts, 
                    helping maintain the town's professional appearance.
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
              Ready to Get Started in Kilmarnock?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on exterior cleaning services in Kilmarnock.
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

export default Kilmarnock;
