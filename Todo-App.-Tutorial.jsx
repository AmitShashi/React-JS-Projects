import React, { useState } from 'react';

export function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([])

  function inputUpdater(e) {
    setTask(e.target.value)
  }

  function Addvalue(task) {
    setTasklist([...tasklist, task])
    setTask("")
  }
  
  function Delete(index) {
    const newlist = [...tasklist]
    newlist.splice(index, 1)
    setTasklist(newlist)
  }

  console.log(tasklist)
  return (
    <>
      <input onChange={inputUpdater} value={task} placeholder="task" />
      <button onClick={() => { Addvalue(task) }}>Add</button>
      <br />
      <h1>Todo-list:</h1>
      {
        tasklist.map((value, index) => {
          return (
            <>
              <ul>
                <li key={index}>
                  {value} :
                  <button onClick={() => { Delete(index) }}>Delete</button>
                </li>
              </ul>
            </>
          )
        })
      }
    </>
  );
}

export default function App() {
  console.log("App rendered")
  return (
    <main>
      <TodoApp />
    </main>
  )
}
