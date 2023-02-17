import React, { useState } from "react";// we created a state that is todoitem and to create a state we need to import a hook called useState.
import uniqid from "uniqid";

import "./App.css";// useState returns us an array which has two values basically 1.name of the state variable 2.(setter)function which will help me to update state value.

import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup/InputGroup";

const App = () => {
  const [todoItem, setTodoItem] = useState(""); //we initialize state value to empty.(input box would be empty for first time)
  const [todoList, setTodoList] = useState(["Todo 1", "Todo 2"]);// we created another state to store the todo values.(todo list will look like an array)
  const [showHeading, setShowHeading] = useState(true); // another state to show conditional rendering

  const handleInputChange = (event) => { // this will accept an event
    setTodoItem(event.target.value); //value contains whatever you typed in the inputfields.
  }; //input tag basically has a tendency to return an event,a synthetic object that will contain something called target and we will have a value

  const onTodoItemAddition = () => {
    const updatedTodoList = [...todoList];//we will push new todo item in this array
    updatedTodoList.push(todoItem); //it will push new todo item 
    setTodoList(updatedTodoList);//then we will set the updated todolist.
    setTodoItem("");//after that the inputvalue need to get empty.
  };

  const handleDelete = (item) => {
    let updatedTodoList = [...todoList];
    updatedTodoList = updatedTodoList.filter((todoText) => todoText !== item);//this updatedlist will not contain the item which we are trying to delete

    // const newTodo = updatedTodoList
    //   .map((todoText) => {
    //     if (todoText !== item) return todoText;
    //   })
    //   .filter((i) => i);

    // console.log(newTodo);

    setTodoList(updatedTodoList);// pushing that array in updated todolist.
  };

  return ( // we imported the header componenet and used it in the return statement
    <div>
      {/* {showHeading ? (
        <Header
          headerText="Todo App"
          subHeaderText="You can even delete the todo item"
        />
      ) : null} */}

      {showHeading && ( //if showheading is true just return and render the header component.
        <Header
          headerText="Todo App"
          subHeaderText="You can even delete the todo item" //headertext and subheadertext are two props passed here.
        />
      )}

      <InputGroup
        label="Type your TODO Item"
        type="text"
        value={todoItem}
        onChange={handleInputChange}
        onTodoItemAddition={onTodoItemAddition}
        btnLabel="+ Add Item"
      />

      <ul>
        {todoList.map((item, idx) => { //i am looping through the list of my todo items and am returning a list
          return ( //any item that you are returning from a map in ui,u need to add a extra attribute called key equals to some value.(DOM)TO figure out which node has the changes react needs a unique identifier for every node and key is the unique identifier that need to be passed.
            <li className="list-item" key={uniqid()}>
              {console.log(uniqid())} 
              {item}{" "}
              <button
                className="delete-btn"
                onClick={() => {
                  handleDelete(item); //once you click on this buttondelete gets executed.
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;