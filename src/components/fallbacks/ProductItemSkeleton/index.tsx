import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  count: number;
}

const ProductItemSkeleton = ({ count }: Props) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <Card key={idx} className="pt-5 flex flex-col justify-between">
          <CardContent className="flex flex-col gap-y-5">
            <Skeleton className="w-full aspect-[3/4] rounded-xl" />
            <div className="space-y-3">
              <CardTitle className="text-md overflow-ellipsis overflow-hidden line-clamp-2">
                <Skeleton className="h-4 w-[250px]" />
              </CardTitle>
            </div>
            <CardDescription>
              <Skeleton className="h-4 w-[200px]" />
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ProductItemSkeleton;
