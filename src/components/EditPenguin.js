import React, { useState } from "react";

function EditPenguin({ id, name, age, handleUpdatePenguin, picture }) {
    const [penguinName, setPenguinName] = useState(name);
    const [penguinAge, setPenguinAge] = useState(age);
    const [penguinPic, setPenguinPic] = useState(picture);

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/penguins/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: penguinName,
                age: penguinAge,
                picture: penguinPic
            }),
        })
            .then((r) => r.json())
            .then(updatedPenguin => handleUpdatePenguin(updatedPenguin));
    }
    
    
    return (
        <form className="editPenguin" onSubmit={handleFormSubmit}>
            <input type="text" name="name" value={penguinName} onChange={(e) => setPenguinName(e.target.value)}/>
            <input type="number" name="age" value={penguinAge} onChange={(e) => setPenguinAge(e.target.value)}/>
            <input type="text" name="picture" value={penguinPic} onChange={(e) => setPenguinPic(e.target.value)}/>
            <input type="submit" value="Save" />
        </form>
    );
}

export default EditPenguin;