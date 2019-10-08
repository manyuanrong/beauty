import React, { useRef, useState, useEffect } from "react";

interface ColumnProps<T> {
  list: T[];
  renderItem: Function;
}
export default function Column<T>(props: ColumnProps<T>) {
  const { list } = props;
  const [height, setHeight] = useState<number>(0);
  const columnRef = useRef<HTMLDivElement>(null);
  console.log(height);

  useEffect(() => {
    if (columnRef.current && columnRef.current.clientHeight > 0)
      setHeight(columnRef.current.clientHeight);
  }, [list]);

  return (
    <div className="column" ref={columnRef}>
      {props.list.map((element: T, index: number) => {
        return <div key={index}>{props.renderItem(element)}</div>;
      })}
    </div>
  );
}
