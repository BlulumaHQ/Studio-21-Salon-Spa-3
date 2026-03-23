import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import product1 from "@/assets/shop-product-1.jpg";
import product2 from "@/assets/shop-product-2.jpg";
import product3 from "@/assets/shop-product-3.jpg";
import product4 from "@/assets/shop-product-4.jpg";
import product5 from "@/assets/shop-product-5.jpg";
import product6 from "@/assets/shop-product-6.jpg";
import giftCardImg from "@/assets/gift-card.jpg";

const products = [
  { img: product1, name: "Rose Hydrating Cream", price: "$42.00", category: "Skincare" },
  { img: product2, name: "Botanical Body Oil", price: "$38.00", category: "Body Care" },
  { img: product3, name: "Essential Oil Trio", price: "$54.00", category: "Aromatherapy" },
  { img: product4, name: "Botanical Bath Salts", price: "$28.00", category: "Bath & Body" },
  { img: product5, name: "Rejuvenating Serum", price: "$56.00", category: "Skincare" },
  { img: product6, name: "Spa Candle", price: "$32.00", category: "Home" },
];

const Shop = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-spa-cream section-padding">
        <div className="container-spa text-center max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Studio 21 Salon and Spa
          </p>
          <h1 className="heading-hero text-foreground mb-6">Shop</h1>
          <p className="text-body text-muted-foreground">
            Many people underestimate the effect high-quality lotions and oils have on
            a spa treatment. We guarantee all of our products help you with that extra
            feeling of zen.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-spa">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Featured Products</p>
            <h2 className="heading-section text-foreground">High-Quality Products</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="card-spa group">
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="heading-sub text-foreground mt-1 mb-2">{product.name}</h3>
                  <p className="font-body text-lg font-semibold text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-body text-muted-foreground mt-12">
            Visit us in-store for our full selection of premium spa products.
          </p>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="bg-spa-cream section-padding">
        <div className="container-spa grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={giftCardImg} alt="Gift card" className="w-full h-80 object-cover" />
          </div>
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Gift Cards</p>
            <h2 className="heading-section text-foreground mb-6">
              The Perfect Gift
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Give the gift of relaxation with a Studio 21 gift card. Available in any
              denomination, our gift cards are perfect for birthdays, anniversaries,
              holidays, or just because.
            </p>
            <Link to="/contact-us" className="btn-primary">Buy Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
