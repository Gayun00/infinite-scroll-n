import { getProducts } from "@/apis/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = () => {
  return useQuery({ queryKey: ["product"], queryFn: getProducts });
};
