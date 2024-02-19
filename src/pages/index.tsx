import React, { Fragment } from "react";
import { useGetProductsInfiniteQuery } from "@/queries/product";
import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import ProductItem from "@/components/ProductItem";
import ProductList from "@/components/ProductList";
import ProductItemSkeleton from "@/components/fallbacks/ProductItemSkeleton";

export default function Home() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProductsInfiniteQuery();

  return (
    <div className="p-10 flex flex-col items-center gap-10 font-bold text-lg">
      <h1>Infinite scroll</h1>
      <main>
        <ProductList title="상품 목록">
          {data?.pages?.map((page, idx) => (
            <Fragment key={idx}>
              {page.books.map((product, idx) => (
                <ProductItem
                  key={idx}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </Fragment>
          ))}

          {(isLoading || isFetchingNextPage) && (
            <ProductItemSkeleton count={9} />
          )}

          <InfiniteScrollTrigger
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </ProductList>
      </main>
    </div>
  );
}
