import React, { useState } from "react";
import { Button, Typography, Box, Grid } from "@material-ui/core";
import { Table } from "../Table";
import { useGetProductsInfiniteQuery } from "@/queries/product";
import { Product } from "@/types/product";

export type ItemType = {
  firstName: string;
  lastName: string;
  suffix: string;
};

const InfiniteGridExample: React.FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetProductsInfiniteQuery();
  const flattenedData = data?.pages?.flatMap(({ books }) => books);
  const [loadedItemsState, setLoadedItemsState] = useState<{
    hasNextPage: boolean;
    items: Product[];
  }>({
    hasNextPage: true,
    items: [],
  });

  const [showTable, setShowTable] = React.useState(true);

  const [scrollState, setScrollState] = React.useState({
    rowIndex: 0,
    columnIndex: 0,
  });

  let loadMoreItems = (startIndex: number, stopIndex: number): Promise<any> => {
    console.log(startIndex, stopIndex);
    return new Promise(() => fetchNextPage());
  };

  // the item is loaded if either 1) there are no more pages or 2) there exists an item at that index
  let isItemLoaded = (index: number) => hasNextPage || !!flattenedData?.[index];

  const setScrollRowAndColum = React.useCallback(
    (rowIndex: number, columnIndex: number) => {
      setScrollState({ rowIndex, columnIndex });
    },
    []
  );

  const showTableCallback = React.useCallback(() => setShowTable(true), []);
  const hideTableCallback = React.useCallback(() => setShowTable(false), []);

  const { items } = loadedItemsState;

  return showTable ? (
    <>
      <Button
        onClick={hideTableCallback}
        style={{ width: "100%", backgroundColor: "lightBlue" }}>
        HIDE TABLE
      </Button>
      <Box m={2} />
      <Grid style={{ padding: "20px" }}>
        <Typography>
          This grid loads the next page of data when the user scrolls to the end
          of loaded data.
        </Typography>
        <Box m={0.5} />
        <Typography>
          It also stores your scroll offset in component state so you dont loose
          your position when you navigate away and back.
        </Typography>
        <Box m={3} />

        <Table
          hasNextPage={hasNextPage}
          items={flattenedData}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
          scrollState={scrollState}
          setScrollRowAndColumn={setScrollRowAndColum}
        />
      </Grid>
    </>
  ) : (
    <>
      <Button
        onClick={showTableCallback}
        style={{ width: "100%", backgroundColor: "lightBlue" }}>
        SHOW TABLE
      </Button>
      <Grid style={{ padding: "20px" }}>
        <Box m={2} />
        <Typography> No more table!</Typography>
      </Grid>
    </>
  );
};

export default InfiniteGridExample;
