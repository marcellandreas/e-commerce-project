import {
  Banner,
  Hero,
  Product,
  ProductSlide,
  ShippingInfo,
  Testimonials,
} from "../../router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimonials />
    </>
  );
};
