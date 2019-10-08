import React, { useState, useEffect } from "react";
import "./index.less";
import WaterfallFlow from "./../../components/waterfall-flow";
import { ItemProps } from "../../model/waterfall-flow";

function renderItem(props: ItemProps): React.ReactElement {
  return (
    <div className="item">
      <img src={props.imgUrl} alt="" />
      <p>{props.title}</p>
    </div>
  );
}

const fetchList = ({ page = 1, size = 10 }): Promise<ItemProps[]> => {
  console.log(111, page, size);
  return new Promise(resolve =>
    resolve([
      {
        id: "1",
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪1"
      },
      {
        id: "2",
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪2"
      },
      {
        id: "3",
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠3"
      },
      {
        id: "4",
        imgUrl:
          "//www.cosplaymore.com/uploadfile/20190708/1562572101444299.jpg",
        title: "小心心4"
      },
      {
        id: "5",
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪5"
      },
      {
        id: "6",
        imgUrl:
          "//www.cosplaymore.com/uploadfile/20190708/1562572101444299.jpg",
        title: "仓鼠6"
      },
      {
        id: "7",
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠7"
      },
      {
        id: "8",
        imgUrl: "http://3770.liulinmall.com/vod/2019-04-03/5ca4d70aa21c0.jpg",
        title: "猪8"
      },
      {
        id: "9",
        imgUrl: "https://www.jiuwa.net/tuku/20180507/rZTeGIdY.jpg",
        title: "仓鼠9"
      },
      {
        id: "10",
        imgUrl:
          "//www.cosplaymore.com/uploadfile/20190708/1562572101444299.jpg",
        title: "小心心10"
      }
    ])
  );
};

function Home() {
  const [page] = useState(1);
  const [list, setList] = useState<ItemProps[]>([]);

  useEffect(() => {
    fetchList({ page }).then(res => setList(res));
  }, [page]);
  console.log(888, list);

  return (
    <div className="page-home">
      <WaterfallFlow column={3} list={list} renderItem={renderItem} />
    </div>
  );
}

export default Home;

// scrollBottom(() => {}, []);
// const nextPage = () => setPage(currentPage => currentPage + 1);

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
