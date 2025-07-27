import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Users, Database, Zap, Shield, Globe, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Real-time Email Verification",
      description: "Validate email addresses instantly with 99.5% accuracy using advanced algorithms and real-time checks.",
      benefits: ["Syntax validation", "Domain verification", "Mailbox existence check", "Role-based detection"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Contact Enrichment",
      description: "Enhance your contact data with company information, job titles, industry details, and social profiles.",
      benefits: ["Company details", "Job titles & seniority", "Industry classification", "Social media profiles"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "CRM Integrations",
      description: "Seamlessly connect with your existing tools and workflows for automated contact validation.",
      benefits: ["HubSpot integration", "Salesforce connector", "Pipedrive sync", "Custom API access"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Bulk Processing",
      description: "Process thousands of contacts simultaneously with our high-speed validation engine.",
      benefits: ["CSV/Excel import", "API batch processing", "Real-time progress tracking", "Detailed reporting"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade security with GDPR compliance and SOC2 certification.",
      benefits: ["GDPR compliant", "SOC2 certified", "Data encryption", "Privacy controls"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your contact data quality and validation results.",
      benefits: ["Quality scoring", "Bounce rate predictions", "Campaign analytics", "Custom dashboards"]
    }
  ];

  const integrations = [
    { name: "HubSpot", logo: "🔗" },
    { name: "Salesforce", logo: "⚡" },
    { name: "Pipedrive", logo: "📊" },
    { name: "Mailchimp", logo: "📧" },
    { name: "Outreach", logo: "🎯" },
    { name: "SalesLoft", logo: "📈" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Powerful Features
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contact Validation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive tools to ensure your contact data is accurate, enriched, and ready to drive results.
          </p>
          <Button variant="hero" size="lg">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a streamlined workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <p className="font-medium">{integration.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Need a custom integration?</p>
            <Button variant="outline">
              Contact Our Team
            </Button>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://salescentri.com/features/?utm_source=demandorbit.com&utm_medium=features&utm_campaign=contact_validation_features"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Learn more about our enterprise features →
            </a>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See It in Action
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a personalized demo to see how Demandorbit can transform your contact data quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg">
              View Interactive Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;