import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import ProductItem from "@/components/ProductItem";
import ProductList from "@/components/ProductList";
import { useGetProductsInfiniteQuery } from "@/queries/product";
import { Fragment } from "react";

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    // TODO: use prefetch wigh pagination
    useGetProductsInfiniteQuery();

  return (
    <div className="p-10 flex flex-col items-center gap-10 font-bold text-lg">
      <h1>Infinite scroll</h1>
      {/* TODO: add skeletons */}
      <main>
        <ProductList title="상품 목록">
          {data?.pages?.map((page, idx) => (
            <Fragment key={idx}>
              {page.books.map((product, index) => (
                <ProductItem
                  key={index}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </Fragment>
          ))}

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
