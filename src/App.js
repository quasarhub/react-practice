import React from 'react';

export default function App() {
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
