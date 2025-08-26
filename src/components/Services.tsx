
import { ArrowRight, Home, Wrench, Eye, Droplet, RefreshCw, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Roof Steam Cleaning",
      description: "Safe and effective steam cleaning to remove moss, algae, and dirt from your roof tiles.",
      link: "Get a free quote"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Render Softwashing",
      description: "Gentle softwashing for render surfaces, removing stains and organic growth without damage.",
      link: "Get a free quote"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-gray-600" />,
      title: "Driveway Cleaning",
      description: "Professional driveway cleaning to restore the look of your property's entrance.",
      link: "Get a free quote"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Gutter Cleaning",
      description: "Thorough gutter cleaning to keep your drainage systems clear and functional.",
      link: "Get a free quote"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "PVC White Cleaning",
      description: "Restore the shine to your PVC fascias, soffits, and gutters with our specialist cleaning.",
      link: "Get a free quote"
    },
    {
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
      title: "Window Cleaning",
      description: "Streak-free window cleaning for sparkling results every time.",
      link: "Get a free quote"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope text-gray-900 mb-4 font-normal"
          >
            Professional and quality<br />
            exterior cleaning services.
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-manrope text-gray-900 mb-3 font-normal">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-manrope mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors group"
                >
                  {service.link}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
