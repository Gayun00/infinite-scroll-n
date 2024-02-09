import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  title: string;
  imageUrl: string;
  price: string;
}

const ProductItem = ({ title, imageUrl, price }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <Image height={200} width={200} alt="product_img" src={imageUrl} />
        </CardDescription>
      </CardContent>
      <CardFooter>{price}</CardFooter>
    </Card>
  );
};

export default ProductItem;
