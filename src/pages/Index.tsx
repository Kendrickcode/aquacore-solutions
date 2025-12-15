import { Link } from "react-router-dom";
import { 
  Droplets, 
  Building2, 
  UtensilsCrossed, 
  Factory, 
  Shield, 
  Award, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const valueProps = [
  {
    icon: Droplets,
    title: "Comprehensive Testing",
    description: "Full-spectrum analysis for water, food, industrial & environmental samples with certified precision."
  },
  {
    icon: Shield,
    title: "Regulatory Confidence",
    description: "Certified results meeting local and international compliance standards for peace of mind."
  },
  {
    icon: Factory,
    title: "Integrated Solutions",
    description: "Testing plus treatment systems — RO, softeners, ozonators — complete water management."
  }
];

const audiences = [
  {
    icon: Building2,
    title: "Data Centers & Industrial",
    description: "Optimize cooling systems, reduce water consumption, and ensure compliance.",
    href: "/data-center",
    color: "bg-accent"
  },
  {
    icon: Award,
    title: "Municipalities & Environmental",
    description: "Comprehensive environmental testing and monitoring for government agencies.",
    href: "/services#environmental",
    color: "bg-primary"
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Ensure product safety and quality with thorough testing protocols.",
    href: "/services#food",
    color: "bg-sand"
  }
];

const trustStats = [
  { icon: Clock, value: "30+", label: "Years of Excellence" },
  { icon: BadgeCheck, value: "100%", label: "Bahamian-Owned" },
  { icon: Users, value: "Gov't", label: "Partnership" },
  { icon: Award, value: "Accredited", label: "Laboratory" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground py-24 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6 animate-fade-in">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Serving Nassau & All Family Islands</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up">
              The Bahamas' Complete Water & Environmental Testing Laboratory
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Protecting Paradise Through Precision Science
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                <Link to="/data-center" className="gap-2">
                  Data Center Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={prop.title} className="border-0 shadow-soft hover:shadow-elevated transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <prop.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Segmentation */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-lg text-muted-foreground">
              From municipal water systems to cutting-edge data centers, we provide specialized testing and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <Link 
                key={audience.title} 
                to={audience.href}
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-0 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className={`${audience.color} p-6 text-primary-foreground`}>
                      <audience.icon className="h-10 w-10 mb-4" />
                      <h3 className="text-xl font-display font-semibold">{audience.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{audience.description}</p>
                      <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <stat.icon className="h-8 w-8 mx-auto text-accent mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Choose Adka Laboratories?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                For over three decades, we've been the trusted partner for water quality and environmental testing across The Bahamas. Our comprehensive approach combines rigorous scientific methodology with deep local expertise.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Accredited laboratory with certified technicians",
                  "Rapid turnaround times without compromising accuracy",
                  "Complete water treatment system installation and maintenance",
                  "Specialized services for data centers and industrial facilities",
                  "Service coverage across Nassau and all Family Islands"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/about" className="gap-2">
                  Learn About Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80" 
                  alt="Laboratory testing equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elevated max-w-xs hidden md:block">
                <p className="text-sm text-muted-foreground mb-2">Trusted by</p>
                <p className="font-display font-semibold text-lg">Government of The Bahamas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Discuss Your Testing Needs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a consultation. Whether you need routine testing or specialized solutions, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                <Link to="/contact" className="gap-2">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Browse All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
