import React from "react";
import ProductItem from "../ProductItem";
import { Product } from "@/types/product";

interface Props {
  data: Product[];
}

const ProductList = ({ data }: Props) => {
  return (
    <div className="flex gap-5 flex-wrap">
      {data.map((product, index) => (
        <ProductItem
          key={index}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
