
import { Clock, Brain, Shield, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-6 tracking-tight">
            Intelligence that works for you
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            MK.AI learns your preferences and adapts to your schedule, ensuring you're always prepared for what's next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Perfect Timing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get called at the optimal time before your meetings. MK.AI considers travel time, 
                  meeting importance, and your personal preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Learning Intelligence</h3>
                <p className="text-slate-600 leading-relaxed">
                  The more you use MK.AI, the smarter it becomes. It learns your patterns 
                  and adapts to provide increasingly personalized assistance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Privacy First</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your calendar data is encrypted and secure. MK.AI only accesses what's necessary 
                  to provide you with the best service.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-medium text-slate-900 mb-4">Always Connected</h4>
                <p className="text-slate-600">
                  MK.AI works 24/7 to ensure you never miss what matters most
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
