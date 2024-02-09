import { getExample } from "@/apis/product";
import { useQuery } from "@tanstack/react-query";

// example
export const useGetExampleQuery = () => {
  return useQuery({ queryKey: ["example"], queryFn: getExample });
};
