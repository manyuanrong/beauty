import React, { useMemo } from "react";
import "./index.less";
import Column from "./column";

interface ItemInfo<T> {
  data: T;
  height: number;
  width: number;
}

interface WaterfallProps<T> {
  column?: number;
  list: ItemInfo<T>[];
  renderItem: Function;
}

export default function WaterfallFlow<T>(props: WaterfallProps<T>) {
  const { column = 2, list } = props;

  const columns = useMemo(() => {
    const arr: T[][] = Array(column)
      .fill(0)
      .map(() => {
        return [];
      });

    if (list.length > 0) {
      list.forEach((el, index: number) => {
        const mould = index % column;
        arr[mould].push(el);
      });
    }

    return arr;
  }, [list]);

  return (
    <div className="waterfall-flow">
      {columns.map((column, index) => {
        return (
          <Column
            list={column}
            key={index}
            renderItem={props.renderItem}
          ></Column>
        );
      })}
    </div>
  );
}
