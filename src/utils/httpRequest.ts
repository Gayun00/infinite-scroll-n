import { URL } from "@/constants";
import { RequestParams } from "@/types/httpRequest";

const headers: HeadersInit = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-cache",
};

const fetchRequest = <TParams>({
  path,
  method,
  queryParams,
  params,
}: RequestParams<TParams>) => {
  const convertedParams = queryParams
    ? Object.entries(queryParams).reduce(
        (newObj: Record<string, string>, [key, value]) => {
          if (typeof value === "string") {
            newObj[key] = value;
          } else if (typeof value === "number") {
            newObj[key] = value.toString();
          }
          return newObj;
        },
        {}
      )
    : "";

  const searchParams = new URLSearchParams(convertedParams).toString();

  return fetch(`${URL.API}${path}${searchParams ? `?${searchParams}` : ""}`, {
    headers,
    method,
    body: JSON.stringify(params),
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    }

    throw new Error(res.status.toString());
  });
};

export const request = {
  get<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
    return fetchRequest<TParams>({ ...params, method: "get" });
  },

  post<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
    return fetchRequest({ ...params, method: "post" });
  },

  put<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
    return fetchRequest({ ...params, method: "put" });
  },

  delete<TParams, TResponse>(
    params: RequestParams<TParams>
  ): Promise<TResponse> {
    return fetchRequest({ ...params, method: "delete" });
  },
};
