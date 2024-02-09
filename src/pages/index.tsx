import ProductList from "@/components/ProductList";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useGetProductsInfiniteQuery } from "@/queries/product";
import { Fragment } from "react";

export default function Home() {
  const { data, fetchNextPage } = useGetProductsInfiniteQuery();

  const { targetRef } = useIntersectionObserver({
    onIntersect: fetchNextPage,
  });

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

        <div className="bg-slate-100 h-9" ref={targetRef} />
      </main>
    </div>
  );
}
