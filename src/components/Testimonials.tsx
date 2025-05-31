
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content: "MK.AI has completely transformed how I manage my schedule. I never miss important meetings anymore, and the voice interface is incredibly intuitive.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "StartupX",
      content: "The intelligence behind MK.AI is remarkable. It learns my preferences and adapts perfectly to my workflow. It's like having a personal assistant that never sleeps.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Consultant",
      company: "Independent",
      content: "As someone who juggles multiple clients, MK.AI keeps me organized and punctual. The call reminders are perfectly timed, and I love being able to call for quick updates.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-thin text-slate-900 mb-6 tracking-tight">
            Trusted by professionals worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            See how MK.AI is helping people stay organized and never miss what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-medium text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
