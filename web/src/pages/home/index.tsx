import React, { useState, useEffect, useCallback, useRef } from "react";
import "./index.less";
import Masonry from "./../../components/masonry";
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

function Home() {
  const [page,setPage] = useState(1);
  const [list, setList] = useState<ItemProps[]>([]);
  const scrollDom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback( ( event ) => {
    console.log(333, event);
    // console.log('---scroll----', event );
    // if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    // console.log('---scroll----next page---',page, page + 1 );
    // setPage( page + 1 );
  }, [])

  useEffect(() => {
    console.log(111, scrollDom); 
    // scrollDom.current.onscoll();
    scrollDom.current && scrollDom.current.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getList( page ).then( (res) => setList(res) );
  }, [page]);

  const scroll = useCallback( () => {
    console.log('---masonry-to-bottom---')
  }, [])

  return (
    <div className="page-home" onScroll={handleScroll}>
      <Masonry column={3} list={list} renderItem={renderItem} />
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
