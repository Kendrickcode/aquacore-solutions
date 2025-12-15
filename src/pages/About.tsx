import { Link } from "react-router-dom";
import {
  Clock,
  Award,
  Users,
  MapPin,
  Building,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Target,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const milestones = [
  { year: "1990s", title: "Foundation", description: "Established to serve The Bahamas' growing need for local water testing services." },
  { year: "2000s", title: "Expansion", description: "Extended services to all Family Islands and added food & industrial testing." },
  { year: "2010s", title: "Modernization", description: "Major laboratory upgrades and system installation capabilities added." },
  { year: "Today", title: "Innovation", description: "Leading provider with specialized data center and sustainability solutions." }
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every test we conduct meets the highest standards of accuracy and scientific rigor."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work alongside our clients as trusted advisors, not just service providers."
  },
  {
    icon: Heart,
    title: "Paradise",
    description: "Protecting The Bahamas' natural resources is at the heart of everything we do."
  }
];

const certifications = [
  "ISO/IEC 17025 Accreditation",
  "Government of The Bahamas Approved",
  "EPA Method Certified",
  "ASHRAE 188 Compliant Testing"
];

const serviceAreas = [
  { name: "Nassau & New Providence", primary: true },
  { name: "Grand Bahama", primary: true },
  { name: "Abaco Islands", primary: false },
  { name: "Eleuthera", primary: false },
  { name: "Exuma", primary: false },
  { name: "Andros", primary: false },
  { name: "Long Island", primary: false },
  { name: "All Family Islands", primary: false }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              About Adka Laboratories
            </h1>
            <p className="text-xl text-primary-foreground/90">
              For over three decades, we've been The Bahamas' trusted partner in water quality and environmental testing.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="h-8 w-8 mx-auto text-accent mb-3" />
              <div className="text-3xl font-display font-bold text-foreground">30+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto text-accent mb-3" />
              <div className="text-3xl font-display font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Bahamian-Owned</div>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto text-accent mb-3" />
              <div className="text-3xl font-display font-bold text-foreground">Gov't</div>
              <div className="text-sm text-muted-foreground">Partnership</div>
            </div>
            <div>
              <Building className="h-8 w-8 mx-auto text-accent mb-3" />
              <div className="text-3xl font-display font-bold text-foreground">All</div>
              <div className="text-sm text-muted-foreground">Islands Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Adka Laboratories was founded with a clear mission: to provide The Bahamas with world-class water and environmental testing services without the delays and complications of sending samples overseas.
                </p>
                <p>
                  As a 100% Bahamian-owned company, we understand the unique challenges facing our islands — from protecting our precious freshwater resources to ensuring the safety of our food supply and supporting our growing tourism and industrial sectors.
                </p>
                <p>
                  Over three decades, we've grown from a small water testing facility in Nassau to a comprehensive laboratory serving all of The Bahamas, with capabilities spanning water quality, food safety, industrial testing, and complete water treatment solutions.
                </p>
                <p>
                  Today, we're proud to be a trusted partner of the Government of The Bahamas and hundreds of businesses across the archipelago, from hotels and restaurants to data centers and manufacturing facilities.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" 
                  alt="Laboratory technician at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Journey
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-start gap-8 mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <Card className="border-0 shadow-soft inline-block">
                      <CardContent className="p-6">
                        <div className="text-accent font-display font-bold text-lg mb-1">{milestone.year}</div>
                        <h3 className="font-display font-semibold text-xl mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 mt-6" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Adka Laboratories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="border-0 shadow-soft text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-primary text-primary-foreground scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Certifications & Accreditations
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Our laboratory maintains the highest standards of quality and is recognized by national and international accreditation bodies.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                <Award className="h-32 w-32 text-accent opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="py-20 bg-background scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80" 
                  alt="Aerial view of Bahamas islands" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Service Areas
              </h2>
              <p className="text-muted-foreground mb-8">
                From our base in Nassau, we serve clients across the entire Bahamas archipelago. Sample collection can be arranged for all islands.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div 
                    key={area.name}
                    className={`flex items-center gap-2 p-3 rounded-lg ${area.primary ? 'bg-accent/10 text-accent font-medium' : 'bg-muted'}`}
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to learn how Adka Laboratories can support your testing and water treatment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact" className="gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
