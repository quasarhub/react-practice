import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

// 구조분해할당을 이용
export default function Lists({ todoData, setTodoData }) {
  console.log('Lists component 실행!');
  const handleDrop = (e) => {
    // e: event 객체, event에 대한 세부정보를 가지고 있어요!
    // e.source : drag한 객체, e.destination : drop한 객체
    if (!e.destination) return;

    const newTodoData = todoData;

    // drag되는 놈을 삭제
    const [reorder] = newTodoData.splice(e.source.index, 1);

    // drop되는 위치에 삽입
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
}
