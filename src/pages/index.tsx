import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import ProductList from "@/components/ProductList";
import { useGetProductsInfiniteQuery } from "@/queries/product";
import { Fragment } from "react";

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProductsInfiniteQuery();

  return (
    <div className="p-10 flex flex-col items-center gap-10 font-bold text-lg">
      <h1>Infinite scroll</h1>
      {/* TODO: add skeletons */}
      <main>
        {data?.pages?.map((page, idx) => (
          <Fragment key={idx}>
            <ProductList title="상품 목록" data={page.books}></ProductList>
          </Fragment>
        ))}

        <InfiniteScrollTrigger
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </main>
    </div>
  );
}
