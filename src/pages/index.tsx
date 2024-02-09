import ProductList from "@/components/ProductList";

const mockData = [
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
  { imageUrl: "", title: "title", price: "price" },
];

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-center gap-10 font-bold text-lg">
      <h1>Infinite scroll</h1>
      <main>
        <ProductList data={mockData} />
      </main>
    </div>
  );
}
