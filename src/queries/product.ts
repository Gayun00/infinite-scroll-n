import { getProducts } from "@/apis/product";
import { GetProductResponse } from "@/types/product";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetProductsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["product"],
    queryFn: ({ pageParam }) => getProducts(pageParam),

    getNextPageParam: (lastPage: GetProductResponse) => {
      const nextPage = parseInt(lastPage.page) + 1;
      const totalItems = parseInt(lastPage.total);
      if (nextPage * 10 <= totalItems) {
        return nextPage;
      }
    },
    initialPageParam: 1,
  });
};
