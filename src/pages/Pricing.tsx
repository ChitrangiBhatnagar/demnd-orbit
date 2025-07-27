import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, X } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "1,000 validations/month",
        "Real-time email verification",
        "Basic contact enrichment",
        "CSV import/export",
        "Email support",
        "Basic analytics"
      ],
      notIncluded: [
        "CRM integrations",
        "Bulk processing",
        "Custom API access",
        "Priority support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Most popular for growing sales teams",
      monthlyPrice: 99,
      annualPrice: 82,
      features: [
        "10,000 validations/month",
        "Real-time email verification",
        "Advanced contact enrichment",
        "CRM integrations",
        "Bulk processing",
        "API access",
        "Priority support",
        "Advanced analytics",
        "Team collaboration"
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large teams with custom needs",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited validations",
        "Real-time email verification",
        "Premium contact enrichment",
        "All CRM integrations",
        "Custom integrations",
        "Advanced bulk processing",
        "Full API access",
        "Dedicated support manager",
        "Custom analytics",
        "SOC2 compliance",
        "SLA guarantee"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const getPlanPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === "Custom") return "Custom";
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `$${price}`;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that fits your team size and validation needs. All plans include our core features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`text-sm ${isAnnual ? 'font-semibold' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-elegant transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">
                      {getPlanPrice(plan)}
                      {plan.monthlyPrice !== "Custom" && (
                        <span className="text-lg font-normal text-muted-foreground">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.monthlyPrice !== "Custom" && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ${plan.monthlyPrice}/month billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button 
                    variant={plan.popular ? "cta" : "outline"}
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <X className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <a 
              href="https://salescentri.com/pricing/?utm_source=demandorbit.com&utm_medium=pricing&utm_campaign=crm_validation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Compare with other CRM validation solutions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What happens if I exceed my validation limit?</h3>
              <p className="text-muted-foreground">We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional validations.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-muted-foreground">Yes, our Enterprise plan can be customized to meet your specific needs, including custom integrations and dedicated support.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-muted-foreground">No setup fees for any plan. You only pay for your monthly or annual subscription.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams who trust Demandorbit for accurate contact validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;