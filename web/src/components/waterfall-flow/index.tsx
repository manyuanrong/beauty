import React, { useState, useEffect } from "react";
import "./index.less";
import { itemProps } from "./../../model/waterfall-flow";

const Item = (props: itemProps) => {
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

const fetchList = ({ page = 1, size = 10 }) => {
  console.log(page, size);
  return new Promise(resolve =>
    resolve([
      {
        imgUrl: "https://m.yh31.com/tp/zjbq/201903251932105461.gif",
        title: "猪"
      },
      {
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠"
      },
      {
        imgUrl:
          "http://image.biaobaiju.com/uploads/20181017/20/1539780742-UcLIvzpMJk.jpg",
        title: "小心心"
      },
      {
        imgUrl: "https://m.yh31.com/tp/zjbq/201903251932105461.gif",
        title: "猪"
      },
      {
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠"
      },
      {
        imgUrl:
          "http://image.biaobaiju.com/uploads/20181017/20/1539780742-UcLIvzpMJk.jpg",
        title: "小心心"
      },
      {
        imgUrl: "https://m.yh31.com/tp/zjbq/201903251932105461.gif",
        title: "猪"
      },
      {
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠"
      },
      {
        imgUrl:
          "http://image.biaobaiju.com/uploads/20181017/20/1539780742-UcLIvzpMJk.jpg",
        title: "小心心"
      }
    ])
  );
};

const scrollBottom = (action: any, dependencies: []) => {
  function doInBottom(event: any) {
    console.log(888, event);
  }

  useEffect(() => {
    window.addEventListener("scroll", doInBottom);

    return () => {
      window.removeEventListener("scroll", doInBottom);
    };
  }, dependencies);
};

export default function WaterfallFlow() {
  const [page] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList({ page }).then(setList);
  }, [page]);

  scrollBottom(() => {}, []);

  // const nextPage = () => setPage(currentPage => currentPage + 1);

  return (
    <div className="waterfall-flow">
      {list.map((element, index) => {
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
}
