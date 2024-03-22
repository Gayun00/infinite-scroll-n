import React, { useEffect } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useGetProductsInfiniteQuery } from "@/queries/product";
import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import ProductItem from "@/components/ProductItem";
import ProductList from "@/components/ProductList";
import ProductItemSkeleton from "@/components/fallbacks/ProductItemSkeleton";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteGridExample from "@/components/Example";

export default function Home() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProductsInfiniteQuery();

  const { savedScrollPosition, scrollToSavedPosition } = useScrollPosition();

  useEffect(() => {
    if (savedScrollPosition) {
      scrollToSavedPosition();
    }
  }, []);

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const flattenedData = data?.pages.flatMap((page) => page.books) || [];
    const dataIndex = rowIndex * 3 + columnIndex;
    const product = flattenedData[dataIndex];

    return (
      <div style={style}>
        {product ? (
          <ProductItem
            key={product.isbn13}
            title={product.title}
            price={product.price}
            image={product.image}
            isbn13={product.isbn13}
          />
        ) : (
          <div>loading...</div>
          // <ProductItemSkeleton count={9} />
        )}
      </div>
    );
  };

  const Example = () => (
    <Grid
      columnCount={4}
      columnWidth={100}
      height={400}
      rowCount={3}
      rowHeight={250}
      width={600}>
      {Cell}
    </Grid>
  );

  return (
    <div className="p-10 flex flex-col items-center gap-10 font-bold text-lg">
      <h1>Infinite scroll</h1>
      <main>
        <InfiniteGridExample />
        {/* <ProductList title="상품 목록">
          {data?.pages
            ?.flatMap(({ books }) => books)
            .map((product) => (
              <ProductItem
                key={product.isbn13}
                title={product.title}
                price={product.price}
                image={product.image}
                isbn13={product.isbn13}
              />
            ))}

          {(isLoading || isFetchingNextPage) && (
            <ProductItemSkeleton count={9} />
          )}

          <InfiniteScrollTrigger
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </ProductList> */}
      </main>
    </div>
  );
}
