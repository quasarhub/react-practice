import React, { useState } from 'react';
import './App.css';

export default function App() {
  // todoData의 초기 값을 setTodoData로 Setting 한다.
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      title: '운동하기',
      completed: false
    }
  ]);

  const [value, setValue] = useState('');

  const btnStyle = {
    color: 'red',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  };

  const getStyle = (completed) => {
    return {
      padding: '20px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none'
    };
  };

  const deleteClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };

    setTodoData([...todoData, newTodo]);
    setValue('');
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div>
          <h1>오늘의 할 일</h1>
        </div>

        {/* JSX안의 JS 코드는 {} 로 감싼다. */}
        {todoData.map((data) => (
          // return 안에 JSX이 다시 들어간다.
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(data.id)}
            />

            {data.title}
            <button style={btnStyle} onClick={() => deleteClick(data.id)}>
              delete
            </button>
          </div>
        ))}
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="todoInput"
            style={{ flex: '10', padding: '5px' }}
            placeholder="새로운 할 일을 입력하세요!"
            value={value}
            onChange={handleChange}
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
