import { productlists } from "../../assets/data/data";
import { ProductCard } from "../../router";

export function Shop() {
  return (
    <>
      <section className="container mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {productlists.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            images={product.images}
            prices={product.price}
            discount={product.discount}
            rating={product.rating}
            featured={product.featured}
            color={product.color}
          />
        ))}
      </section>
    </>
  );
}
