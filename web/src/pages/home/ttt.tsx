// import React, { useCallback } from "react";

// interface ITestProps {
//   data: string[];
//   title?: string;
//   onBack?(event: React.MouseEvent): void;
//   onClose?(): void;
// }

// export default function Modal(props: ITestProps) {
//   const { title = "", onBack, onClose = () => undefined } = props;
//   const onHide = useCallback(
//     (event: React.FormEvent) => {
//       onClose();
//     },
//     [onClose]
//   );

//   return (
//     <div className="app-header">
//       <div>{title}</div>
//       <div className="back" onClick={onHide}>
//         x
//       </div>
//       <div>
//         <Bottom onClose={onClose} />
//       </div>
//     </div>
//   );
// }

// function Bottom(props: { onClose(): void }) {
//   return (
//     <div>
//       <button onClick={props.onClose}></button>
//     </div>
//   );
// }

// const test = <Modal data={[]} />;

// let cacheA: number;
// let memo1: number;

// function Test(props: { a: number }) {
//   const aaa = useMyMemo(() => {
//     return 1 + 1;
//   }, []);
// }

// const cacheDeps: any[] = [];
// let resultCache: any;
// let callCache: any;
// function useMyMemo<T = any>(func: () => T, deps: any[]): T {
//   const isCache = deps.find((dep, index) => cacheDeps[index] === dep);
//   if (isCache) {
//     return resultCache as T;
//   } else {
//     resultCache = func();
//     return resultCache;
//   }
// }

// function useMyCallback<T = () => any>(func: T, deps: any[]): T {
//   const isCache = deps.find((dep, index) => cacheDeps[index] === dep);
//   if (isCache) {
//     callCache = func;
//     return func;
//   } else {
//     resultCache = func;
//     return resultCache;
//   }
// }
