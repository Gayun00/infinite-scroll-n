type RequestMethod = "get" | "post" | "put" | "delete";
export type Params = Record<string, string>;

export interface RequestParams<TParams = Params> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TParams;
  isMock?: boolean;
  shouldAuthorize?: boolean;
}
