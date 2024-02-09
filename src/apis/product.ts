import { GetProductResponse } from "@/types/product";
import { request } from "@/utils/httpRequest";

export const getProducts = (page: number) => {
  return request.get<any, GetProductResponse>({
    path: `/search/learn/${page}`,
  });
};
