"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, CheckCircle, Instagram, Linkedin, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Projects",          id: "#projects"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Ventura Building"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static-grid"}}
      title="Building Legacies Since 1995"
      description="Ventura Building And Construction, Inc. delivers world-class residential and commercial builds with unmatched craftsmanship and precision."
      buttons={[
        {
          text: "View Our Projects",          href: "#projects"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/female-architect-construction-site-with-level_23-2147702482.jpg",          imageAlt: "Large commercial project"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/world-trade-center-new-york-downtown-usa_1268-19539.jpg",          imageAlt: "Residential construction progress"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/construction-activity-dubai-downtown-dubai-uae-dubai-is-most-populous-city-emirate-united-arab-emirates_231208-7572.jpg",          imageAlt: "Modern facade detail"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-civil-engineer-safety-hat_185193-110838.jpg",          imageAlt: "Structural skeleton"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/brutalist-inspiration-architecture-background_23-2149162820.jpg",          imageAlt: "Foundation pouring"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/construction-site-building_74190-1750.jpg",          imageAlt: "Architectural finishing"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Crafting Excellence"
      description={[
        "With over three decades of experience, Ventura Building and Construction, Inc. stands for integrity and high-quality standards in the industry.",        "Our team of expert engineers and builders works closely with clients to bring complex architectural visions into reality."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Foundation",          title: "Foundation Engineering",          subtitle: "Solid ground",          description: "Precision grading and foundation pouring using reinforced high-grade materials.",          imageSrc: "http://img.b2bpic.net/free-photo/design-building-with-opened-windows_23-2148252778.jpg"},
        {
          tag: "Structure",          title: "Structural Framing",          subtitle: "Precision builds",          description: "Robust structural frameworks for all residential and commercial project types.",          imageSrc: "http://img.b2bpic.net/free-photo/specialist-technician-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof_609648-2178.jpg"},
        {
          tag: "Finishing",          title: "Detail Finishing",          subtitle: "Expert craft",          description: "Meticulous interior and exterior finishes that define our signature quality.",          imageSrc: "http://img.b2bpic.net/free-photo/parasol-located-old-quarter-seville_268835-15507.jpg"},
      ]}
      title="Core Construction Services"
      description="We offer comprehensive building services from initial planning and site preparation to structural completion and final detailing."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "1200+",          title: "Projects Completed",          description: "Successful builds spanning decades.",          icon: CheckCircle,
        },
        {
          id: "m2",          value: "500+",          title: "Happy Clients",          description: "Long-term relationships built on trust.",          icon: Users,
        },
        {
          id: "m3",          value: "30+",          title: "Years Experience",          description: "Expertise you can rely upon.",          icon: Award,
        },
      ]}
      title="Project Performance"
      description="The numbers behind our reputation."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        {
          id: "1",          name: "John Doe",          handle: "@john.doe",          testimonial: "Ventura delivered on schedule and with impeccable quality.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-smiling-posing-with-crossed-arms-office_176420-910.jpg"},
        {
          id: "2",          name: "Sarah Smith",          handle: "@sarah.smith",          testimonial: "Professional team that truly cares about the final outcome.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/architect-with-safety-helmet-posing_23-2148242939.jpg"},
        {
          id: "3",          name: "Mike Ross",          handle: "@mike.ross",          testimonial: "The attention to detail in the engineering phase was amazing.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-business-leader-using-smartphone-lobby_1262-5625.jpg"},
        {
          id: "4",          name: "Jenny Wu",          handle: "@jenny.wu",          testimonial: "A reliable partner for our large-scale development project.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businesswoman-working-blue-print_23-2148187236.jpg"},
        {
          id: "5",          name: "Tom Baker",          handle: "@tom.baker",          testimonial: "Exemplary work and transparent pricing every step of the way.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-female-keeping-arms-folded-her-chest-looking-camera-with-confident-smile_1153-9402.jpg"},
      ]}
      showRating={true}
      title="What Partners Say"
      description="Reflections from industry leaders and satisfied homeowners."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Start Your Project"
      description="Reach out to us for consultation and project estimates today."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your build"}}
      imageSrc="http://img.b2bpic.net/free-photo/coworkers-office-with-architecture-plans-computer_329181-12026.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Ventura Construction"
      copyrightText="© 2025 Ventura Building And Construction, Inc."
      socialLinks={[
        {
          icon: Linkedin,
          href: "#",          ariaLabel: "LinkedIn"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}