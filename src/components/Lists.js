import React from 'react';

// 구조분해할당을 이용
// {todoData, setTodoData} = {todoData: {todoData}, setTodoData: {setTodoData}}
export default function Lists({ todoData, setTodoData }) {
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

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const deleteClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
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
    </div>
  );
}
