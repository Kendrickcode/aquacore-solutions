import { Link } from "react-router-dom";
import {
  Droplets,
  UtensilsCrossed,
  Factory,
  ShieldCheck,
  Settings,
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Microscope,
  Beaker
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const services = [
  {
    id: "water",
    icon: Droplets,
    title: "Water Quality Testing",
    description: "Comprehensive analysis of drinking water, wastewater, groundwater, and surface water for residential, commercial, and industrial applications.",
    features: [
      "Potability testing (bacteria, chemical, physical)",
      "Well and cistern water analysis",
      "Swimming pool and spa testing",
      "Wastewater discharge monitoring",
      "Groundwater contamination assessment",
      "Seawater intrusion testing"
    ],
    color: "bg-accent"
  },
  {
    id: "food",
    icon: UtensilsCrossed,
    title: "Food & Beverage Testing",
    description: "Ensure product safety and quality with thorough microbiological and chemical testing for food service, manufacturing, and import/export compliance.",
    features: [
      "Microbiological safety testing",
      "Nutritional analysis",
      "Shelf-life studies",
      "Contaminant screening",
      "Import/export certification",
      "HACCP compliance support"
    ],
    color: "bg-sand"
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial & Process Testing",
    description: "Specialized testing for industrial processes, cooling systems, and manufacturing operations to optimize efficiency and prevent costly failures.",
    features: [
      "Cooling tower water analysis",
      "Boiler water chemistry",
      "Process water optimization",
      "Corrosion monitoring",
      "Scale prevention testing",
      "Oil and fuel analysis"
    ],
    color: "bg-primary"
  },
  {
    id: "legionella",
    icon: ShieldCheck,
    title: "Legionella Testing",
    description: "Protect building occupants with specialized Legionella detection and prevention services for cooling towers, hot water systems, and HVAC equipment.",
    features: [
      "Legionella species detection",
      "Cooling tower monitoring programs",
      "Hot water system testing",
      "Risk assessment services",
      "Remediation verification",
      "ASHRAE 188 compliance support"
    ],
    color: "bg-destructive"
  },
  {
    id: "systems",
    icon: Settings,
    title: "System Installation & Servicing",
    description: "Complete water treatment solutions from design and installation to ongoing maintenance and optimization of treatment equipment.",
    features: [
      "Reverse osmosis systems",
      "Water softeners",
      "Ozonation systems",
      "UV disinfection",
      "Filtration systems",
      "Preventive maintenance programs"
    ],
    color: "bg-accent"
  }
];

const labCapabilities = [
  {
    icon: Microscope,
    title: "Microbiological Analysis",
    description: "State-of-the-art microbiology lab for bacteria, coliform, and pathogen detection."
  },
  {
    icon: FlaskConical,
    title: "Chemical Analysis",
    description: "Comprehensive wet chemistry and instrumental analysis capabilities."
  },
  {
    icon: Beaker,
    title: "Physical Testing",
    description: "Complete physical parameter testing including turbidity, conductivity, and more."
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive testing and water treatment solutions for every need. From routine water quality checks to specialized industrial testing.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-24 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-0 shadow-soft overflow-hidden">
                  <div className="grid lg:grid-cols-3">
                    <div className={`${service.color} p-8 text-primary-foreground flex flex-col justify-center`}>
                      <service.icon className="h-12 w-12 mb-4" />
                      <CardTitle className="text-2xl font-display mb-3">{service.title}</CardTitle>
                      <p className="text-primary-foreground/90">{service.description}</p>
                    </div>
                    <CardContent className="lg:col-span-2 p-8">
                      <h4 className="font-display font-semibold mb-4">What We Test & Provide</h4>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="gap-2">
                        <Link to="/contact">
                          Request Testing
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Capabilities */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Laboratory Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Our accredited laboratory is equipped with modern instrumentation and staffed by certified technicians.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labCapabilities.map((cap, index) => (
              <Card key={cap.title} className="border-0 shadow-soft text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <cap.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Center CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Looking for Data Center Solutions?
              </h2>
              <p className="text-primary-foreground/80">
                Specialized water management and testing for cooling tower optimization.
              </p>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow flex-shrink-0">
              <Link to="/data-center" className="gap-2">
                Explore Data Center Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need Testing Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to discuss your specific testing requirements. We offer rapid turnaround times and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact" className="gap-2">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+12423231234">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
