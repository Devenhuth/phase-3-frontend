import React, {useState} from "react";
import EditPenguin from "./EditPenguin";

function SinglePenguin({name, age, handleDeletePenguin, id, handleUpdatePenguin, picture }) {
    const [isEditing, setIsEditing] = useState(false);


    function handleDeleteClick() {
        fetch(`http://localhost:9292/penguins/${id}`, {
          method: "DELETE",
        })
        handleDeletePenguin(id);
      }

    function handleUpdateClick(updatedPenguin) {
        setIsEditing(false)
        handleUpdatePenguin(updatedPenguin);
    }


    return (
        <div className="SinglePenguin">
            {isEditing ? (
                <EditPenguin
                id={id}
                name={name}
                age={age}
                picture={picture}
                handleUpdatePenguin={handleUpdateClick}
                />
                ) : (
                <div className="soloPenguin">
                <h2>Name: {name}</h2>
                <img className="penguinPic" src={picture} alt="Penguin Picture" />
                <h3>Age: {age} years old</h3>
                </div>
            )}
            <button onClick={handleDeleteClick}>🐋</button>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>🐧</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default SinglePenguin