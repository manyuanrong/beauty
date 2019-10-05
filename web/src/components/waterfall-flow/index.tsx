import React, { useState, useEffect } from "react";
import "./index.less";
import { ItemProps, ColumnProps } from "./../../model/waterfall-flow";

const Item = (props: ItemProps) => {
  console.log(123, props.column);
  return (
    <div className="item" style={{ width: props.width + "px" }}>
      <img src={props.imgUrl} alt="" />
      <p>{props.title}</p>
    </div>
  );
};

const itemWidth = 300;
const windowWidth = window.innerWidth < 950 ? 950 : window.innerWidth;
const column = Math.floor(windowWidth / itemWidth);

const fetchList = ({ page = 1, size = 10 }): Promise<ItemProps[]> => {
  console.log(page, size);
  return new Promise(resolve =>
    resolve([
      {
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪1"
      },
      {
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪2"
      },
      {
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠3"
      },
      {
        imgUrl:
          "http://image.biaobaiju.com/uploads/20181017/20/1539780742-UcLIvzpMJk.jpg",
        title: "小心心4"
      },
      {
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪5"
      },
      {
        imgUrl:
          "http://image.biaobaiju.com/uploads/20181017/20/1539780742-UcLIvzpMJk.jpg",
        title: "仓鼠6"
      },
      {
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠7"
      },
      {
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪8"
      },
      {
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠9"
      },
      {
        imgUrl:
          "http://image.biaobaiju.com/uploads/20181017/20/1539780742-UcLIvzpMJk.jpg",
        title: "小心心10"
      }
    ])
  );
};

// const scrollBottom = (action: any, dependencies: []) => {
//   function doInBottom(event: any) {
//     console.log(888, event);
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", doInBottom);

//     return () => {
//       window.removeEventListener("scroll", doInBottom);
//     };
//   }, dependencies);
// };

const Column = (props: ColumnProps) => {
  return (
    <div className="column">
      {props.list.map((element, index) => {
        return (
          <Item
            key={index}
            title={element.title}
            imgUrl={element.imgUrl}
            column={column}
            width={itemWidth}
          ></Item>
        );
      })}
    </div>
  );
};

export default function WaterfallFlow() {
  // scrollBottom(() => {}, []);
  // const nextPage = () => setPage(currentPage => currentPage + 1);

  const [page] = useState(1);
  const [list, setList] = useState<ItemProps[]>([]);
  useEffect(() => {
    fetchList({ page }).then(res => {
      console.log(888, res);
      setList(res);
      console.log(999, list);
    });
  }, [page]);

  const columns = Array(column).fill([]); // [ [],[],[] ]

  return (
    <div className="waterfall-flow">
      {columns.map((column, index) => {
        return <Column list={column} key={index}></Column>;
      })}
    </div>
  );
}
