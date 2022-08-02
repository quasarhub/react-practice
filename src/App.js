// class형 component를 이용해보자.
// 그러려면 class를 component로 바꿔야하는데,
// React가 가지고 있는 Component를 상속받아서 사용해야 한다.
import React, { Component } from 'react';

import './App.css';

// 외부에서 사용이 되려면 반드시 export 되어야 한다.
// 그래야 class를 사용할 수 있다.
export default class App extends Component {
  // render라는 메서드는 화면을 그려준다.
  render() {
    return (
      <div className="container">
        <div className="todoBlock">오늘의 할 일</div>
      </div>
    );
  }
}
