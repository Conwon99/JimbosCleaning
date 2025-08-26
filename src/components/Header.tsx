
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = () => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto max-w-5xl py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Jimbo's Exterior Cleaning Logo" 
              className="h-20 w-auto -my-2"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handlePhoneClick}
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-[#526bb0] transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span className="font-manrope font-normal text-[#526bb0]">07919270128</span>
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal"
            >
              Get a free quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
