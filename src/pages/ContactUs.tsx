import Layout from "@/components/Layout";
import { MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-spa-cream section-padding">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Get in Touch
          </p>
          <h1 className="heading-hero text-foreground mb-6">Contact Us</h1>
          <p className="text-body text-muted-foreground">
            We'd love to hear from you. Reach out to book an appointment or ask any
            questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-spa grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <h2 className="heading-section text-foreground mb-6">Send Us a Message</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 rounded bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a service</option>
                  <option>Massage Therapy</option>
                  <option>Facials & Skin Care</option>
                  <option>Manicures</option>
                  <option>Pedicures</option>
                  <option>Salt Scrubs</option>
                  <option>Microblading</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h3 className="heading-sub text-foreground mb-4">Our Location</h3>
              <div className="flex items-start gap-3 text-body text-muted-foreground">
                <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Studio 21 Salon and Spa</p>
                  <p>Historic Downtown Ashland</p>
                  <p>Ashland, Kentucky</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-sub text-foreground mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  "Award-winning hydro spa and salon since 1996",
                  "Best in Tri-State & Best in Ashland winner",
                  "Reader's Choice Awards recipient",
                  "2016 Northeast Kentucky Small Business of the Year",
                  "Global Salon Awards finalist (UCLA Anderson School of Business)",
                  "Highly trained team of professionals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-8">
              <h3 className="heading-sub text-foreground mb-3">
                Friendly Service, Relaxing Environment
              </h3>
              <p className="text-body text-muted-foreground">
                From the moment you walk in the door, our focus is on your complete
                relaxation. Come take a break with us and enjoy our small town
                friendliness along with world-class spa treatments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
