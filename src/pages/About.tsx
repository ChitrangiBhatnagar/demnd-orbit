import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Data Accuracy",
      description: "We believe clean data is the foundation of successful outbound campaigns."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your goals."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Continuously improving our technology to stay ahead of changing data challenges."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Former sales operations leader with 10+ years in B2B data quality."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Data scientist and engineer specializing in validation algorithms."
    },
    {
      name: "Michael Thompson",
      role: "VP of Customer Success",
      bio: "Dedicated to ensuring our clients achieve maximum ROI from clean data."
    }
  ];

  const stats = [
    { number: "99.5%", label: "Validation Accuracy" },
    { number: "10M+", label: "Contacts Validated" },
    { number: "500+", label: "Happy Customers" },
    { number: "35%", label: "Avg. Bounce Reduction" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            About Demandorbit
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Clean Data.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clean Outreach.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Founded in Charlotte, NC, we're on a mission to help businesses eliminate inaccurate 
            contact information and boost their outbound campaign success rates.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We believe that accurate contact data is the cornerstone of successful B2B sales and marketing. 
                Our mission is to provide the most reliable, comprehensive contact validation platform that 
                helps businesses connect with their prospects effectively.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded by sales operations professionals who experienced the frustration of poor data quality 
                firsthand, Demandorbit was built to solve the real-world challenges that sales and marketing 
                teams face every day.
              </p>
              <Button variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Visit Us in Charlotte, NC
              </Button>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals committed to data quality excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Charlotte's Leading Contact Verification Platform
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Based in the heart of Charlotte's thriving business district, we're proud to be part 
                of North Carolina's growing tech ecosystem.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <span>123 Business Boulevard, Charlotte, NC 28202</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3 h-5 w-5 text-primary" />
                  <span>Growing team of 15+ data quality experts</span>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground mb-6">
                We'd love to meet you in person. Schedule a visit to see our team in action.
              </p>
              <Button variant="cta">
                Schedule Office Visit
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://salescentri.com/about/?utm_source=demandorbit.com&utm_medium=about&utm_campaign=credibility_support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Learn about our partnership network →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience Clean Data?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our growing community of businesses that trust Demandorbit for accurate contact validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;