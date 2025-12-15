import { Link } from "react-router-dom";
import {
  Droplets,
  Thermometer,
  Gauge,
  ShieldCheck,
  Leaf,
  TrendingDown,
  Settings,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Rising PUE & Water Costs",
    description: "Cooling water consumption directly impacts your Power Usage Effectiveness and operational costs."
  },
  {
    icon: Thermometer,
    title: "Cooling Tower Chemistry",
    description: "Maintaining optimal chemistry is critical to prevent scale, corrosion, and biological growth."
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Discharge limits and environmental regulations require consistent monitoring and documentation."
  },
  {
    icon: Settings,
    title: "Equipment Reliability",
    description: "Biofouling and scale in cooling loops reduce efficiency and accelerate equipment failure."
  }
];

const solutions = [
  {
    icon: Gauge,
    title: "Cooling Tower Chemistry Management",
    description: "Maximize cycles of concentration to reduce make-up water and blowdown. Our testing ensures optimal chemical treatment for efficiency and equipment longevity.",
    features: [
      "Conductivity and pH optimization",
      "Corrosion rate monitoring",
      "Biological growth testing",
      "Treatment chemical analysis"
    ]
  },
  {
    icon: FileCheck,
    title: "Compliance Monitoring",
    description: "Comprehensive wastewater and discharge testing to meet local and international environmental regulations with full documentation.",
    features: [
      "Discharge water quality testing",
      "Regulatory report preparation",
      "Trend analysis and alerts",
      "Audit-ready documentation"
    ]
  },
  {
    icon: Droplets,
    title: "Make-up Water Systems",
    description: "Complete installation and maintenance of reverse osmosis and water softening systems to protect your cooling infrastructure.",
    features: [
      "RO system design & installation",
      "Water softener services",
      "Preventive maintenance programs",
      "Performance monitoring"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Legionella Testing & Prevention",
    description: "Specialized cooling tower monitoring to prevent Legionella growth and ensure occupational safety compliance.",
    features: [
      "Regular Legionella screening",
      "Risk assessment protocols",
      "Remediation guidance",
      "ASHRAE compliance support"
    ]
  }
];

const outcomes = [
  { label: "Reduced Water Consumption", value: "Up to 30%" },
  { label: "Improved PUE", value: "Measurable" },
  { label: "Regulatory Compliance", value: "100%" },
  { label: "Extended Equipment Life", value: "2-3x" },
];

const DataCenter = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Data Center Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Data Center Water Management & Efficiency
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Optimize your cooling systems, reduce water consumption, and ensure regulatory compliance with our specialized testing and treatment solutions.
            </p>
            
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              <Link to="/contact" className="gap-2">
                Schedule a Water System Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground">
              Data centers face unique water management challenges. We provide the expertise and testing to address them all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <Card key={point.title} className="border-0 shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive water management services designed specifically for data center operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={solution.title} className="border-0 shadow-soft hover:shadow-elevated transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-display">{solution.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{solution.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">Expected Outcomes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {outcomes.map((outcome) => (
              <div key={outcome.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                  {outcome.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                  alt="Data center cooling systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Process
              </h2>
              
              <ol className="space-y-6">
                {[
                  { step: "1", title: "System Assessment", desc: "Comprehensive evaluation of your cooling water systems and current treatment programs." },
                  { step: "2", title: "Testing & Analysis", desc: "Detailed water quality testing to identify optimization opportunities and risks." },
                  { step: "3", title: "Solution Design", desc: "Custom treatment and monitoring program tailored to your specific needs." },
                  { step: "4", title: "Implementation", desc: "System installation, staff training, and ongoing support for sustained results." }
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Optimize Your Water Systems?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Schedule a complimentary water system assessment and discover how we can help reduce costs while ensuring compliance.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90">
              <Link to="/contact" className="gap-2">
                Schedule Your Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataCenter;
