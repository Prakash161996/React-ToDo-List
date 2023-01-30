import "./App.css";
import React, { useState } from "react";
import TodoList from './TodoList';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemsEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems =(id) =>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem , index)=> {
          return index !== id;
        })
      })
  } 
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List Making</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={itemsEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList}</li> */}
            {items.map((itemval , index) => {
              return <TodoList  key={index}
              id={index}
               text={itemval}
               onSelect={deleteItems}
               />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
