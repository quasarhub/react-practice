import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

// rfc에서 rafc로 바꾼이유는 React Memo를 이용하기 위해서이다.
const Lists = React.memo(({ deleteClick, todoData, setTodoData }) => {
  console.log('Lists component 실행!');
  const handleDrop = (e) => {
    if (!e.destination) return;

    const newTodoData = todoData;
    const [reorder] = newTodoData.splice(e.source.index, 1);

    newTodoData.splice(e.destination.index, 0, reorder);

    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="to-do">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    // Component가 위치해야한다.
                    // 반복하면서 Component를 찍으세요.
                    <List
                      deleteClick={deleteClick}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

// Lists를 외부에서 사용할 수 있도록 추가.
// Arrow function이 아니라 그냥 function을 이용할 때는
// export default function Lists() { } 와 같이 쓸 수 있었으나
// Arrow function에서는 아래와 같이 명시해두어야 한다.
export default Lists;
