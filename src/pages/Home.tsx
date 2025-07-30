import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Target, ArrowRight, Star } from "lucide-react";
import heroDashboard from "@/assets/canvas-dashboard.jpg";
import validationProcess from "@/assets/canvas-process.jpg";

const Home = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Real-time Validation",
      description: "Verify email addresses instantly with 99.5% accuracy"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Data Enrichment",
      description: "Add company details, roles, and industry information"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly connect with HubSpot, Salesforce, and more"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow SaaS",
      role: "Marketing Director",
      content: "Reduced our email bounce rate by 35% within 2 weeks. Game changer!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthLabs",
      role: "Sales Manager",
      content: "40% higher email deliverability transformed our outbound campaigns.",
      rating: 5
    },
    {
      name: "Emma Davis",
      company: "CloudSync",
      role: "VP of Sales",
      content: "The contact enrichment feature saves us 10+ hours per week.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  #1 Contact Validation Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Validate Contacts.{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Accelerate Outbound.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Ensure your B2B contacts are accurate, enriched, and ready for action. 
                  Reduce bounce rates and boost campaign success rates.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/pricing" target="_blank" rel="noopener noreferrer">
                    Get Pricing
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroDashboard}
                alt="Contact validation dashboard interface"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                99.5% Accuracy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Demandorbit?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced validation technology ensures your contact data is clean, 
              accurate, and ready to drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={validationProcess}
                alt="Contact validation process"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  How It Works
                </h2>
                <p className="text-xl text-muted-foreground">
                  Simple, fast, and reliable contact validation in three steps.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Upload Your Contacts</h3>
                    <p className="text-muted-foreground">Import from CSV, Excel, or connect your CRM directly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI-Powered Validation</h3>
                    <p className="text-muted-foreground">Our advanced algorithms verify and enrich your contact data</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Export Clean Data</h3>
                    <p className="text-muted-foreground">Download verified contacts or sync back to your CRM</p>
                  </div>
                </div>
              </div>

              <Button variant="cta" size="lg" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                  See Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Growing Teams
            </h2>
            <p className="text-xl text-muted-foreground">
              See how teams are improving their outbound success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Clean Your Contact Data?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of teams who trust Demandorbit for accurate contact validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;