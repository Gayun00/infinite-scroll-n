import { GetProductResponse } from "@/types/product";
import { request } from "@/utils/httpRequest";

export const getProducts = () => {
  return request
    .get<any, GetProductResponse>({
      path: "/product",
      // TODO: add pagination query params
      queryParams: {},
    })
    .then((data) => data.data);
};
