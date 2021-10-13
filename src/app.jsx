import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // 변수와 업데이트할 수 있는 함수가 각각 할당됨. 초기값은 비워진 목록

  const search = query => {
    youtube
    .search(query)
    .then(videos=>setVideos(videos));
  }

  //마운트가 되었거나 콜백이 되었을때 사용하는 api. 원하는 함수를 등록해놓으면 마운트될때, 콜백되었을때 호출되게 됨
  // 두번째 인자로 아무것도 전달하지않으면 컴포넌트에 state나 prop이 업데이트가 될때마다 무조건 반복 호출
  // [] 텅텅 빈 배열을 두번째 인자로 전달하면 마운트 되었을때만 호출
  // [names] 라고 입력하면 names이 바뀌었을때만 호출함 
  useEffect(()=>{  
    youtube
    .mostPopular()
    .then(videos=>setVideos(videos));
  }, []); 
  return (
    <div className = {styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
