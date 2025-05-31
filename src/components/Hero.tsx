
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-medium text-slate-900 mb-6 tracking-tight">
            MK.AI
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Your intelligent voice assistant that never lets you miss an important meeting. 
            Get called when it matters, call back when you need details.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Smart Reminders</h3>
            <p className="text-slate-600 text-center">Get called automatically before your important meetings</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Calendar Sync</h3>
            <p className="text-slate-600 text-center">Seamlessly integrates with your existing calendar</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Voice Queries</h3>
            <p className="text-slate-600 text-center">Call MK.AI anytime to get meeting details instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
