import type { NextApiRequest, NextApiResponse } from "next";
import { mockData } from "./mockData/product";
import { Product } from "@/types/product";

type Data = {
  data: Product[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: mockData });
}
