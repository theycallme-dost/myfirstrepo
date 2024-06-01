import { useState } from "react";
import "./App.css";
import { tabs } from "./data/demoData";

function App() {
  let [TodoList, setTodoList] = useState([]);
  let [activeTab, setactiveTab] = useState(0);
  let [activeContent, setactiveContent] = useState(tabs[0]);
  let changeData = (index) => {
    setactiveTab(index);
    setactiveContent(tabs[index]);
  };

  let ToDoListSave = (event) => {
    let toname = event.target.toname.value;
    if (!TodoList.includes(toname)) {
      let finalToDoList = [...TodoList, toname];
      setTodoList(finalToDoList);
    } else {
      alert("Todo name already exists..");
    }
    event.preventDefault();
  };
  let list = TodoList.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        TodoList={TodoList}
        setTodoList={setTodoList}
      />
    );
  });
  return (
    <div className="App">
      <div className="tabOuter">
        <h1 style={{ textAlign: "left" }}> visions</h1>
        <ul>
          {tabs.map((tabsItems, index) => {
            return (
              <li>
                {" "}
                <button
                  onClick={() => changeData(index)}
                  // eslint-disable-next-line
                  className={activeTab == index ? "activeButton" : ""}
                >
                  {tabsItems.title}
                </button>{" "}
              </li>
            );
          })}
        </ul>
        {activeContent !== undefined ? <p>{activeContent.description}</p> : ""}
      </div>
      <h1> ToDo List</h1>
      <form action="" onSubmit={ToDoListSave}>
        <input type="text" name="toname" /> <button>save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, TodoList, setTodoList }) {
  let [status, setStatus] = useState(false);
  let deleteData = () => {
    // eslint-disable-next-line
    let finalData = TodoList.filter((v, i) => i != indexNumber);
    setTodoList(finalData);
  };
  let CheckStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={CheckStatus}>
      {value} <span onClick={deleteData}>&times;</span>
    </li>
  );
}
