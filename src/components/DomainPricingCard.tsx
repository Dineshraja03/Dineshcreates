
import { AlertCircle, Globe } from 'lucide-react';

const DomainPricingCard = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Custom Domain Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <AlertCircle className="text-amber-500" size={20} />
                  Additional Domain Costs
                </h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span>.com Domain</span>
                    <span className="font-medium text-primary">₹800-1,200/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span>.in Domain</span>
                    <span className="font-medium text-primary">₹500-800/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span>Premium Domains</span>
                    <span className="font-medium text-primary">₹1,500+/year</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Free Domain Alternative</h4>
                <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-600 mb-2">
                    <strong>Free domains come with a subdomain:</strong>
                  </p>
                  <p className="text-sm text-gray-500 font-mono bg-gray-100 p-2 rounded">
                    yourwebsite.vercel.app
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    This includes the platform watermark but is completely free to use.
                  </p>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Domain renewal is yearly subscription-based</p>
                  <p>• SSL certificate included for free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainPricingCard;
