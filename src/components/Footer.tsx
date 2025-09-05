
import LazyImage from "@/components/ui/lazy-image";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <LazyImage 
                src="/lovable-uploads/logo.png" 
                webpSrc="/lovable-uploads/logo.webp"
                alt="Jimbo's Exterior Cleaning Logo" 
                className="h-8 w-auto"
                loading="eager"
              />
            </div>
            <p className="text-gray-400 font-manrope">
              Expert exterior cleaning services across Ayrshire. Roofs, render, driveways, gutters, PVC, and more—safe, effective, and reliable.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li><Link to="/services/roof-steam-cleaning" className="hover:text-white transition-colors">Roof Steam Cleaning</Link></li>
              <li><Link to="/services/render-softwashing" className="hover:text-white transition-colors">Render Softwashing</Link></li>
              <li><Link to="/services/driveway-cleaning" className="hover:text-white transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
              <li><Link to="/services/pvc-white-cleaning" className="hover:text-white transition-colors">PVC White Cleaning</Link></li>
              <li><Link to="/services/window-cleaning" className="hover:text-white transition-colors">Window Cleaning</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li><Link to="/locations/irvine" className="hover:text-white transition-colors">Irvine</Link></li>
              <li><Link to="/locations/kilmarnock" className="hover:text-white transition-colors">Kilmarnock</Link></li>
              <li><Link to="/locations/ayr" className="hover:text-white transition-colors">Ayr</Link></li>
              <li><Link to="/locations/troon" className="hover:text-white transition-colors">Troon</Link></li>
              <li className="text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</li>
              <li className="text-gray-500">Sat: 9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-manrope">
            © 2024 Jimbo's Exterior Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
