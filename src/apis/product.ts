import { request } from "@/utils/httpRequest";

// example
export const getExample = () => {
  request.get({ path: "/product" });
};
