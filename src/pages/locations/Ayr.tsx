import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Clock, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Ayr = () => {
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
              Exterior Cleaning Services in Ayr
            </h1>
            <p className="text-xl text-gray-600 font-manrope mb-8 leading-relaxed">
              Professional exterior cleaning services in Ayr, Ayrshire. From roof steam cleaning to driveway cleaning, 
              we provide comprehensive cleaning solutions for homes and businesses across Ayr, outer Glasgow, and surrounding areas. 
              Serving the historic county town of Ayr, we understand the unique challenges of maintaining properties 
              in this beautiful coastal town and the surrounding Ayrshire region.
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
                About Ayr, Ayrshire
              </h2>
              <div className="space-y-6 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Ayr is the historic county town of Ayrshire, located on the west coast of Scotland at the mouth of the River Ayr. 
                  This charming seaside town has a rich history dating back to the 12th century and is renowned for its beautiful 
                  beaches, historic architecture, and vibrant town center. Ayr's coastal location and historic significance make it 
                  a popular destination for both residents and visitors, but also present unique challenges for property maintenance.
                </p>
                <p>
                  The town's diverse architecture ranges from traditional Georgian and Victorian buildings in the town center to 
                  modern developments in areas like Alloway, Doonfoot, and Whitletts. Properties near the seafront, particularly 
                  those along the Esplanade and in the historic Auld Kirk area, require specialized cleaning due to constant 
                  exposure to salt air and coastal weather conditions.
                </p>
                <p>
                  Ayr's position as a major retail and business center for South Ayrshire means many properties experience high 
                  foot traffic and environmental pollution. The town's proximity to major transport links, including the A77 and 
                  A70 roads, contributes to increased dirt and grime buildup on exterior surfaces, making regular professional 
                  cleaning essential for maintaining property values and appearance.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-6">
                Key Areas We Serve in Ayr
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Town Center</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic core with Georgian and Victorian buildings</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Alloway</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic village with traditional properties</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Doonfoot</h4>
                    <p className="text-sm text-gray-600 font-manrope">Coastal residential area with sea views</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Whitletts</h4>
                    <p className="text-sm text-gray-600 font-manrope">Modern residential developments</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Seafront</h4>
                    <p className="text-sm text-gray-600 font-manrope">Properties along the Esplanade and beach</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-manrope font-normal text-gray-900 mb-2">Auld Kirk</h4>
                    <p className="text-sm text-gray-600 font-manrope">Historic area with traditional buildings</p>
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
                Why Choose Us in Ayr?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Ayr Coastal Expertise</h3>
                    <p className="text-gray-600 font-manrope">
                      Based in Irvine, we understand the unique coastal challenges of Ayr's seaside location. Our team is familiar 
                      with the salt air effects, coastal weather patterns, and the specific cleaning needs of properties from the 
                      town center to the seafront areas like Doonfoot and the Esplanade.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Quick Ayr Response</h3>
                    <p className="text-gray-600 font-manrope">
                      Fast response times for Ayr residents and businesses with flexible scheduling to suit your needs. 
                      We understand Ayr's busy summer season and tourist periods, working around your schedule to minimize 
                      disruption to your daily routine.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Trusted Ayr Service</h3>
                    <p className="text-gray-600 font-manrope">
                      Trusted by Ayr homeowners and businesses for consistent, high-quality exterior cleaning results. 
                      We've built our reputation serving properties from the historic town center to modern developments 
                      in Whitletts, ensuring every Ayr property receives the attention it deserves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-normal text-gray-900 mb-2">Historic Property Specialists</h3>
                    <p className="text-gray-600 font-manrope">
                      Ayr's rich history means many properties require specialized care. We understand the delicate nature 
                      of Georgian and Victorian buildings, traditional stone properties, and heritage buildings, using 
                      appropriate cleaning methods that preserve their historic character.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                    Our Ayr Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#526bb0]" />
                      <div>
                        <p className="font-manrope font-normal text-gray-900">Service Area</p>
                        <p className="text-gray-600 font-manrope">Ayr and surrounding areas</p>
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
            Ayr's Local Landmarks & Our Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Historic Landmarks We Serve
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Ayr Town Center</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties in the historic town center require specialized cleaning due to high foot traffic and 
                    environmental pollution. We provide gentle cleaning methods suitable for Georgian and Victorian buildings.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Alloway & Burns Heritage</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    The historic village of Alloway, home to Robert Burns, features traditional properties that require 
                    careful maintenance. Our heritage cleaning expertise ensures these properties maintain their historic character.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Auld Kirk Area</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties near the historic Auld Kirk need specialized care to preserve their historic appearance. 
                    We use appropriate cleaning methods that respect the area's heritage status.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Coastal & Modern Areas
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Ayr Seafront & Esplanade</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Properties along the beautiful seafront require regular maintenance due to constant exposure to 
                    sea spray and coastal winds. Our coastal cleaning expertise ensures your property maintains its appearance.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Doonfoot Coastal Area</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Coastal properties in Doonfoot with sea views require specialized cleaning due to salt air exposure. 
                    We provide appropriate cleaning methods for these premium coastal properties.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Whitletts Modern Developments</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Modern residential developments in Whitletts benefit from our comprehensive cleaning services, 
                    ensuring these newer properties maintain their pristine appearance.
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
            Services in Ayr
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
                  Professional {service.name.toLowerCase()} services in Ayr and surrounding areas. 
                  {service.name === "Roof Steam Cleaning" && " Essential for Ayr's coastal properties exposed to salt air and algae growth."}
                  {service.name === "Render Softwashing" && " Perfect for both historic and modern rendered buildings in Ayr."}
                  {service.name === "Driveway Cleaning" && " Ideal for properties in busy areas like the town center and seafront."}
                  {service.name === "Gutter Cleaning" && " Crucial maintenance for Ayr's coastal weather conditions."}
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
            Ayr's Climate & Cleaning Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-manrope font-normal text-gray-900 mb-4">
                Coastal Weather Impact
              </h3>
              <div className="space-y-4 text-gray-600 font-manrope leading-relaxed">
                <p>
                  Ayr's coastal location on the Firth of Clyde creates unique cleaning challenges. The town experiences 
                  higher humidity levels, frequent sea mists, and constant exposure to salt-laden air from the Irish Sea. 
                  These conditions accelerate the growth of algae, moss, and lichen on exterior surfaces, particularly 
                  on north-facing walls and shaded areas.
                </p>
                <p>
                  The prevailing westerly winds carry salt particles that can corrode metal fixtures and cause staining 
                  on brickwork, render, and stone surfaces. Properties closest to the seafront, especially those along 
                  the Esplanade and in Doonfoot, require more frequent cleaning to maintain their appearance and 
                  structural integrity.
                </p>
                <p>
                  Ayr's position as a major tourist destination means increased foot traffic and environmental pollution 
                  in the town center, particularly during the summer months. The town's proximity to major transport 
                  links, including the A77 and A70 roads, contributes to increased dirt and grime buildup on exterior surfaces.
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
                    We use specialized cleaning solutions that neutralize salt deposits and provide protective treatments 
                    to prevent future buildup on your property's exterior surfaces.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Heritage Building Care</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    Specialized cleaning methods for Ayr's historic buildings, preserving their character while 
                    maintaining their appearance and structural integrity.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Tourist Season Maintenance</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    We work around Ayr's busy tourist seasons, providing flexible scheduling to minimize disruption 
                    to your business or home during peak periods.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-manrope font-normal text-gray-900 mb-2">Marine-Safe Products</h4>
                  <p className="text-gray-600 font-manrope text-sm">
                    All our cleaning products are environmentally safe and won't harm the local marine ecosystem, 
                    protecting both your property and Ayr's beautiful coastline.
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
              Ready to Get Started in Ayr?
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Contact us today for a free quote on exterior cleaning services in Ayr.
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

export default Ayr;
