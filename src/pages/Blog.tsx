import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Hidden Cost of Bad Contact Data: A $100M Problem",
    excerpt: "Discover how poor contact data quality is costing B2B companies millions in lost revenue and wasted marketing spend.",
    readTime: "8 min read",
    date: "Jan 15, 2024",
    category: "Data Quality",
    image: "📊"
  };

  const blogPosts = [
    {
      title: "How Contact Validation Boosts Your B2B Campaign ROI",
      excerpt: "Learn the direct correlation between contact data quality and campaign performance with real case studies.",
      readTime: "6 min read",
      date: "Jan 12, 2024",
      category: "ROI",
      image: "🎯"
    },
    {
      title: "Email Deliverability Best Practices for 2024",
      excerpt: "Stay ahead of changing email regulations and improve your inbox placement rates with these proven strategies.",
      readTime: "5 min read",
      date: "Jan 10, 2024",
      category: "Email Marketing",
      image: "📧"
    },
    {
      title: "CRM Data Hygiene: A Complete Guide",
      excerpt: "Step-by-step process to clean up your CRM data and maintain high-quality contact information.",
      readTime: "10 min read",
      date: "Jan 8, 2024",
      category: "CRM",
      image: "🔧"
    },
    {
      title: "GDPR and Contact Validation: What You Need to Know",
      excerpt: "Navigate data privacy regulations while maintaining effective contact validation processes.",
      readTime: "7 min read",
      date: "Jan 5, 2024",
      category: "Compliance",
      image: "🛡️"
    },
    {
      title: "Sales Prospecting in 2024: Quality Over Quantity",
      excerpt: "Why focusing on validated, high-quality contacts beats mass outreach every time.",
      readTime: "6 min read",
      date: "Jan 3, 2024",
      category: "Sales",
      image: "⭐"
    },
    {
      title: "Integration Guide: Demandorbit + HubSpot",
      excerpt: "Complete setup guide for seamless contact validation within your HubSpot workflows.",
      readTime: "4 min read",
      date: "Dec 28, 2023",
      category: "Integration",
      image: "🔗"
    }
  ];

  const categories = ["All", "Data Quality", "ROI", "Email Marketing", "CRM", "Sales", "Compliance", "Integration"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact Validation{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expert insights, best practices, and actionable tips to improve your contact data quality 
            and boost outbound campaign success.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  Featured Article
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <Badge variant="outline">
                    {featuredPost.category}
                  </Badge>
                </div>
                <Button variant="cta" className="w-fit group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="bg-muted rounded-r-lg flex items-center justify-center">
                <div className="text-8xl">{featuredPost.image}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {post.category}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get the latest insights on contact validation and data quality delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-primary-foreground text-foreground"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/75 mt-4">
            Weekly insights • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Side CTA */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <Card className="p-4 shadow-glow max-w-xs">
          <CardContent className="p-0 text-center">
            <h3 className="font-semibold mb-2">Try Demandorbit Free</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Validate your first 100 contacts
            </p>
            <Button variant="cta" size="sm" className="w-full">
              Start Trial
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Reference */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for more validation leadership insights?
          </p>
          <a 
            href="https://salescentri.com/blog/?utm_source=demandorbit.com&utm_medium=blog&utm_campaign=validation_leadership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Explore Advanced Data Quality Resources →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;