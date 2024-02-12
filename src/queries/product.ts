import { getProducts } from "@/apis/product";
import { GetProductResponse } from "@/types/product";
import { useInfiniteQuery } from "@tanstack/react-query";

const queryKeys = {
  all: ["products"],
  page: (page: number) => [...queryKeys.all, page],
};

export const useGetProductsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["product"],
    queryFn: async ({ pageParam }) => {
      // option for delaying the response
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return getProducts(pageParam);
    },

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
