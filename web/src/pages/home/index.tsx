import React, { useState, useEffect } from "react";
import "./index.less";
import WaterfallFlow from "./../../components/waterfall-flow";
import { ItemProps } from "../../model/waterfall-flow";
import { getList } from "../../api/home";

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
        imgUrl: require("./../../static/img/home/1.jpg"),
        title: "1",
        width: 650,
        height: 974
      },
    ])
  );
};

function Home() {
  const [page] = useState(1);
  const [list, setList] = useState<ItemProps[]>([]);

  useEffect(() => {
    getList().then( (res) => setList(res) )
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
