import React from 'react';
import { firebase } from './firebase.js';

function App() {

  const [input, setInput] = React.useState('');
  const [data, setData] = React.useState([]);

  // 追加
  const add = () => {
    firebase.firestore().collection('collectionA').add({
      title: 'タイトル',
      content: input,
    });
    // firebase.firestore().collection('collectionA').doc('iddd').set({
    //   title: 'タイトル',
    //   content: input,
    // });
  };

  // 削除
  const remove = () => {
    firebase.firestore().collection('collectionA').doc('iddddd').delete();
  };

  // 更新
  const update = () => {
    // firebase.firestore().collection('collectionA').doc('iddddd').set({
    //   title: 'ボタン押し他',
    //   num: 123,
    //   bool: false,
    //   text: '書き換えたよ',
    // });
    firebase.firestore().collection('collectionA/BhXXXxxHAmSZmhkBUC3R/collectionB/mMmuLCYwjKtK3JV1GlRb').set({
      // その場所だけ書き換える
      text: '書き換えたよ'
    });
  };

  // 取得
  const getData = async () => {
    // firebase.firestore().collection('collectionA').get().then(
    //   (snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //       setData([...data, doc.data()]);
    //     });
    //   }
    // ).catch((error) => { console.log(error); });

    const snapshot = await firebase.firestore().collection('collectionA').get();
    const datas = snapshot.docs.map((doc) => {
      // 処理
      return doc.data();
    });
    setData(datas);
  };

  // データの監視
  const observe = async () => {
    firebase.firestore().collection('collectionA').onSnapshot((snapshot) => {
      const datas = snapshot.docs.map(doc => doc.data());
      setData(datas);
    });
  };

  return (
    <div>
      <h1>Firebase Lesson</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={add}>追加</button>
      <button onClick={remove}>削除</button>
      <button onClick={update}>更新</button>
      <button onClick={getData}>取得</button>
      <button onClick={observe}>監視</button>
      {data.map(message => <p>{message.title}:{message.content}</p>)}
    </div>
  );
}

export default App;
