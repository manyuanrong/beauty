import axios from 'axios';
import { ItemProps } from '../model/waterfall-flow';

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;

export function getList() {
    // const url = "/api/napi/blog/list/by_search/?kw=%E5%9B%BD%E6%BC%AB"
    const url = "/api/search/acjson?tn=resultjson_com&ipn=rj&word=%E5%9B%BD%E6%BC%AB%E5%A3%81%E7%BA%B8";
    return axios.get(url).then( (res) => {
        const result = res.data.data;

        let arr: ItemProps[] = [];
        for( let value of result.values() ){
            if(  value.replaceUrl && value.replaceUrl.length > 1 ) {
                arr.push({
                    title: value.fromPageTitleEnc,
                    imgUrl: value.replaceUrl[1].ObjUrl,
                    width: value.width,
                    height: value.height
                });
            }
        }

        return arr;
    } );
}
