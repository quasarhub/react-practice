// class형 component를 이용해보자.
// 그러려면 class를 component로 바꿔야하는데,
// React가 가지고 있는 Component를 상속받아서 사용해야 한다.
import React, { Component } from 'react';

import './App.css';

// 외부에서 사용이 되려면 반드시 export 되어야 한다.
// 그래야 class를 사용할 수 있다.
export default class App extends Component {
  constructor(props) {
    super(props);
    // state는 해당 이름이 정해져있다. 값이 변경되면 자동으로 인지돼서 re-rendering이 된다.
    this.state = {
      todoData: [
        {
          id: '1',
          title: '운동하기',
          completed: false
        }
      ],
      value: ''
    };
  }

  btnStyle = {
    color: 'red',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  };

  getStyle = (completed) => {
    return {
      padding: '20px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none'
    };
  };

  deleteClick = (id) => {
    // 해당 아이디에 대한 할 일 목록을 지워야 한다.
    // 데이터를 지워야한다. --> 열심히 하면 배열 처리가 가능할 것 같다.
    const newTodoData = this.state.todoData.filter((data) => data.id !== id);
    // 변경된 데이터를 가지고 화면을 다시 그려야 한다. --> state를 이용하여야한다.
    // React에서 데이터가 변할 때 화면을 다시 rendering 해주기 위해서 사용하는 것이 React State이다.
    // State는 component 안에서 관리된다.
    // 일반적으로 생성자 안에서 정의된다. 이름이 state라는 property 이다.
    this.setState({ todoData: newTodoData }); // state를 새로운 data인 newTodoDate로 state를 변경함.
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    // 현재 submit event가 발생해서 그 것을 처리하고 있다.
    // submit 이라는 default event가 진행되고 있기 때문에 이 처리를 하고 싶지 않다.
    // 그럼 event 객체를 처리하면 된다. -> 그럼 이제 입력을 누르더라도 다시 request하지 않는다.
    e.preventDefault();

    let newTodo = {
      id: Date.now(), // unique한 값을 표현하기 위해서 사용하였다.
      title: this.state.value, // 현재 state에 입력된 값을 가져옴
      completed: false
    };

    // 기존에 this.state.todoData가 가지고 있던 객체들을 전부 가져오고, 새로운 배열 추가
    // 그리고 값을 치고 입력을 눌렀을 때 값이 안보여야 하므로 value 값을 리셋해야한다.
    this.setState({ todoData: [...this.state.todoData, newTodo], value: '' });
  };

  handleCompleteChange = (id) => {
    // id에 대해 todoData의 completed 값을 변경시켜야 한다.
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        // completed라면 not completed 로, not completed면 completed로
        data.completed = !data.completed;
      }
      return data;
    });

    this.setState({ todoData: newTodoData });
  };
  // render라는 메서드는 화면을 그려준다.
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div>
            <h1>오늘의 할 일</h1>
          </div>

          {/* JSX안의 JS 코드는 {} 로 감싼다. */}
          {this.state.todoData.map((data) => (
            // return 안에 JSX이 다시 들어간다.
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => this.handleCompleteChange(data.id)}
              />

              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.deleteClick(data.id)}
              >
                delete
              </button>
            </div>
          ))}
          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="todoInput"
              style={{ flex: '10', padding: '5px' }}
              placeholder="새로운 할 일을 입력하세요!"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />
          </form>
        </div>
      </div>
    );
  }
}
