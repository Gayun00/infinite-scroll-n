import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  image: string;
  price: string;
  title: string;
}

const ProductItem = ({ title, image, price }: Props) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardContent>
        <Image
          src={image}
          alt={`${title}_image`}
          className="rounded-lg object-cover w-full aspect-[3/4] "
          height={600}
          width={450}
        />
        <div className="space-y-3">
          <CardTitle className="text-md overflow-ellipsis overflow-hidden line-clamp-2">
            {title}
          </CardTitle>
        </div>
        <CardDescription>{price}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
