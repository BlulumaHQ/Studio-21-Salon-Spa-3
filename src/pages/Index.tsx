import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-spa.jpg";
import aboutImg from "@/assets/about-spa.jpg";
import productsImg from "@/assets/products.jpg";
import giftCardImg from "@/assets/gift-card.jpg";
import massageImg from "@/assets/services-massage.jpg";
import facialImg from "@/assets/services-facial.jpg";
import scrubImg from "@/assets/services-scrub.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Spa atmosphere with orchids and stones" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-spa-dark/40" />
        </div>
        <div className="container-spa relative z-10">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-background/80 mb-4">
            Since 1996 · Historic Downtown Ashland
          </p>
          <h1 className="heading-hero text-background max-w-2xl">
            Relax. Refresh.<br />Re-imagine.
          </h1>
          <p className="text-body text-background/80 max-w-lg mt-6">
            Book a time at our tranquil facility for manicures, pedicures, massage,
            facials, and skin treatments.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/contact-us" className="btn-primary">Book Online</Link>
            <Link to="/services" className="btn-outline border-background/60 text-background hover:bg-background hover:text-foreground">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-accent">
        <div className="container-spa py-10 flex flex-wrap justify-center gap-x-10 gap-y-4 text-center">
          {["Best in Tri-State", "Best in Ashland", "Reader's Choice Awards", "NE Kentucky Small Business of the Year"].map((award) => (
            <div key={award} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              <span className="font-body text-sm text-muted-foreground tracking-wide">{award}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-spa grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={aboutImg} alt="Studio 21 spa interior" className="w-full h-[400px] lg:h-[500px] object-cover" />
          </div>
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">About Us</p>
            <h2 className="heading-section text-foreground mb-6">
              Award-Winning Hydro Spa & Salon
            </h2>
            <p className="text-body text-muted-foreground mb-4">
              Studio 21 Salon and Spa is located in the historic downtown Ashland area.
              Since opening our doors in 1996, we have grown from a small two chair salon
              to an award-winning hydro spa and salon.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              Our highly trained team of professionals are here to provide you with a
              complete experience of personal well-being. We strive to build a trusting
              relationship with our clients, and hope you will enjoy our small town
              friendliness along with our world-class spa treatments and superior service.
            </p>
            <Link to="/services" className="btn-primary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-spa-cream">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Our Services</p>
            <h2 className="heading-section text-foreground">A Complete Spa Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: massageImg, title: "Massage Therapy", desc: "From the moment you walk in the door, our focus is on your complete relaxation. From massage to salt scrubs, our services are a great way to take a step back from the bustle of everyday life." },
              { img: facialImg, title: "Facials & Skin Care", desc: "Our professional estheticians provide customized facial treatments designed to rejuvenate and restore your skin's natural glow with premium products." },
              { img: scrubImg, title: "Body Treatments", desc: "Indulge in our luxurious salt scrubs and skin treatments that exfoliate, hydrate, and leave your skin feeling refreshed and renewed." },
            ].map((service) => (
              <div key={service.title} className="card-spa group">
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-sub text-foreground mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <Link to="/services" className="font-body text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Service Highlight */}
      <section className="section-padding">
        <div className="container-spa">
          <div className="bg-primary/10 rounded-lg p-8 md:p-14 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-secondary font-semibold">Big News</span>
              <h2 className="heading-section text-foreground mt-2 mb-4">We Now Offer Microblading!</h2>
              <p className="text-body text-muted-foreground mb-6">
                Achieve perfectly shaped, natural-looking brows with our professional
                microblading service. Our trained specialists use precision techniques
                for beautiful, lasting results.
              </p>
              <Link to="/services" className="btn-secondary">Learn More</Link>
            </div>
            <div className="w-full md:w-80 lg:w-96 shrink-0">
              <img src={productsImg} alt="Spa products collection" className="w-full rounded-lg object-cover h-64 md:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-spa-cream">
        <div className="container-spa max-w-3xl text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-6">Testimonials</p>
          <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
            "Great experience! Definitely would recommend!"
          </blockquote>
          <p className="font-body text-base text-muted-foreground font-medium">— Brianna</p>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-padding">
        <div className="container-spa grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Gift Cards</p>
            <h2 className="heading-section text-foreground mb-6">
              Give the Gift of Relaxation
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Treat someone special to a spa experience they'll never forget.
              Our gift cards are perfect for birthdays, holidays, or any occasion
              that calls for a little pampering.
            </p>
            <Link to="/contact-us" className="btn-primary">Buy Now</Link>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={giftCardImg} alt="Spa gift card" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary/10">
        <div className="container-spa py-16 md:py-20 text-center max-w-xl mx-auto">
          <h2 className="heading-section text-foreground mb-3">Join Our Mailing List</h2>
          <p className="text-body text-muted-foreground mb-8">
            Sign up to hear from us about specials, sales, and events.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-5 py-3.5 rounded bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
