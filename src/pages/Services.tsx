import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import massageImg from "@/assets/services-massage.jpg";
import facialImg from "@/assets/services-facial.jpg";
import nailsImg from "@/assets/services-nails.jpg";
import scrubImg from "@/assets/services-scrub.jpg";
import microbladingImg from "@/assets/services-microblading.jpg";
import aboutImg from "@/assets/about-spa.jpg";

const services = [
  {
    title: "Massage Therapy",
    img: massageImg,
    description:
      "From the moment you walk in the door, our focus is on your complete relaxation. Our licensed massage therapists offer a variety of techniques to relieve tension, reduce stress, and restore balance to your body and mind.",
  },
  {
    title: "Facials & Skin Care",
    img: facialImg,
    description:
      "Our professional estheticians provide customized facial treatments tailored to your unique skin type. Using premium products and proven techniques, we help rejuvenate and restore your skin's natural radiance.",
  },
  {
    title: "Manicures & Pedicures",
    img: nailsImg,
    description:
      "Pamper your hands and feet with our luxurious nail care services. From classic manicures to spa pedicures, we use high-quality products to ensure your nails look and feel their best.",
  },
  {
    title: "Salt Scrubs & Body Treatments",
    img: scrubImg,
    description:
      "Indulge in our signature body treatments featuring exfoliating salt scrubs that leave your skin silky smooth. Many people underestimate the effect high-quality lotions and oils have on a spa treatment. We guarantee all of our products help you with that extra feeling of zen.",
  },
  {
    title: "Microblading",
    img: microbladingImg,
    description:
      "Achieve perfectly shaped, natural-looking brows with our professional microblading service. This semi-permanent technique creates beautiful, defined eyebrows that enhance your features with minimal daily maintenance.",
    badge: "New Service",
  },
  {
    title: "Skin Treatments",
    img: aboutImg,
    description:
      "Our advanced skin treatments address a wide range of concerns, from fine lines and uneven texture to hydration and glow. Let our trained professionals help you achieve your skincare goals with personalized treatment plans.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-spa-cream section-padding">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Studio 21 Salon and Spa
          </p>
          <h1 className="heading-hero text-foreground mb-6">Our Services</h1>
          <p className="text-body text-muted-foreground">
            Book a time at our tranquil facility for manicures, pedicures, massage,
            facials, and skin treatments. Come take a break with us.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-spa space-y-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="rounded-lg overflow-hidden md:[direction:ltr]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-80 lg:h-[420px] object-cover"
                />
              </div>
              <div className="md:[direction:ltr]">
                {service.badge && (
                  <span className="inline-block font-body text-xs tracking-widest uppercase bg-primary/20 text-primary-foreground px-3 py-1 rounded-full mb-3 font-semibold">
                    {service.badge}
                  </span>
                )}
                <h2 className="heading-section text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-body text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Link to="/contact-us" className="btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 section-padding">
        <div className="container-spa text-center max-w-2xl mx-auto">
          <h2 className="heading-section text-foreground mb-4">
            Ready to Relax?
          </h2>
          <p className="text-body text-muted-foreground mb-8">
            Come take a break with us. Our team is ready to provide you with a
            complete experience of personal well-being.
          </p>
          <Link to="/contact-us" className="btn-primary">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
