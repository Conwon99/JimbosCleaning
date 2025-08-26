
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Jimbo's Exterior Cleaning Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 font-manrope">
              Expert exterior cleaning services across Ayrshire. Roofs, render, driveways, gutters, PVC, and more—safe, effective, and reliable.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li>Roof Steam Cleaning</li>
              <li>Render Softwashing</li>
              <li>Driveway Cleaning</li>
              <li>Gutter Cleaning</li>
              <li>PVC White Cleaning</li>
              <li>Window Cleaning</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-manrope font-normal mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 font-manrope">
              <li>07919270128</li>
              <li>Serving all of Ayrshire</li>
              <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat: 9:00 AM - 4:00 PM</li>
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
