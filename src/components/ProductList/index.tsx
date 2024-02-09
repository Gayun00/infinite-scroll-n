import React, { ReactNode } from "react";
import { Product } from "@/types/product";

interface Props {
  title: string;
  children: ReactNode;
}

const ProductList = ({ title, children }: Props) => {
  return (
    <section className="w-full py-12 min-w-[500px]">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <span className="flex items-center gap-x-3">
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">{children}</div>
      </div>
    </section>
  );
};

export default ProductList;
