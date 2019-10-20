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
        imgUrl: require("./../../static/img/home/1.jpg"),
        title: "1",
        width: 650,
        height: 974
      },
      {
        id: "2",
        imgUrl: require("./../../static/img/home/2.png"),
        title: "2",
        width: 200,
        height: 199
      },
      {
        id: "3",
        imgUrl: require("./../../static/img/home/3.jpg"),
        title: "3",
        width: 200,
        height: 200
      },
      {
        id: "4",
        imgUrl: require("./../../static/img/home/4.jpg"),
        title: "4",
        width: 640,
        height: 640
      },
      {
        id: "5",
        imgUrl: require("./../../static/img/home/1.jpg"),
        title: "5",
        width: 650,
        height: 974
      },
      {
        id: "6",
        imgUrl: require("./../../static/img/home/2.png"),
        title: "6",
        width: 200,
        height: 199
      },
      {
        id: "7",
        imgUrl: require("./../../static/img/home/3.jpg"),
        title: "7",
        width: 200,
        height: 200
      },
      {
        id: "8",
        imgUrl: require("./../../static/img/home/4.jpg"),
        title: "8",
        width: 640,
        height: 640
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
