import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-300">Stadium Road, near Nawaz Sharif Stadium, Daska</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@flarasports.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                info@flarasports.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+923080060888" className="text-gray-300 hover:text-blue-400 transition-colors">
                +923080060888
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/faizan__flarasports_manufactur?igsh=MWZiamk3MjVnbmUzNA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
