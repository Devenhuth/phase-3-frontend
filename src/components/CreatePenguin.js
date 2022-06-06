import React, {useState} from "react";

function CreatePenguin({addNewPenguins}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [breed, setBreed] = useState('')
    const [picture, setPicture] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9292/penguins", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            age: parseInt(age),
            breed_id: parseInt(breed),
            picture: picture
          }),
        })
        .then(res => res.json())
        .then(newPenguin => addNewPenguins(newPenguin))
    
        setName('')
        setAge('')
        setBreed('')
        setPicture('')
      }

      return (
          <div className="newPenguin">
              <h1>Lets make a new Penguin!</h1>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="number" name="age" min="0" max="30" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <input type="number" max="5" min="1" name="breed" placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} />
                <input type="text" name="picture" placeholder="Image URL" value={picture} onChange={e => setPicture(e.target.value)} />
                <button type="submit">🐧🐧</button>
              </form>
          </div>
      )
}

export default CreatePenguin