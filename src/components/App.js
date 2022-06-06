import React, { useState, useEffect } from "react";
import Header from "./Header"
import Body from "./Body"
import CreatePenguin from "./CreatePenguin"


function App() {

  const [penguinNest, setPenguinNest] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/penguins")
    .then(response => response.json())
    .then(data => setPenguinNest(data))
  },[])

  function handleDeletePenguin(id) {
    const updatedPenguin = penguinNest.filter((penguin) => penguin.id !== id);
    setPenguinNest(updatedPenguin);
  }

  const addNewPenguins = (newPenguin) => {
    setPenguinNest([...penguinNest, newPenguin])
  }

  function handleUpdatePenguin(updatedPen) {
    const updatedPenguin = penguinNest.map(penguin => {
      if (penguin.id === updatedPen.id) {
        return updatedPen;
      } else {
        return penguin
      }
    });
    setPenguinNest(updatedPenguin)
  }

  return (
    <div className="snow_wrap">
    <div className="App">
      <img src="https://i.gifer.com/origin/39/39f78ed05b58bd9fa3962034d7907c07_w200.gif" alt="penguin gif" className="penguinWalk"/>
      <img src="https://i.gifer.com/origin/39/39f78ed05b58bd9fa3962034d7907c07_w200.gif" alt="penguin gif" className="penguinWalk2"/>
      <Header />
      <CreatePenguin addNewPenguins={addNewPenguins}/>
      <Body penguinNest={penguinNest} handleDeletePenguin={handleDeletePenguin} handleUpdatePenguin={handleUpdatePenguin} />
    </div>
    <div className="snow"></div>
    </div>
  );
}

export default App;
