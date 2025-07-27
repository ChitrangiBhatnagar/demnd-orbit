import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      faqs: [
        {
          question: "How accurate is your email verification?",
          answer: "Our email verification maintains 99.5% accuracy through multi-layered validation including syntax checking, domain verification, mailbox existence verification, and role-based email detection. We use real-time API calls to ensure the most current validation status."
        },
        {
          question: "How quickly can I get started?",
          answer: "You can start validating contacts immediately with our free trial. Simply sign up, upload your contact list (CSV or Excel), and begin validation. No setup or configuration required."
        },
        {
          question: "Do I need a credit card for the free trial?",
          answer: "No credit card is required for our 14-day free trial. You can validate up to 100 contacts and explore all features before deciding on a paid plan."
        }
      ]
    },
    {
      title: "Features & Functionality",
      icon: "⚙️",
      faqs: [
        {
          question: "What integrations are supported?",
          answer: "We integrate with all major CRM and marketing platforms including HubSpot, Salesforce, Pipedrive, Mailchimp, Outreach, and SalesLoft. We also provide API access for custom integrations."
        },
        {
          question: "Can I validate contacts in bulk?",
          answer: "Yes, our platform supports bulk validation of thousands of contacts simultaneously. You can upload CSV/Excel files or use our API for batch processing with real-time progress tracking."
        },
        {
          question: "What contact enrichment data do you provide?",
          answer: "We enrich contacts with company information, job titles, seniority levels, industry classification, company size, social media profiles, and additional contact details when available."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: "💰",
      faqs: [
        {
          question: "Can I change plans anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly."
        },
        {
          question: "What happens if I exceed my validation limit?",
          answer: "We'll notify you when you're approaching your monthly limit. You can either upgrade your plan or purchase additional validations. Your service won't be interrupted."
        },
        {
          question: "Do you offer annual discounts?",
          answer: "Yes, annual plans save 20% compared to monthly billing. All features remain the same with better value for long-term commitments."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      faqs: [
        {
          question: "What support do you provide during setup?",
          answer: "All customers receive email support. Professional plan users get priority support, and Enterprise customers are assigned a dedicated support manager for setup assistance and ongoing needs."
        },
        {
          question: "How do I integrate with my existing CRM?",
          answer: "We provide step-by-step integration guides for all supported platforms. Our API documentation includes code examples, and our support team can assist with custom integrations."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we maintain enterprise-grade security with SOC2 certification, GDPR compliance, data encryption in transit and at rest, and strict privacy controls. We never share or sell your data."
        }
      ]
    },
    {
      title: "Data Quality & Compliance",
      icon: "🛡️",
      faqs: [
        {
          question: "How do you ensure GDPR compliance?",
          answer: "We're fully GDPR compliant with data processing agreements, privacy controls, right to erasure, data portability, and consent management. All data is processed securely within approved regions."
        },
        {
          question: "What's your data retention policy?",
          answer: "Validated contact data is retained according to your plan terms and privacy preferences. You can request data deletion at any time, and we comply with all data retention regulations."
        },
        {
          question: "Do you validate international contacts?",
          answer: "Yes, our platform validates email addresses globally and provides contact enrichment for companies worldwide, with specific expertise in North American and European markets."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Help Center
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about contact validation, features, pricing, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search FAQs..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Collapsible key={faqIndex}>
                      <Card className="hover:shadow-elegant transition-all duration-300">
                        <CollapsibleTrigger
                          className="w-full"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between text-left">
                              <h3 className="font-semibold text-lg pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown 
                                className={`h-5 w-5 text-primary transition-transform ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="border-t pt-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or browse categories above
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our support team is here to help you get the most out of Demandorbit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant answers from our support team
                </p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <Button variant="outline" size="sm">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <a 
              href="https://salescentri.com/faq/?utm_source=demandorbit.com&utm_medium=faq&utm_campaign=data_quality_support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Advanced data quality support resources →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Try Demandorbit?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start validating your contacts today with our free trial.
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

export default FAQ;