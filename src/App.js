import React, { useState } from 'react';
import './App.css';
import Lists from './components/Lists';

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

  return (
    <div className="container">
      <div className="todoBlock">
        <div>
          <h1>오늘의 할 일</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />

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
