import React from "react";
import { Title, BodyOne } from "../../components/Molecules/MoleculesComponents";
import { productlists } from "../../assets/data/data";
import { ProductCard } from "../../router";

export const Product = () => {
  return (
    <>
      <div className="py-20 bg-white-100">
        <div className="container">
          <Title level={4}>Most Popular Products</Title>
          <div className=" flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">All Products (39)</BodyOne>
            <BodyOne className="text-sm text-primary-green">
              Wooden Products (15)
            </BodyOne>
          </div>

          <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
          </div>
        </div>
      </div>
    </>
  );
};
