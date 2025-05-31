
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
          Ready to never miss another meeting?
        </h2>
        <p className="text-xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
          Join thousands of professionals who trust MK.AI to keep them organized and on time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            <Phone className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-light text-white mb-2">14-day</div>
            <div className="text-blue-200">free trial</div>
          </div>
          <div>
            <div className="text-3xl font-light text-white mb-2">No</div>
            <div className="text-blue-200">setup required</div>
          </div>
          <div>
            <div className="text-3xl font-light text-white mb-2">24/7</div>
            <div className="text-blue-200">support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
