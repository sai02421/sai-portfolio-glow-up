
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Mail size={32} className="text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsletter</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get weekly insights on product management, UX design, and building digital products that matter.
          </p>
        </div>
        
        <div className="section-card p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">What you'll get:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Weekly product teardowns and UX analysis
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Insights from real product management experiences
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Tips for building products users actually want
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Early access to case studies and resources
              </li>
            </ul>
          </div>
          
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <Button type="submit" className="cta-button w-full text-lg py-3">
              <Send size={18} className="mr-2" />
              Subscribe to Newsletter
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
