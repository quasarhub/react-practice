// class형 component를 이용해보자.
// 그러려면 class를 component로 바꿔야하는데,
// React가 가지고 있는 Component를 상속받아서 사용해야 한다.
import React, { Component } from 'react';

import './App.css';

// 외부에서 사용이 되려면 반드시 export 되어야 한다.
// 그래야 class를 사용할 수 있다.
export default class App extends Component {
  btnStyle = {
    color: 'red',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  };

  getStyle = () => {
    return {
      padding: '20px',
      borderBottom: '1px #ccc dotted',
      textDecoration: 'none'
    };
  };

  todoData = [
    {
      id: '1',
      title: '운동하기',
      completed: false
    },
    {
      id: '2',
      title: '공부하기',
      completed: false
    },
    {
      id: '3',
      title: '밥먹기',
      completed: false
    }
  ];

  // render라는 메서드는 화면을 그려준다.
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div>
            <h1>오늘의 할 일</h1>
          </div>

          {/* JSX안의 JS 코드는 {} 로 감싼다. */}
          {this.todoData.map((data) => (
            // return 안에 JSX이 다시 들어간다.
            <div style={this.getStyle()}>
              <input type="checkbox" defaultChecked={false} /> {data.title}
              <button style={this.btnStyle}>delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
