import { getProducts } from "@/apis/product";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = ({ page }: { page: number }) => {
  return useQuery({ queryKey: ["product"], queryFn: () => getProducts(page) });
};

export const useGetProductsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["product"],
    queryFn: ({ pageParam }) => getProducts(pageParam),

    getNextPageParam: (lastPage: any) => {
      const nextPage = parseInt(lastPage.page) + 1;
      const totalItems = parseInt(lastPage.total);
      if (nextPage * 10 <= totalItems) {
        return nextPage;
      }
    },
    initialPageParam: 1,
  });
};
