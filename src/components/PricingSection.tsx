
import { useState } from 'react';
import { Check, PartyPopper } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

const pricingPlans = [
  {
    name: "Basic",
    price: 1999,
    description: "Perfect for landing pages or simple websites",
    features: [
      "Single page website",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
      "2 rounds of revisions",
      "1 week delivery"
    ],
    isPopular: false
  },
  {
    name: "Standard",
    price: 4999,
    description: "Ideal for businesses needing a professional web presence",
    features: [
      "3-5 page website",
      "Responsive design",
      "Advanced SEO optimization",
      "Contact form",
      "Social media integration",
      "Content management system",
      "4 rounds of revisions",
      "2 weeks delivery"
    ],
    isPopular: true
  },
  {
    name: "Premium",
    price: 9999,
    description: "Complete custom solution for growing businesses",
    features: [
      "Custom UI/UX design",
      "Full-stack development",
      "Dynamic content",
      "Backend integration",
      "Custom features & integrations",
      "Advanced SEO & analytics",
      "Unlimited revisions",
      "4 weeks delivery"
    ],
    isPopular: false
  }
];

const PricingSection = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<(typeof pricingPlans)[0] | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handlePlanClick = (plan: typeof pricingPlans[0]) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlan) return;
    
    // Create WhatsApp URL with form and plan data
    const whatsappNumber = "919150256608"; // format: country code + number without +
    const message = `🌟 *New Project Request* 🌟%0A%0A*Plan:* ${selectedPlan.name} (${formattedPrice(selectedPlan.price)})%0A%0A*Client Details:*%0AName: ${formData.name}%0AEmail: ${formData.email}%0A%0A*Project Requirements:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Close the form dialog and open thank you dialog
    setIsDialogOpen(false);
    setIsThankYouDialogOpen(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">Transparent pricing options to suit different needs and budgets</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 animate-fade-in ${
                plan.isPopular 
                  ? 'shadow-xl border-2 border-primary transform scale-105 md:scale-110 z-10' 
                  : 'shadow-lg border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.isPopular && (
                <div className="bg-primary text-white text-center py-2 font-medium">
                  Recommended
                </div>
              )}
              
              <div className={`p-8 ${plan.isPopular ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : 'bg-white'} flex-grow flex flex-col`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{formattedPrice(plan.price)}</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="mt-0.5 bg-green-100 p-1 rounded-full">
                        <Check size={14} className="text-green-600" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePlanClick(plan)} 
                  className={`w-full text-center py-3 px-6 rounded-md font-medium transition-all ${
                    plan.isPopular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book {selectedPlan?.name} Plan</DialogTitle>
            <DialogDescription>
              Fill in your details below to book the {selectedPlan?.name} plan at {selectedPlan ? formattedPrice(selectedPlan.price) : ''}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Project Requirements
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tell me about your project requirements..."
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Request
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Thank You Dialog */}
      <Dialog open={isThankYouDialogOpen} onOpenChange={setIsThankYouDialogOpen}>
        <DialogContent className="sm:max-w-[425px] text-center">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-5xl mb-4 animate-bounce">
              <PartyPopper className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-gray-600">
              Your request has been sent successfully. I'll get back to you shortly to discuss your project.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
