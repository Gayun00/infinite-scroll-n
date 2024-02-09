import ProductList from "@/components/ProductList";
import { useGetProductsQuery } from "@/queries/product";

const mockData = [
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
];

export default function Home() {
  const { data } = useGetProductsQuery();
  return (
    <div className="p-10 flex flex-col items-center gap-10 font-bold text-lg">
      <h1>Infinite scroll</h1>
      {/* TODO: add skeletons */}
      <main>{data && <ProductList data={data} />}</main>
    </div>
  );
}
