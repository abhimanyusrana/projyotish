import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const tiers = [
  {
    name: "Trial",
    icon: Zap,
    description: "Experience the power of Vedic astrology",
    duration: "3 days",
    features: [
      "Personalized Kundli analysis",
      "Profile-based insights",
      "Daily ideal time slots",
      "WhatsApp & iMessage access",
    ],
    highlight: false,
    cta: "Start Free Trial",
  },
  {
    name: "Flow",
    icon: Sparkles,
    description: "For consistent daily guidance",
    duration: "1 month",
    features: [
      "Everything in Trial",
      "Daily ideal time slots for 1 month",
      "2 personalized questions/month",
      "Priority response time",
    ],
    highlight: true,
    cta: "Choose Flow",
  },
  {
    name: "Karma",
    icon: Crown,
    description: "Deep karmic insights & guidance",
    duration: "1 month",
    features: [
      "Everything in Flow",
      "10 personalized questions/month",
      "Deep karmic analysis",
      "Business & relationship insights",
      "Remedial suggestions",
    ],
    highlight: false,
    cta: "Choose Karma",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the guidance level that matches your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-primary text-primary-foreground shadow-glow scale-105 z-10"
                  : "bg-background shadow-soft border border-border"
              } hover:shadow-elevated transition-all duration-300`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-body font-semibold shadow-soft">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    tier.highlight ? "bg-primary-foreground/20" : "bg-accent/20"
                  }`}
                >
                  <tier.icon
                    className={`w-7 h-7 ${tier.highlight ? "text-primary-foreground" : "text-primary"}`}
                  />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                <p
                  className={`font-body text-sm ${
                    tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {tier.description}
                </p>
                
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-body font-medium ${
                      tier.highlight
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tier.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        tier.highlight ? "text-accent" : "text-secondary"
                      }`}
                    />
                    <span
                      className={`font-body text-sm ${
                        tier.highlight ? "text-primary-foreground/90" : "text-foreground/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-body font-semibold transition-all duration-300 ${
                  tier.highlight
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
