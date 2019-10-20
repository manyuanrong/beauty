import React, { useMemo } from "react";
import "./index.less";
import Column from "./column";

interface WaterfallProps<T> {
  column?: number;
  list: T[];
  renderItem: Function;
}

interface ColumnProps<T> {
  data: T[];
  height: number;
}

export default function WaterfallFlow<T>(props: WaterfallProps<T>) {
  const { column = 2, list } = props;

  const columns = useMemo(() => {
    let arr: ColumnProps<T>[];
    arr = Array.from({ length: column }, () => {
      return { data: [], height: 0 };
    });

    if (list.length > 0) {
      list.forEach(item => {
        // const mould = index % column;
        const temp = [...arr];
        const minCol = temp.sort((a, b) => a.height - b.height)[0];

        // console.log(
        //   666,
        //   arr[0].height,
        //   arr[1].height,
        //   arr[2].height,
        //   "----",
        //   item.height
        // );
        minCol.data.push(item);
        minCol.height += item.height / item.width;
      });
    }

    return arr;
  }, [list]);

  return (
    <div className="waterfall-flow">
      {columns.map((column, index) => {
        return (
          <Column
            data={column.data}
            key={index}
            renderItem={props.renderItem}
          ></Column>
        );
      })}
    </div>
  );
}
