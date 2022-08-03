import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
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

  return (
    <div className="container">
      <div className="todoBlock">
        <div>
          <h1>오늘의 할 일</h1>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form todoData={todoData} value={value} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
