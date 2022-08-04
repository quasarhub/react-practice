import React, { useCallback, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';

export default function App() {
  console.log('App component 실행!');
  // todoData의 초기 값을 setTodoData로 Setting 한다.
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      title: '운동하기',
      completed: false
    }
  ]);

  const [value, setValue] = useState('');

  const deleteClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg: max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>오늘의 할 일</h1>
        </div>

        <Lists
          deleteClick={deleteClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />

        <Form
          todoData={todoData}
          setTodoData={setTodoData}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
